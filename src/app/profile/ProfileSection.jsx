'use client';

import { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaGraduationCap, FaLink, FaLightbulb, FaBriefcase, FaFileAlt, FaInfoCircle } from "react-icons/fa";

const profileSteps = [
  { title: "My Profile", icon: <FaUser />, completed: true },
  { title: "Additional Info", icon: <FaInfoCircle />, completed: true },
  { title: "Address", icon: <FaMapMarkerAlt />, completed: false },
  { title: "Education", icon: <FaGraduationCap />, completed: true },
  { title: "Important Links", icon: <FaLink />, completed: false },
  { title: "Skill Set", icon: <FaLightbulb />, completed: false },
  { title: "Job Profile", icon: <FaBriefcase />, completed: true },
  { title: "Job Experience", icon: <FaFileAlt />, completed: false },
];

const deviceActivity = [
  { serial: 1, platform: "Mac/iOS", date: "03-10-2025 10:23 AM" },
  { serial: 2, platform: "Windows 10", date: "28-08-2025 12:47 AM" },
  { serial: 3, platform: "Linux", date: "21-08-2025 11:08 AM" },
];

export default function ProfileSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex min-h-screen bg-[#0b0a1f] text-white w-full  max-w-[90%] mx-auto">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1c1733] p-6 flex flex-col items-center space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-full bg-gray-700 border-2 border-blue-400 flex items-center justify-center text-3xl">
            <span>SS</span>
          </div>
          <h2 className="font-semibold text-center text-purple-400">Shahadat Siddikee shawon</h2>
          <p className="text-gray-400 text-sm text-center">WEB10-2355</p>
          <p className="text-gray-400 text-sm text-center">+8801914193662</p>
          {/* Progress */}
          <div className="w-full mt-2 bg-gray-700 h-2 rounded-full overflow-hidden">
            <div className="h-2 bg-blue-400" style={{ width: "57%" }}></div>
          </div>
          <p className="text-gray-400 text-xs mt-1">Complete your profile 57%</p>
        </div>

        {/* Steps */}
        <nav className="flex flex-col space-y-3 w-full">
          {profileSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center w-full p-2 rounded-lg transition ${
                activeStep === idx ? "bg-purple-800" : "hover:bg-purple-700/50"
              }`}
            >
              <span className="mr-3 text-purple-400">{step.icon}</span>
              <span className="flex-1 text-left">{step.title}</span>
              {step.completed && <span className="text-green-400">✔</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Profile Info */}
        <div className="mb-8 bg-[#1c1733] p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-purple-400 mb-4">My Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm">Full Name</p>
              <p className="text-white font-semibold">Shahadat Siddikee shawon</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-semibold">ssiddikee111@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Student ID</p>
              <p className="text-white font-semibold">WEB10-2355</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Mobile Number</p>
              <p className="text-white font-semibold">+8801914193662</p>
            </div>
          </div>
        </div>

        {/* Device Activity */}
        <div className="bg-[#1c1733] p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold text-purple-400 mb-4">Device Activity</h3>
          <table className="w-full text-left text-gray-300">
            <thead className="border-b border-gray-700">
              <tr>
                <th className="py-2">Serial</th>
                <th className="py-2">Platform</th>
                <th className="py-2">Date</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {deviceActivity.map((device) => (
                <tr key={device.serial} className="border-b border-gray-700 hover:bg-purple-900/20 transition">
                  <td className="py-2">{device.serial}</td>
                  <td className="py-2">{device.platform}</td>
                  <td className="py-2">{device.date}</td>
                  <td className="py-2 text-purple-400 hover:text-purple-300 cursor-pointer">Remove</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
