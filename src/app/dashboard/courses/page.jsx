"use client";

import React, { useEffect, useState } from "react";

export default function TestPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem("jwt"); // get JWT from localStorage
      if (!token) {
        console.error("No token found");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch courses");
          setLoading(false);
          return;
        }

        const data = await res.json();
        setCourses(data.courses);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0d0d16] text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-purple-400">Test Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div
            key={course.id}
            className="p-4 bg-[#1a1a2e] rounded-lg hover:bg-[#24243a] transition"
          >
            {course.banner ? (
              <img
                src={course.banner}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                No Banner
              </div>
            )}
            <h2 className="text-purple-400 font-semibold">{course.title}</h2>

            <div className="mt-4">
              <h3 className="text-white font-medium">Modules:</h3>
              <ul className="text-gray-400 mt-2 list-disc ml-5">
                {course.modules.map(mod => (
                  <li key={mod.id}>
                    {mod.title} -{" "}
                    <a
                      href={mod.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 underline"
                    >
                      Watch
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
