// components/CourseLayout.jsx
import React from "react";
import { FaHeart, FaGift } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

const lessons = [
  { title: "Milestone 1: HTML, CSS And Github As A Beginner", duration: "13 h 20 m", count: "83/83" },
  { title: "Milestone 2: Responsive Web Layout", duration: "8 h 32 m", count: "55/55" },
  { title: "Milestone 3: CSS Frameworks", duration: "7 h 48 m", count: "47/47" },
  { title: "Milestone 4: Hello JavaScript", duration: "16 h 6 m", count: "97/97" },
];

const CourseLayout = ({ title, videoUrl }) => {
  return (
    <div className="min-h-screen bg-[#0d0d16] text-white flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-purple-400 text-lg font-semibold">{title}</h1>
        <div className="flex items-center gap-4 text-gray-300">
          <FaHeart className="text-red-500" /> <span>3</span>
          <FiBookOpen />
          <FaGift className="text-yellow-400" />
        </div>
      </div>

      <div className="flex flex-1">
        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Video Player */}
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
              Previous
            </button>
            <button className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-[320px] border-l border-gray-800 p-6 overflow-y-auto">
          <div className="mb-4">
            <h2 className="text-sm text-gray-400">Running Module : 70</h2>
            <div className="w-full bg-gray-700 h-2 rounded mt-2">
              <div className="bg-purple-500 h-2 rounded" style={{ width: "85%" }}></div>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search Lesson"
            className="w-full px-3 py-2 rounded bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="mt-6 flex flex-col gap-4">
            {lessons.map((lesson, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-[#1a1a2e] hover:bg-[#24243a] cursor-pointer transition"
              >
                <h3 className="text-purple-400 font-medium">{lesson.title}</h3>
                <p className="text-gray-400 text-sm">
                  {lesson.duration} • {lesson.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
