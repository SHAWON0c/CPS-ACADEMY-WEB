"use client";

// Prevent static prerendering
export const dynamic = "force-dynamic";

import React from "react";
import { useRouter } from "next/navigation"; // useNavigation is preferred in App Router
import Image from "next/image";

export default function DashboardVideos() {
  const router = useRouter();

  return (
    <div className="bg-[#0f0f1a] min-h-screen text-white flex justify-center py-10 mt-20">
      <div className="w-full max-w-[80%] px-4">

        {/* Challenge Banner */}
        <div className="bg-gradient-to-r from-yellow-700 to-yellow-600 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Welcome to <span className="text-yellow-300">CPS Academy</span><br />
              Let’s code together
            </h2>
            <p className="text-sm text-gray-200 mt-1">
              Take the challenge to improve your overall performance.
            </p>
            <button
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-black font-medium transition"
              onClick={() => router.push("/dashboard/challenges")}
            >
              Take Challenge →
            </button>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/running.png"
              alt="challenge"
              width={160}
              height={160}
              className="mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Welcome Message */}
        <h2 className="mt-8 text-lg font-semibold">
          Welcome Back <span className="text-yellow-400">Student</span>, Ready For Your Next Lesson?
        </h2>

        {/* Course Cards */}
        <div className="mt-6 flex flex-col gap-6">

          {/* Course 1 */}
          <div className="bg-[#1b1b2f] rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg">
            <Image
              src="/images/course1.png"
              alt="course"
              width={240}
              height={160}
              className="w-full md:w-60 object-cover flex-shrink-0"
            />
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Complete Web Development Course With Programming Hero
                </h3>
                <p className="text-sm text-gray-400 mb-4">ঝকঝক মাহবুব</p>

                {/* Progress Bar */}
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">90%</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition"
                  onClick={() => router.push("/dashboard/courses/videos/course-1")}
                >
                  Continue Course
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-400 rounded-lg font-medium hover:bg-gray-600 transition">
                  Course Outline
                </button>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="bg-[#1b1b2f] rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg">
            <Image
              src="/images/course2.png"
              alt="course"
              width={240}
              height={160}
              className="w-full md:w-60 object-cover flex-shrink-0"
            />
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Recommended for Complete Web Development Course
                </h3>
                <p className="text-sm text-gray-400 mb-4">Programming Hero</p>

                {/* Progress Bar */}
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">0%</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition"
                  onClick={() => router.push("/dashboard/courses/videos/course-2")}
                >
                  Start Course
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
