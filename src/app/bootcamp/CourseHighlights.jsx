import React from "react";

export default function CourseHighlights() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Course Highlights
        </h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
          Everything you need to become contest-ready — designed for beginners
          and advanced learners alike.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Highlight 1 */}
          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-4 text-lg">
              🎥
            </div>
            <h3 className="font-semibold text-lg">20+ Live Classes</h3>
            <p className="text-slate-400 text-sm mt-2">
              Interactive sessions with mentors, step-by-step guidance.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-lg">
              📚
            </div>
            <h3 className="font-semibold text-lg">100+ Problem Solving Videos</h3>
            <p className="text-slate-400 text-sm mt-2">
              Learn from solved problems with detailed explanations.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4 text-lg">
              🏆
            </div>
            <h3 className="font-semibold text-lg">Free Contests</h3>
            <p className="text-slate-400 text-sm mt-2">
              Weekly mock contests to sharpen your skills.
            </p>
          </div>

          {/* Highlight 4 */}
          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center mx-auto mb-4 text-lg">
              🎓
            </div>
            <h3 className="font-semibold text-lg">Scholarships</h3>
            <p className="text-slate-400 text-sm mt-2">
              Top performers get access to scholarships and rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
