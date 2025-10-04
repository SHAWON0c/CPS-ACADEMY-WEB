'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import useUserRole from '@/hooks/useUserRole'; 

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const { role } = useUserRole();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasBackground = scrolled || pathname !== "/";

  if (loading) return null; // avoid flicker

  const navLinks = ["Home", "Courses", "BootCamp", "Contests", "About"];
  const allowedRolesForDashboard = ['student', 'media manager', 'super admin'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBackground
          ? "bg-[#0a1628]/80 backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-amber-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-white">
            <span className="text-yellow-400">CPS</span> ACADEMY
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Dashboard only for allowed roles */}
          {user && allowedRolesForDashboard.includes(role?.toLowerCase()) && (
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium relative group"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
            </Link>
          )}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <Link
              href="/signin"
              className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10 px-4 py-2 rounded transition-all duration-300"
            >
              Sign In
            </Link>
          ) : (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[#0a1628] font-bold text-lg">
                {user.username?.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-amber-400 hover:bg-amber-500/10 px-3 py-1 rounded transition-all duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-amber-400 transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-[#0a1628]/50 rounded transition-all duration-300"
              >
                {link}
              </Link>
            ))}

            {/* Dashboard for allowed roles */}
            {user && allowedRolesForDashboard.includes(role?.toLowerCase()) && (
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-[#0a1628]/50 rounded transition-all duration-300"
              >
                Dashboard
              </Link>
            )}

            {!user ? (
              <Link
                href="/signin"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-[#0a1628]/50 rounded transition-all duration-300"
              >
                Sign In
              </Link>
            ) : (
              <div className="flex items-center space-x-3 px-4 py-2 bg-[#0a1628]/30 rounded">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-[#0a1628] font-bold">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="text-gray-300 hover:text-amber-400 px-3 py-1 rounded transition-all duration-300"
                >
                  Logoutt
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
