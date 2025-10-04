import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, email, password } = await req.json();

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, {
      username,
      email,
      password,
    });

    const { jwt, user } = res.data;

    return NextResponse.json({ jwt, user });
  } catch (err) {
    console.error("Register error:", err.response?.data || err.message);
    return NextResponse.json({ error: "Registration failed" }, { status: 400 });
  }
}
