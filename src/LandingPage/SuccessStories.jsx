'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      batch: "Batch 10",
      text: "Programming Hero transformed my problem-solving skills. The structured approach to algorithms and data structures helped me achieve Expert rating on Codeforces in just 6 months. The mentors are incredibly supportive.",
      name: "Arjun Sharma",
      role: "Software Engineer",
      company: "Google India",
      avatar: "/indian-male-developer.jpg",
    },
    {
      batch: "Batch 09",
      text: "কম্পিটিটিভ প্রোগ্রামিং হিরো এর কোর্স আমার ক্যারিয়ার পরিবর্তন করে দিয়েছে। এখন আমি Candidate Master এবং শীর্ষস্থানীয় প্রতিযোগিতায় অংশগ্রহণ করি। তাদের শেখানোর পদ্ধতি অসাধারণ।",
      name: "Fatima Rahman",
      role: "Competitive Programmer",
      company: "ICPC Regionalist",
      avatar: "/bangladeshi-female-programmer.jpg",
    },
    {
      batch: "Batch 08",
      text: "The journey from Newbie to Specialist was challenging but Programming Hero made it achievable. Their practice problems and contest strategies are top-notch. I secured a position at Microsoft thanks to my CP skills.",
      name: "Vikram Patel",
      role: "SDE-2",
      company: "Microsoft",
      avatar: "/indian-male-software-engineer.png",
    },
    {
      batch: "Batch 07",
      text: "Programming Hero is not just a course, it's a complete guideline for competitive programming. The community support and regular contests helped me reach Grandmaster level. Highly recommended for serious learners.",
      name: "Sarah Chen",
      role: "Algorithm Specialist",
      company: "Meta",
      avatar: "/asian-female-developer.png",
    },
    {
      batch: "Batch 06",
      text: "আমি প্রোগ্রামিং হিরোতে যোগদানের আগে শুধু বেসিক কোডিং জানতাম। এখন আমি International Olympiad in Informatics এ অংশগ্রহণ করি। তাদের শিক্ষা পদ্ধতি এবং সাপোর্ট অতুলনীয়।",
      name: "Rashed Ahmed",
      role: "IOI Participant",
      company: "Bangladesh Team",
      avatar: "/bangladeshi-male-student.jpg",
    },
  ]

  const visibleCount = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      cards.push({ ...testimonials[index], index })
    }
    return cards
  }

  return (
    <section className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">Success_Story</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto rounded-full" />
      </div>

      {/* Cards Carousel */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className="flex gap-6 justify-center">
          <AnimatePresence initial={false} mode="popLayout">
            {getVisibleCards().map((testimonial, idx) => (
              <motion.div
                key={testimonial.index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[380px] rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #000000, #1a1a1a)',
                  border: '1px solid #FFD700',
                }}
              >
                {/* Batch Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400/40">
                    {testimonial.batch}
                  </span>
                </div>

                {/* Text */}
                <p className="text-yellow-400 text-base leading-relaxed min-h-[120px]">{testimonial.text}</p>

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
            ))}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
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
