'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const modules = [
  {
    title: "Basic Programming and Problem-Solving Techniques",
    details: "Covers programming fundamentals like loops, conditionals, functions, and problem-solving strategies. Ideal for beginners."
  },
  {
    title: "C++ STL",
    details: "Hands-on with the Standard Template Library: vectors, maps, sets, queues, stacks. Time-saving tools for competitive coding."
  },
  {
    title: "Basic Algorithms and Data Structures",
    details: "Includes sorting, searching, recursion, linked lists, stacks, queues, and trees — core CS foundations."
  },
  {
    title: "Basic Graph Theory and Dynamic Programming",
    details: "Learn DFS, BFS, shortest paths, and intro to dynamic programming including recursion with memoization."
  },
  {
    title: "Basic Number Theory",
    details: "Master GCD, LCM, primes, sieve algorithms, modular arithmetic — key to mathematical coding problems."
  },
  {
    title: "Intermediate Graph Theory, DP, Segment Tree",
    details: "Tackle harder DP, graph components, topological sort, segment trees, and range queries — preparing for advanced contests."
  }
];

const features = [
  "100+ Live classes covering beginner to advanced topics",
  "70+ Topics carefully structured across 6 modules",
  "1 year of live class access with interactive Q&A",
  "Video recordings of each live session available post-class",
  "Full access to previous batch recordings for revision",
  "Weekly marathon contests on each module",
  "Codeforces-style speed contests every week"
];

export default function CourseOverview() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="512" cy="512" r="512" fill="url(#gradient)" />
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="100%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-4">কোর্স ওভারভিউ</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A structured curriculum designed to take you from beginner to advanced in problem-solving and algorithms using C++.
          </p>
        </div>

        {/* Modules Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-8">📘 কোর্স মডিউল</h3>
          <div className="space-y-4">
            {modules.map((module, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-yellow-400 rounded-xl shadow hover:shadow-yellow-500/30 transition duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium text-yellow-300"
                >
                  <span>{`Module ${idx + 1}: ${module.title}`}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-300">
                    <p>{module.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features and Structure Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features */}
          <div className="bg-gray-900 border border-yellow-400 p-8 rounded-2xl shadow hover:shadow-yellow-400/30 transition">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">💡 প্রধান সুবিধাসমূহ</h3>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-yellow-300 mr-3">✔️</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Structure */}
          <div className="bg-gray-900 border border-yellow-400 p-8 rounded-2xl shadow hover:shadow-yellow-400/30 transition">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">🧩 কোর্স স্ট্রাকচার</h3>
            <p className="text-gray-300 mb-4">
              This program is broken down into 6 core modules. Each builds on the last, with live sessions, problem sets, and contests:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              {modules.map((mod, idx) => (
                <li key={idx}>{mod.title}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
