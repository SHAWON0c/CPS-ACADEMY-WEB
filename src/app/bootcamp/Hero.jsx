"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  const handleViewSchedule = () => {
    router.push("/bootcamp/viewschedule");
  };

  return (
    <section className="  relative bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-800 text-white py-20 overflow-hidden">
      {/* Floating gradient orbs (decorative background) */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-wide">
                Free • Live Classes
              </span>
              <span className="mx-2 w-px h-4 bg-white/20" />
              <span className="text-xs">Competitive Programming Bootcamp</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Free Competitive Programming Bootcamp
            </h1>

            <p className="text-slate-200 max-w-xl mb-6">
              Intensive, hands-on classes to level up algorithmic thinking,
              problem solving, and contest strategies — from beginner-friendly
              foundations to advanced contest-ready skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg hover:scale-[1.02] transition-transform"
              >
                Join for Free
              </a>

              <button
                onClick={handleViewSchedule}
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-5 py-3 text-sm font-medium hover:bg-white/5 transition-all duration-300"
              >
                View Schedule
              </button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {[
                {
                  icon: "🏆",
                  title: "Contest Techniques",
                  desc: "Greedy, DP, Graphs, DS & more",
                },
                {
                  icon: "👩‍🏫",
                  title: "Live Mentorship",
                  desc: "Weekly mock contests & code reviews",
                },
                {
                  icon: "🧭",
                  title: "Career Path",
                  desc: "Interview prep & problem sets",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-slate-300 text-xs">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Illustrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-2xl border border-white/10">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-300">
                    Next class
                  </div>
                  <div className="text-sm font-semibold">
                    Data Structures: Trees & Graphs
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-300">Starts</div>
                  <div className="font-semibold">Oct 12 • 7:00 PM</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="text-xs text-slate-300">Duration</div>
                  <div className="font-semibold">8 Weeks</div>
                </div>

                <div className="rounded-lg bg-white/5 p-4">
                  <div className="text-xs text-slate-300">Level</div>
                  <div className="font-semibold">Beginner → Advanced</div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href="#signup"
                  className="flex-1 text-center rounded-full bg-indigo-500 py-2 font-semibold hover:scale-105 transition-transform"
                >
                  Reserve Seat
                </a>
                <a
                  href="#syllabus"
                  className="flex-1 text-center rounded-full border border-white/20 py-2 hover:bg-white/10 transition-colors"
                >
                  Syllabus
                </a>
              </div>
            </div>

            {/* Decorative Code Snippet */}
            <div className="absolute -bottom-36 right-0 w-48 sm:w-56 bg-orange-300/90 border border-white/10 rounded-xl p-3 text-xs shadow-lg">
              <pre className="whitespace-pre-wrap text-black font-mono">
{`// sample problem
function solve(){
  // read input
  // build graph
  // run dijkstra or bfs
}`}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-slate-300">
          <span className="mr-2">✅</span>
          Limited seats every cohort — quality mentorship guaranteed.
        </div>
      </div>
    </section>
  );
}
