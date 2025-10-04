"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";
import axiosSecure from "@/lib/axiosSecure";

export const useValidateJWT = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem("jwt");
    if (!token) {
      logout();
      return;
    }

    const validate = async () => {
      try {
        await axiosSecure.get("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch {
        // If JWT invalid or tampered
        logout();
      }
    };

    validate();
    const interval = setInterval(validate, 60000); // validate every 60s

    return () => clearInterval(interval);
  }, [user, logout]);
};
