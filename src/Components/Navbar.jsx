'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import useUserRole from "@/hooks/useUserRole";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const { role } = useUserRole();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasBackground = scrolled || pathname !== "/";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return null;

  const navLinks = ["Home", "Courses", "BootCamp", "Contests", "About"];
  const allowedRolesForDashboard = ["student", "media manager", "super admin"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBackground
          ? "bg-[#0a1628]/90 backdrop-blur-xl border-b border-amber-500/20 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-extrabold text-white tracking-wide">
            <span className="text-yellow-400">CPS</span> ACADEMY
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-gray-300 hover:text-amber-400 font-medium relative group transition-all duration-300"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop User Dropdown */}
        <div className="hidden md:flex items-center relative" ref={dropdownRef}>
          {!user ? (
            <Link
              href="/signin"
              className="text-gray-300 hover:text-amber-400 border border-amber-400/30 hover:bg-amber-400/10 px-4 py-2 rounded-lg transition-all duration-300"
            >
              Sign In
            </Link>
          ) : (
            <>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-[#0a1628] font-bold text-lg shadow-md hover:scale-105 transition-transform"
              >
                {user.username?.charAt(0).toUpperCase()}
              </button>

              {dropdownOpen && (
                <div className="absolute top-14 right-0 w-48 bg-[#0f1e35]/95 border border-amber-400/20 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
                  <Link
                    href="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-200 hover:bg-[#1b2c4b] hover:text-amber-400 transition-all"
                  >
                    Profile
                  </Link>

                  {allowedRolesForDashboard.includes(role?.toLowerCase()) && (
                    <Link
                      href="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-200 hover:bg-[#1b2c4b] hover:text-amber-400 transition-all"
                    >
                      Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-[#1b2c4b] hover:text-amber-400 transition-all"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-amber-400 transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transform transition-all duration-500 ease-in-out origin-top ${
          mobileOpen
            ? "max-h-[600px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        } overflow-hidden bg-[#0a1628]/95 border-t border-amber-500/10 shadow-lg`}
      >
        <div className="px-5 py-4 space-y-2">
          {/* Links */}
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-amber-400 bg-[#14253e] hover:bg-[#1d2f4c] px-4 py-2 rounded-lg font-medium transition-all"
            >
              {link}
            </Link>
          ))}

          {/* Profile Section */}
          {user ? (
            <div className="mt-4 border-t border-amber-500/20 pt-3">
              <div className="flex items-center gap-3 mb-3 bg-gradient-to-r from-amber-500/10 to-transparent px-4 py-2 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-[#0a1628] font-bold shadow-sm">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-200 font-semibold text-base capitalize">
                  {user.username}
                </span>
              </div>

              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="block text-gray-300 hover:text-amber-400 bg-[#14253e] hover:bg-[#1d2f4c] px-4 py-2 rounded-lg font-medium transition-all"
              >
                Profile
              </Link>

              {allowedRolesForDashboard.includes(role?.toLowerCase()) && (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 hover:text-amber-400 bg-[#14253e] hover:bg-[#1d2f4c] px-4 py-2 rounded-lg font-medium transition-all"
                >
                  Dashboard
                </Link>
              )}

              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="w-full text-left text-gray-300 hover:text-amber-400 bg-[#14253e] hover:bg-[#1d2f4c] px-4 py-2 rounded-lg font-medium transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-amber-400 bg-[#14253e] hover:bg-[#1d2f4c] px-4 py-2 rounded-lg font-medium transition-all mt-2"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
