'use client'

import Image from "next/image"
import img1 from '../../../public/images/author/author1.jpeg'

export default function ConsultationSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-yellow-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-400 to-yellow-200 rounded-3xl shadow-2xl p-8 md:flex md:items-center">
          
          {/* Left Content */}
          <div className="flex-1 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Get Your Free <br />
              <span className="text-teal-600">Consultation Today!</span>
            </h2>
            <p className="mt-4 text-gray-800 text-lg">
              Take the first step towards success. Schedule your free consultation today and join thousands of students who’ve advanced their careers.
            </p>

            {/* Students avatars */}
            <div className="flex items-center mt-6">
              <div className="flex -space-x-3">
                <Image
                  src={img1}
                  alt="student"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                />
                <Image
                  src={img1}
                  alt="student"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                />
                <Image
                  src={img1}
                  alt="student"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  width={40}
                  height={40}
                />
              </div>
              <p className="ml-4 text-gray-900 font-medium">
                1500+ students got consultation
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book the Call</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-400 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300"
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
