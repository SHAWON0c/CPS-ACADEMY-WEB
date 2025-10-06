"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import trainer images
import ankitsImg from "../../../public/images/trainer/shahriar.webp";
import priyaImg from "../../../public/images/trainer/shahriar.webp";
import rahulImg from "../../../public/images/trainer/shahriar.webp";
import riyaImg from "../../../public/images/trainer/shahriar.webp";
import amanImg from "../../../public/images/trainer/shahriar.webp";
import nehaImg from "../../../public/images/trainer/shahriar.webp";

export default function MeetTrainer() {
  const trainers = [
    {
      name: "Ankit Singh",
      title: "Lead Instructor – C++ & DSA",
      bio: "IIT alumnus, 6+ years in CP. Mentor to top tech engineers.",
      image: ankitsImg,
      codeforces: "https://codeforces.com/profile/ankitsingh",
      achievements: ["ICPC Finalist", "Top 5% Codeforces", "BUPC Champion"],
    },
    {
      name: "Priya Sharma",
      title: "Algorithm Mentor",
      bio: "Known for algorithm clarity. Loves graph problems.",
      image: priyaImg,
      codeforces: "https://codeforces.com/profile/priyasharma",
      achievements: ["ICPC Regionalist", "2100+ Codeforces", "BUPC Team Mentor"],
    },
    {
      name: "Rahul Mehta",
      title: "Coding Coach",
      bio: "STL & time optimization expert. Weekly live contests.",
      image: rahulImg,
      codeforces: "https://codeforces.com/profile/rahulmehta",
      achievements: ["Max Rating 1900", "BUPC Runner-Up", "Coach – CodeCamp"],
    },
    {
      name: "Riya Patel",
      title: "Dynamic Programming Expert",
      bio: "DP queen. Simplifies complex problems with ease.",
      image: riyaImg,
      codeforces: "https://codeforces.com/profile/riyapatel",
      achievements: ["ICPC Regionalist", "Hackathons Winner", "Rated 2000+"],
    },
    {
      name: "Aman Roy",
      title: "Graph Theory Specialist",
      bio: "Aman breaks down graphs like no one else.",
      image: amanImg,
      codeforces: "https://codeforces.com/profile/amanroy",
      achievements: ["ICPC Rank 1 (Regional)", "BUPC Finalist", "Top 3% on CF"],
    },
    {
      name: "Neha Gupta",
      title: "Lead Contest Strategist",
      bio: "Neha coaches weekly CF-style contests, loves problem analysis.",
      image: nehaImg,
      codeforces: "https://codeforces.com/profile/nehagupta",
      achievements: ["2000+ Codeforces", "BUPC 2x Winner", "Tech Speaker"],
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="512" cy="512" r="512" fill="url(#glowGradient)" />
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="100%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Section header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-3">
          আমাদের প্রশিক্ষকরা
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          শীর্ষস্থানীয় মেন্টরদের কাছ থেকে শিখুন, ICPC ফাইনালিস্ট এবং Codeforces রেটেড চ্যাম্পিয়নদের কাছ থেকে।
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {trainers.map((trainer, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-900/90 border border-yellow-400 rounded-2xl p-6 shadow-md hover:shadow-yellow-400/40 transition-all duration-300 flex flex-col items-center text-center">
                {/* Image */}
                <div className="w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-yellow-400 shadow-lg">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    className="object-cover w-full h-full"
                    width={96}
                    height={96}
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-yellow-300">
                  {trainer.name}
                </h3>
                <p className="text-sm text-cyan-400 mb-1">{trainer.title}</p>
                <p className="text-xs text-gray-300 mb-3">{trainer.bio}</p>

                {/* Achievements */}
                <ul className="text-xs text-gray-200 mb-3 list-disc list-inside text-left w-full max-w-xs mx-auto">
                  {trainer.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>

                {/* Codeforces link */}
                <a
                  href={trainer.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-yellow-400 hover:text-yellow-300 text-xs transition"
                >
                  <FaCode className="mr-1" />
                  <span className="underline">Codeforces প্রোফাইল</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
