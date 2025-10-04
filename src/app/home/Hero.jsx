"use client";

import Image from "next/image";
import CourseImg1 from "../../../public/images/courses/course1.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Background Shapes */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      {/* Header Text */}
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
          <span className="text-yellow-400">শুন্য থেকে শুরু</span> করে হয়ে ওঠো প্রফেশনাল ওয়েব ডেভেলপার
        </h1>
        <p className="mt-4 text-gray-200 text-sm md:text-base">
          ৬ মাসের সুপার গাইডেড Bootcamp, যেকোনো সমস্যায় ফ্রেজি লেভেলের ২৪/৭ Support, ৮০+ প্রজেক্ট, ও প্রিমিয়াম জব
          প্লেসমেন্ট সাপোর্ট— যার মাধ্যমে গত ৫ বছর ৫০০০+ শিক্ষার্থী সফলভাবে ক্যারিয়ার শুরু করেছে।
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          এখনই এনরোল করুন
        </button>
      </div>

      {/* Hero Card */}
      <div className="mt-12 relative z-10 max-w-4xl w-full">
        <div className="relative rounded-xl shadow-2xl overflow-hidden bg-white">
          {/* Video Play Button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-indigo-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            ▶
          </button>

          {/* Background Icons */}
          <div className="absolute top-4 left-4 text-[32px] opacity-30 space-x-4 text-gray-700">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JS</span>
            <span>React</span>
            <span>Node</span>
          </div>

          {/* Hero Image */}
          <Image
            src={CourseImg1}
            alt="Instructor"
            className="mx-auto"
          />

          {/* Course Info Box */}
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-indigo-700 to-purple-600 text-white rounded-lg px-4 py-2 flex items-center space-x-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <span>এনরোলমেন্ট শুরু:</span>
              <strong>10th Dec, 2025</strong>
            </div>
            <div className="flex items-center space-x-2">
              <span>এনরোলমেন্ট শেষ:</span>
              <strong>24th Dec, 2025</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
