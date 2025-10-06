'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaHeart, FaGift } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';

// Helper to convert YouTube URL to embed URL
const getEmbedUrl = (url) => {
  if (!url) return '';
  try {
    if (url.includes('youtu.be')) {
      const id = url.split('/').pop().split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('youtube.com/watch')) {
      const params = new URLSearchParams(url.split('?')[1]);
      const id = params.get('v');
      return `https://www.youtube.com/embed/${id}`;
    }
    return url; // fallback for other video URLs
  } catch {
    return url;
  }
};

export default function CourseVideos() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  useEffect(() => {
    const fetchCourse = async () => {
      const token = localStorage.getItem('jwt');
      try {
        const res = await fetch(`/api/courses`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const data = await res.json();

        const foundCourse = data.courses.find((c) => c.documentId === id);
        setCourse(foundCourse);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div className="text-white p-6">Loading course...</div>;
  if (!course) return <div className="text-white p-6">Course not found</div>;

  const { modules, title } = course;

  const handleNext = () => {
    setCurrentModuleIndex((prev) => Math.min(prev + 1, modules.length - 1));
  };

  const handlePrev = () => {
    setCurrentModuleIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-[#0d0d16]">
      <div className="min-h-screen py-8 w-full max-w-7xl mx-auto bg-[#0d0d16] text-white flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-400 text-lg font-semibold">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-gray-300">
            <FaHeart className="text-red-500" /> <span>3</span>
            <FiBookOpen />
            <FaGift className="text-yellow-400" />
          </div>
        </div>

        <div className="flex flex-1">
          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* ✅ Video or Placeholder */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
              {modules[currentModuleIndex]?.videoLink ? (
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(modules[currentModuleIndex].videoLink)}
                  title={modules[currentModuleIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-yellow-400 flex items-center justify-center mb-4">
                    <FiBookOpen className="text-3xl text-white" />
                  </div>
                  <p className="text-sm text-gray-400">
                    No video available for this module
                  </p>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                disabled={currentModuleIndex === 0}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentModuleIndex === modules.length - 1}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-yellow-400 hover:from-purple-600 hover:to-yellow-500 text-black font-semibold transition disabled:opacity-50"
              >
                Next
              </button>
            </div>

            {/* Warning Section */}
            <div className="mt-8 flex flex-col items-center">
              <div className="bg-[#141422] border border-yellow-500 px-6 py-6 rounded-lg flex flex-col items-center">
                <span className="text-yellow-400 font-semibold">
                  ⚠️ Copyright Warning
                </span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png"
                  alt="warning"
                  className="w-20 mt-4"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[320px] border-l border-gray-800 p-6 overflow-y-auto">
            <div className="mb-4">
              <h2 className="text-sm text-gray-400">Running Module</h2>
              <div className="w-full bg-gray-700 h-2 rounded mt-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-yellow-400 h-2 rounded"
                  style={{
                    width: `${((currentModuleIndex + 1) / modules.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search Lesson"
              className="w-full px-3 py-2 rounded bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Module List */}
            <div className="mt-6 flex flex-col gap-4">
              {modules.map((mod, i) => (
                <div
                  key={mod.id}
                  onClick={() => setCurrentModuleIndex(i)}
                  className={`p-4 rounded-lg cursor-pointer transition ${
                    i === currentModuleIndex
                      ? 'bg-gradient-to-r from-purple-600 to-yellow-400 text-black'
                      : 'bg-[#1a1a2e] hover:bg-[#24243a]'
                  }`}
                >
                  <h3
                    className={`font-medium ${
                      i === currentModuleIndex
                        ? 'text-black'
                        : 'text-yellow-300'
                    }`}
                  >
                    {mod.title}
                  </h3>
                  {mod.videoLink ? (
                    <a
                      href={mod.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm underline"
                    >
                      Watch Video
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm italic">No video link</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
