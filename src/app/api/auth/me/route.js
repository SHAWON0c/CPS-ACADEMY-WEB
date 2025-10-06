import axios from "axios";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    // Populate the role
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/me?populate=role`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify(err.response?.data || { message: "Server error" }),
      { status: err.response?.status || 500 }
    );
  }
}
