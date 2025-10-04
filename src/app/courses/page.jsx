import React from "react";
import Link from "next/link";

const courses = [
  { slug: "course1", title: "C to C++ Bootcamp" },
  { slug: "course2", title: "Advanced Competitive Programming" },
  { slug: "course3", title: "Data Structures & Algorithms" },
];

export default function CoursesPage() {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.slug} className="p-4 bg-slate-800 rounded-lg">
            <Link href={`/courses/${course.slug}`} className="hover:underline">
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
