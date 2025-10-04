// components/Footer.tsx
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#f0f8ff] pt-24 pb-10">
      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-40 overflow-hidden -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#a0d4f7"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,106.7C672,85,768,75,864,106.7C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & App Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="I"
              width={45}
              height={45}
              className="rounded-full"
            />
            <h2 className="text-2xl font-bold text-[#0077cc]">CPS ACADEMY</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Bangladesh's leading Upskilling & Job Placement Platform
          </p>

          <div className="flex space-x-3">
            <a href="#"><img src="/social/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform"/></a>
            <a href="#"><img src="/social/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform"/></a>
            <a href="#"><img src="/social/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform"/></a>
            <a href="#"><img src="/social/youtube.svg" alt="YouTube" className="w-6 h-6 hover:scale-110 transition-transform"/></a>
          </div>

          <div className="mt-2">
            <p className="text-gray-500 text-sm mb-1">Download our App</p>
            <a href="#">
              <img src="/google-play-badge.png" alt="Google Play" className="h-10 hover:opacity-90 transition-opacity"/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Courses</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Hire Talents</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Affiliation</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Career</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-gray-600 text-sm">
            <strong>Head Office:</strong> 1/E/2, Adabor, Mohammadpur, Dhaka-1207
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Learning Center:</strong> Khan ABC Tradeplex, Level #7, House #37, Road #02, Dhanmondi 2, Dhaka-1209
          </p>
          <p className="text-gray-600 text-sm">operations@cps.com</p>
          <p className="text-gray-600 text-sm">01958-622155</p>
        </div>

        {/* Payment & Security */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Secure Payment</h3>
          <div className="flex items-center bg-green-100 border border-green-300 text-green-700 px-3 py-2 rounded-md mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">GUARANTEED SECURE PAYMENT</span>
          </div>
          <p className="text-gray-600 text-sm">No hidden charges.</p>
          <p className="text-gray-600 text-sm">We Accept:</p>
          <div className="flex space-x-2">
            <img src="/payments/bkash.png" alt="bKash" className="h-6"/>
            <img src="/payments/nagad.png" alt="Nagad" className="h-6"/>
            <img src="/payments/rocket.png" alt="Rocket" className="h-6"/>
            <img src="/payments/mastercard.png" alt="Mastercard" className="h-6"/>
            <img src="/payments/visa.png" alt="Visa" className="h-6"/>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        Terms & Conditions | Privacy Policy <br />
        © 2025 CPS ACADEMY. All Rights Reserved.
      </div>
    </footer>
  );
}
