// /app/viewschedule/page.jsx
"use client";
import React from "react";

export default function ViewSchedule() {
  const scheduleData = [
    {
      week: "Week 1",
      topic: "Introduction to Competitive Programming",
      details: "Setup, I/O optimization, complexity analysis, basic problems",
      date: "Oct 12, 2025",
      time: "7:00 PM",
      instructor: "Shawon Siddikee",
    },
    {
      week: "Week 2",
      topic: "Data Structures - Arrays & Strings",
      details: "Problem-solving with arrays, prefix sums, and string hashing",
      date: "Oct 19, 2025",
      time: "7:00 PM",
      instructor: "Md Rahim",
    },
    {
      week: "Week 3",
      topic: "Dynamic Programming Basics",
      details: "Memoization, tabulation, Fibonacci variants, subset sum",
      date: "Oct 26, 2025",
      time: "7:00 PM",
      instructor: "Al Amin",
    },
    {
      week: "Week 4",
      topic: "Graphs & Shortest Paths",
      details: "BFS, DFS, Dijkstra’s, and problem patterns",
      date: "Nov 2, 2025",
      time: "7:00 PM",
      instructor: "Shawon Siddikee",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-800 text-white py-24 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          🗓️ Bootcamp Schedule
        </h1>
        <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">
          Here’s the detailed weekly schedule for our free competitive programming bootcamp.  
          Stay on track, join live, and master your skills step by step!
        </p>

        <div className="grid gap-6">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h2 className="text-2xl font-bold text-yellow-400">{item.week}</h2>
                <div className="text-sm text-slate-300">
                  {item.date} • {item.time}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.topic}</h3>
              <p className="text-slate-300 mb-3">{item.details}</p>
              <div className="text-sm text-slate-400">
                👨‍🏫 Instructor: <span className="text-white">{item.instructor}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
