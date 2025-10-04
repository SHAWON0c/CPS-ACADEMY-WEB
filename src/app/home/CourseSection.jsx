"use client";

export default function CourseSection() {
  const courses = [
    {
      title: "Beginner Track",
      subtitle: "Start Your CP Journey",
      description:
        "Master the fundamentals of competitive programming. Learn basic algorithms, data structures, and problem-solving techniques to reach Specialist level.",
      topics: ["Arrays & Strings", "Sorting & Searching", "Basic Math", "Greedy Algorithms"],
      difficulty: "Newbie → Specialist",
      color: "from-yellow-500 to-amber-400",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Intermediate Track",
      subtitle: "Level Up Your Skills",
      description:
        "Dive deep into advanced data structures and algorithms. Master dynamic programming, graph theory, and segment trees to reach Expert level.",
      topics: ["Dynamic Programming", "Graph Algorithms", "Trees & Graphs", "Number Theory"],
      difficulty: "Specialist → Expert",
      color: "from-blue-600 to-indigo-500",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Advanced Track",
      subtitle: "Become a Red Coder",
      description:
        "Master complex algorithms and advanced techniques. Learn advanced DP, computational geometry, and string algorithms to reach Grandmaster level.",
      topics: ["Advanced DP", "String Algorithms", "Computational Geometry", "Game Theory"],
      difficulty: "Expert → Red Coder",
      color: "from-red-500 to-orange-500",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-indigo-900 via-indigo-950 to-black overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />

        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent"
              style={{ left: `${(i + 1) * 8.33}%` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Learning Tracks
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose your path and master competitive programming step by step
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl border border-yellow-400/20 overflow-hidden hover:scale-105 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-500"
            >
              <div className="relative p-8 space-y-6">
                {/* Icon and Difficulty */}
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${course.color} text-white shadow-lg`}>
                    {course.icon}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/30">
                    <span className="text-xs font-semibold text-yellow-400">{course.difficulty}</span>
                  </div>
                </div>

                {/* Titles */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-yellow-300 text-sm font-medium">{course.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">{course.description}</p>

                {/* Topics */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Key Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-400/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-xl shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transition-all duration-300 border border-yellow-400/30 mt-4 flex items-center justify-center gap-2">
                  Start Track
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Not sure where to start? Take our skill assessment test</p>
          <button className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent">
            Take Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
