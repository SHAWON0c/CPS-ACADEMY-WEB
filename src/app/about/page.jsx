"use client";

import Image from "next/image";
import TeamImg from "../../../public/images/author/author1.jpeg"; // replace with your actual image

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-indigo-900 to-blue-900 text-white py-24">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About <span className="text-indigo-400">CPS Academy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            Empowering future problem solvers with structured guidance, live mentorship, and
            hands-on programming challenges to build the next generation of competitive coders.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-300">
              Our Mission 🚀
            </h3>
            <p className="text-slate-200 leading-relaxed">
              At <span className="font-semibold">CPS Academy</span>, we believe competitive programming
              is more than just coding — it’s a mindset of problem-solving, persistence, and creativity.
              Our goal is to guide students through algorithmic thinking and practical implementation,
              helping them succeed in contests and tech interviews alike.
            </p>

            <h3 className="text-2xl font-bold text-indigo-300">
              Why Choose Us 💡
            </h3>
            <ul className="space-y-3 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 text-xl">✔</span>
                <span>Live interactive sessions with experienced mentors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 text-xl">✔</span>
                <span>Structured curriculum covering DSA, DP, Graphs & more</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 text-xl">✔</span>
                <span>Weekly contests, mock tests, and problem discussions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 text-xl">✔</span>
                <span>Personalized progress tracking and mentorship</span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={TeamImg}
                alt="CPS Academy Team"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold mb-3 text-indigo-300">
            Join the CPS Academy Community
          </h4>
          <p className="text-slate-300 mb-6">
            Start your journey towards becoming a skilled problem solver and
            competitive programmer.
          </p>
          <a
            href="/viewschedule"
            className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all"
          >
            View Upcoming Sessions
          </a>
        </div>
      </div>
    </section>
  );
}
