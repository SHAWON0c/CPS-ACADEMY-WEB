import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
      identifier: email,
      password,
    });

    const { jwt, user } = res.data;

    return NextResponse.json({ jwt, user });
  } catch (err) {
    console.error("Signin error:", err.response?.data || err.message);
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
