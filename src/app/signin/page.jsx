'use client';

import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";

export default function SignInPage() {
  const { signin } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(form);
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 text-white p-8 rounded-xl shadow-xl"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-yellow-400 mb-2 text-center">
          Login - CPS Academy
        </h1>
        <p className="text-gray-300 text-center mb-6 text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-yellow-400 underline hover:text-yellow-300">
            Register
          </Link>
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="block w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="block w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
