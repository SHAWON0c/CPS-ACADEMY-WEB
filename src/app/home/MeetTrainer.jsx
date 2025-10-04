'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import trainer images
import ankitsImg from '../../../public/images/trainer/shahriar.webp';
import priyaImg from '../../../public/images/trainer/shahriar.webp';
import rahulImg from '../../../public/images/trainer/shahriar.webp';
import riyaImg from '../../../public/images/trainer/shahriar.webp';
import amanImg from '../../../public/images/trainer/shahriar.webp';
import nehaImg from '../../../public/images/trainer/shahriar.webp';

export default function MeetTrainer() {
  const trainers = [
    {
      name: "Ankit Singh",
      title: "Lead Instructor – C++ & DSA",
      bio: "IIT alumnus, 6+ years in CP. Mentor to top tech engineers.",
      image: ankitsImg,
      codeforces: "https://codeforces.com/profile/ankitsingh",
      achievements: ["ICPC Finalist", "Top 5% Codeforces", "BUPC Champion"]
    },
    {
      name: "Priya Sharma",
      title: "Algorithm Mentor",
      bio: "Known for algorithm clarity. Loves graph problems.",
      image: priyaImg,
      codeforces: "https://codeforces.com/profile/priyasharma",
      achievements: ["ICPC Regionalist", "2100+ Codeforces", "BUPC Team Mentor"]
    },
    {
      name: "Rahul Mehta",
      title: "Coding Coach",
      bio: "STL & time optimization expert. Weekly live contests.",
      image: rahulImg,
      codeforces: "https://codeforces.com/profile/rahulmehta",
      achievements: ["Max Rating 1900", "BUPC Runner-Up", "Coach – CodeCamp"]
    },
    {
      name: "Riya Patel",
      title: "Dynamic Programming Expert",
      bio: "DP queen. Simplifies complex problems with ease.",
      image: riyaImg,
      codeforces: "https://codeforces.com/profile/riyapatel",
      achievements: ["ICPC Regionalist", "Hackathons Winner", "Rated 2000+"]
    },
    {
      name: "Aman Roy",
      title: "Graph Theory Specialist",
      bio: "Aman breaks down graphs like no one else.",
      image: amanImg,
      codeforces: "https://codeforces.com/profile/amanroy",
      achievements: ["ICPC Rank 1 (Regional)", "BUPC Finalist", "Top 3% on CF"]
    },
    {
      name: "Neha Gupta",
      title: "Lead Contest Strategist",
      bio: "Neha coaches weekly CF-style contests, loves problem analysis.",
      image: nehaImg,
      codeforces: "https://codeforces.com/profile/nehagupta",
      achievements: ["2000+ Codeforces", "BUPC 2x Winner", "Tech Speaker"]
    }
  ];

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-16 overflow-hidden max-w-[70%] mx-auto">
      {/* Section header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">Meet Our Trainers</h2>
        <p className="text-sm sm:text-md text-gray-300 max-w-2xl mx-auto">
          Learn from top mentors, ICPC finalists, and Codeforces-rated champions.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
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
            <div className="bg-gradient-to-t from-blue-900 to-black border border-yellow-500 rounded-xl p-4 shadow-lg hover:shadow-yellow-400/50 transition duration-300 flex flex-col items-center text-center">
              {/* Image */}
              <div className="w-24 h-24 mb-3 overflow-hidden rounded-full border-2 border-yellow-400 shadow">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  className="object-cover w-full h-full"
                  width={96}
                  height={96}
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-yellow-300">{trainer.name}</h3>
              <p className="text-xs text-blue-400 mb-1">{trainer.title}</p>
              <p className="text-xs text-gray-300 mb-2">{trainer.bio}</p>

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
                className="flex items-center text-yellow-400 hover:text-yellow-300 text-xs transition"
              >
                <FaCode className="mr-1" />
                <span className="underline">Codeforces Profile</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
