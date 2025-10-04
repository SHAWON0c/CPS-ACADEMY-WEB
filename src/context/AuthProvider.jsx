"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axiosSecure from "@/lib/axiosSecure";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return setLoading(false);

    const fetchUser = async () => {
      try {
        const res = await axiosSecure.get("/auth/me");
        setUser(res.data);
      } catch {
        localStorage.removeItem("jwt");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const signin = async ({ email, password }) => {
    try {
      const res = await axiosSecure.post("/auth/signin", { email, password });
      localStorage.setItem("jwt", res.data.jwt);
      setUser(res.data.user);
      router.push("/dashboard");
    } catch (err) {
      throw new Error(err.response?.data?.error || "Signin failed");
    }
  };

  const register = async ({ username, email, password }) => {
    try {
      const res = await axiosSecure.post("/auth/register", { username, email, password });
      localStorage.setItem("jwt", res.data.jwt);
      setUser(res.data.user);
      router.push("/dashboard");
    } catch (err) {
      throw new Error(err.response?.data?.error || "Registration failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    router.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signin, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
