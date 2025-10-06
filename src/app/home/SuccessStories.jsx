'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
          Our Students’ Success Stories
        </h2>

        {/* Swiper Carousel */}
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
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#332b00] border border-yellow-600/40 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] transform hover:-translate-y-2 transition-all duration-500">
                {/* Thumbnail with Play Icon */}
                <div className="relative group">
                  <Image
                    src={student.img}
                    alt={student.name}
                    className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
                    width={400}
                    height={208}
                  />
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-300 transition">
                      <FaPlay />
                    </span>
                  </button>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-yellow-400 mb-2">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {student.course}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
