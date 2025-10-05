'use client';

import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useAuth();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
    } catch (err) {
      alert("Registration failed");
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
          Register - CPS Academy
        </h1>
        <p className="text-gray-300 text-center mb-6 text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-yellow-400 underline hover:text-yellow-300">
            Sign In
          </Link>
        </p>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="block w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          required
        />

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
          Register
        </button>
      </form>
    </div>
  );
}
