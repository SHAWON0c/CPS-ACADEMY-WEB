import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Get the token from headers
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ message: "Missing token" }, { status: 401 });
    }

    // Fetch courses from Strapi
    const strapiRes = await fetch(
      "http://localhost:1337/api/courses?populate=*",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!strapiRes.ok) {
      return NextResponse.json(
        { message: "Failed to fetch from Strapi" },
        { status: 500 }
      );
    }

    const data = await strapiRes.json();

    // Map the data to include only necessary fields
    const courses = data.data.map((course) => ({
      id: course.id,
      documentId: course.documentId,  // this is what you need
      title: course.titile,          // fix typo if needed
      banner: course.banner?.data?.attributes?.url || null,
      modules: course.modules.map((mod) => ({
        id: mod.id,
        title: mod.title,
        videoLink: mod.videoLink,
      })),
    }));

    return NextResponse.json({ courses });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
