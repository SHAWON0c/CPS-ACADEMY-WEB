// components/Footer.tsx
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#0b1a38] to-[#1a2a4a] pt-24 pb-10 text-gray-300 overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute top-0 left-0 w-full h-40 overflow-hidden -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#142850"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,106.7C672,85,768,75,864,106.7C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h2 className="text-2xl font-bold text-cyan-400">CPS ACADEMY</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bangladesh's leading Competitive Programming & Codeforces Training Academy
          </p>

          <div className="flex space-x-4 mt-2">
            {["linkedin", "instagram", "facebook", "youtube"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Image
                  src={`/social/${platform}.svg`}
                  alt={platform}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-gray-400 text-sm mb-1">Download Our App</p>
            <a href="#">
              <Image
                src="/google-play-badge.png"
                alt="Google Play"
                width={130}
                height={40}
                className="hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-cyan-400 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Hire Talents
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Affiliation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="font-semibold text-cyan-400 mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            <strong>Head Office:</strong> 1/E/2, Adabor, Mohammadpur, Dhaka-1207
          </p>
          <p className="text-gray-400 text-sm">
            <strong>Learning Center:</strong> Khan ABC Tradeplex, Level 7, House 37, Road 2, Dhanmondi 2, Dhaka-1209
          </p>
          <p className="text-gray-400 text-sm">operations@cps.com</p>
          <p className="text-gray-400 text-sm">01958-622155</p>
        </div>

        {/* Payment & Security */}
        <div className="space-y-3">
          <h3 className="font-semibold text-cyan-400 mb-2">Secure Payment</h3>
          <div className="flex items-center bg-cyan-900/20 border border-cyan-400 text-cyan-400 px-3 py-2 rounded-md mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">GUARANTEED SECURE PAYMENT</span>
          </div>
          <p className="text-gray-400 text-sm">No hidden charges.</p>
          <p className="text-gray-400 text-sm">We Accept:</p>
          <div className="flex space-x-2 mt-1">
            {["bkash", "nagad", "rocket", "mastercard", "visa"].map((pay) => (
              <img key={pay} src={`/payments/${pay}.png`} alt={pay} className="h-6" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-cyan-700/40 pt-6 text-center text-gray-400 text-sm">
        Terms & Conditions | Privacy Policy <br />
        © 2025 CPS ACADEMY. All Rights Reserved.
      </div>
    </footer>
  );
}
