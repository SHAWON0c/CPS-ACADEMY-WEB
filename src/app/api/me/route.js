import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return NextResponse.json({ user: res.data });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
