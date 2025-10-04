import React from "react";

export default function CourseTimeline() {
  return (
    <section className="bg-gradient-to-b from-indigo-950 to-slate-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Course Timeline
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            The bootcamp is divided into two structured phases — covering
            programming foundations to advanced competitive programming skills.
          </p>
        </div>

        {/* Phase 1 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">🚀 Phase 1: Foundations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">C Programming</h4>
              <p className="text-slate-400 text-sm">
                Learn syntax, loops, functions, and problem solving basics.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">C++ Programming</h4>
              <p className="text-slate-400 text-sm">
                Master STL, OOP, and efficient coding patterns.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Python Basics</h4>
              <p className="text-slate-400 text-sm">
                Quick start with Python syntax, data types, and I/O.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Data Structures</h4>
              <p className="text-slate-400 text-sm">
                Arrays, stacks, queues, linked lists — coding essentials.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Math for CP</h4>
              <p className="text-slate-400 text-sm">
                Number theory, modular arithmetic, combinatorics.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            🏆 Phase 2: Advanced CP Topics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Greedy Algorithms</h4>
              <p className="text-slate-400 text-sm">
                Strategy-based problem solving with proofs of correctness.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Dynamic Programming</h4>
              <p className="text-slate-400 text-sm">
                State definition, transitions, and optimization techniques.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Graph Theory</h4>
              <p className="text-slate-400 text-sm">
                BFS, DFS, shortest paths, spanning trees, flow problems.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Segment Trees & Fenwick</h4>
              <p className="text-slate-400 text-sm">
                Range queries, lazy propagation, and optimization tricks.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Advanced Math</h4>
              <p className="text-slate-400 text-sm">
                Probability, combinatorics, FFT, and matrix exponentiation.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition">
              <h4 className="font-semibold text-lg mb-2">Contest Strategy</h4>
              <p className="text-slate-400 text-sm">
                Time management, problem selection, and debugging hacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
