'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      batch: "Batch 10",
      text: "CPS Academy এর Competitive Programming ক্লাসগুলো আমাকে Codeforces Expert র‍্যাংক অর্জন করতে সাহায্য করেছে। তাদের পদ্ধতি এবং প্র্যাকটিস সমস্যা অসাধারণ।",
      name: "Arif Hossain",
      role: "Competitive Programmer",
      company: "Codeforces",
      avatar: "/bangladeshi-male-student.jpg",
    },
    {
      batch: "Batch 09",
      text: "CPS Academy এর কোর্স আমার সমস্যা সমাধানের দক্ষতা অনেক উন্নত করেছে। এখন আমি বিভিন্ন আন্তর্জাতিক প্রতিযোগিতায় অংশগ্রহণ করি এবং ভালো র‍্যাংক পাই।",
      name: "Fatima Rahman",
      role: "Competitive Programmer",
      company: "Codeforces",
      avatar: "/bangladeshi-female-programmer.jpg",
    },
    {
      batch: "Batch 08",
      text: "CPS Academy এর structured approach আমাকে নতুন থেকে Expert পর্যন্ত উন্নতি করতে সাহায্য করেছে। প্রতিটি অ্যালগরিদম ও গ্রাফ থিওরি বিষয়গুলো সহজভাবে শেখানো হয়।",
      name: "Vikram Patel",
      role: "Competitive Programmer",
      company: "Codeforces",
      avatar: "/indian-male-software-engineer.png",
    },
    {
      batch: "Batch 07",
      text: "CPS Academy শুধুমাত্র কোর্স নয়, এটি একটি পূর্ণাঙ্গ Competitive Programming গাইডলাইন। কমিউনিটি সাপোর্ট এবং রেগুলার কন্টেস্টগুলো সত্যিই সহায়ক।",
      name: "Sarah Chen",
      role: "Competitive Programmer",
      company: "Codeforces",
      avatar: "/asian-female-developer.png",
    },
    {
      batch: "Batch 06",
      text: "আমি CPS Academy তে যোগদানের আগে কেবল বেসিক কোডিং জানতাম। এখন আমি Codeforces এ ভালো র‍্যাংক অর্জন করেছি। তাদের শিক্ষা পদ্ধতি এবং সাপোর্ট অতুলনীয়।",
      name: "Rashed Ahmed",
      role: "Competitive Programmer",
      company: "Codeforces",
      avatar: "/bangladeshi-male-student.jpg",
    },
  ]

  const visibleCount = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      cards.push({ ...testimonials[index], index })
    }
    return cards
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#0f1a3a] to-gray-800">
      {/* Floating CP icons */}
      <div className="absolute top-10 left-10 w-12 h-12 blur-xl animate-float-medium">
        <svg className="w-full h-full text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-16 w-16 h-16 blur-2xl animate-pulse">
        <svg className="w-full h-full text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-20 w-10 h-10 blur-lg animate-float-slow">
        <svg className="w-full h-full text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">CPS Academy Success Stories</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto rounded-full" />
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto overflow-hidden z-10">
        <div className="flex justify-center items-center gap-6 relative mt-12">
          <AnimatePresence initial={false} mode="popLayout">
            {getVisibleCards().map((testimonial, idx) => {
              const isCenter = idx === 1 // middle card
              const zIndex = isCenter ? 20 : 10
              const scale = isCenter ? 1 : 0.85
              const xOffset = isCenter ? 0 : idx === 0 ? -60 : 60
              const rotateY = isCenter ? 0 : idx === 0 ? 10 : -10
              const opacity = isCenter ? 1 : 0.7

              return (
                <motion.div
                  key={testimonial.index}
                  initial={{ opacity: 0, scale: 0.8, x: 0 }}
                  animate={{ opacity, scale, x: xOffset, rotateY }}
                  exit={{ opacity: 0, scale: 0.8, x: 0 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[380px] rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #000000, #1a1a1a)',
                    border: '1px solid #FFD700',
                    zIndex,
                  }}
                >
                  {/* Batch Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400/40">
                      {testimonial.batch}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="pt-5 text-yellow-400 text-base leading-relaxed min-h-[120px]">{testimonial.text}</p>

                  {/* Profile */}
                  <div className="flex items-center gap-3 pt-4 border-t border-yellow-600/20">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border border-yellow-600 object-cover"
                    />
                    <div>
                      <h4 className="text-yellow-400 font-bold text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-yellow-300 text-xs md:text-sm">{testimonial.role}</p>
                      <p className="text-yellow-300 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10 z-10 relative">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-12 bg-gradient-to-r from-yellow-500 to-yellow-400"
                  : "w-2 bg-yellow-800/50 hover:bg-yellow-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
