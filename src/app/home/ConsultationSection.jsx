'use client'

import Image from "next/image"
import img1 from '../../../public/images/author/author1.jpeg'

export default function ConsultationSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#667aa3] via-[#1a2a4a] to-[#0b1a38]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#142850] to-[#1f3a60] rounded-3xl shadow-2xl p-8 md:flex md:items-center">
          
          {/* Left Content */}
          <div className="flex-1 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100 leading-tight">
              Get Your Free <br />
              <span className="text-cyan-400">Consultation Today!</span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Take the first step towards success in Competitive Programming. Schedule your free consultation today and join thousands of students who’ve advanced their Codeforces rankings.
            </p>

            {/* Students avatars */}
            <div className="flex items-center mt-6">
              <div className="flex -space-x-3">
                <Image
                  src={img1}
                  alt="student"
                  className="w-10 h-10 rounded-full border-2 border-gray-100"
                  width={40}
                  height={40}
                />
                <Image
                  src={img1}
                  alt="student"
                  className="w-10 h-10 rounded-full border-2 border-gray-100"
                  width={40}
                  height={40}
                />
                <Image
                  src={img1}
                  alt="student"
                  className="w-10 h-10 rounded-full border-2 border-gray-100"
                  width={40}
                  height={40}
                />
              </div>
              <p className="ml-4 text-gray-100 font-medium">
                1500+ students got consultation
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 bg-[#0f1a2b] p-8 rounded-2xl shadow-lg border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Book the Call</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none bg-[#142850] text-gray-100 placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none bg-[#142850] text-gray-100 placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none bg-[#142850] text-gray-100 placeholder-gray-400 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl  transition-all duration-300"
              >
                Schedule Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
