'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import img1 from '../../../public/images/author/author1.jpeg';

const students = [
  {
    id: 1,
    name: "Mariya Sharmin",
    course: "Student, Data Analytics and Power BI Career Path Batch - 2",
    img: img1,
  },
  {
    id: 2,
    name: "KM Nurunnabi",
    course: "Student, Laravel Career Path Batch - 1",
    img: img1,
  },
  {
    id: 3,
    name: "Mahmudul Haque Shawon",
    course:
      "Student, Full Stack Web Development with Python, Django & React Batch - 10",
    img: img1,
  },
  {
    id: 4,
    name: "John Doe",
    course: "Student, Full Stack Web Development Batch - 5",
    img: img1,
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full py-16 bg-gradient-to-r bg-[#4c5f84] ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
          Our Students’ Success Stories
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {students.map((student) => (
            <SwiperSlide key={student.id}>
              <div className="rounded-2xl overflow-hidden bg-[#142850] border border-cyan-400 shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300">
                {/* Thumbnail with Play Icon */}
                <div className="relative group">
                  <Image
                    src={student.img}
                    alt={student.name}
                    className="w-full h-52 object-cover"
                    width={400}
                    height={208}
                  />
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-cyan-400 text-[#0b1a38] p-4 rounded-full shadow-lg hover:bg-cyan-500 transition">
                      <FaPlay />
                    </span>
                  </button>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-cyan-400 mb-1 group-hover:text-cyan-200 transition-colors duration-300">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-300">{student.course}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
