"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";

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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 border rounded">
      <h2 className="text-2xl mb-4">Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="block w-full mb-4 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="block w-full mb-4 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
        Sign In
      </button>
    </form>
  );
}
