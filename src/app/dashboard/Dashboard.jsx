'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useUserRole from '@/hooks/useUserRole';

export default function DashboardSection() {
  const { role, username, loading } = useUserRole();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('level1');
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  // Role-based access
  useEffect(() => {
    if (!loading) {
      const allowedRoles = ['student', 'media manager', 'super admin'];
      if (!allowedRoles.includes(role?.toLowerCase())) {
        router.push('/');
      }
    }
  }, [role, loading, router]);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('jwt');
      if (!token) {
        console.error('No token found');
        setLoadingCourses(false);
        return;
      }

      try {
        const res = await fetch('http://localhost:1337/api/courses?populate=*', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch courses');

        const data = await res.json();
        // Strapi returns data inside `data` array
        setCourses(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Checking role...
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f1a] min-h-screen text-white flex justify-center py-10 mt-20">
      <div className="w-full max-w-[80%] px-4">
        {/* Banner */}
        <div className="bg-gradient-to-r from-yellow-700 to-yellow-600 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Welcome to <span className="text-yellow-300">CPS Academy</span>
              <br />
              Let’s code together
            </h2>
            <p className="text-sm text-gray-200 mt-1">
              Take the challenge to improve your overall performance.
            </p>
            <button className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-black font-medium transition">
              Take Challenge →
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/running.png"
              alt="challenge"
              className="w-40 mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Welcome */}
        <h2 className="mt-8 text-lg font-semibold">
          Welcome Back <span className="text-yellow-400">{username}</span>, Ready
          For Your Next Lesson?
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 mt-4 border-b border-yellow-600 overflow-x-auto">
          <button
            className={`pb-2 whitespace-nowrap ${
              activeTab === 'level1'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('level1')}
          >
            Level 1 Course
          </button>
          <button
            className={`pb-2 whitespace-nowrap ${
              activeTab === 'conceptual'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('conceptual')}
          >
            Conceptual Session
          </button>
        </div>

        {/* Courses */}
        <div className="mt-6 flex flex-col gap-6">
          {loadingCourses ? (
            <div className="text-white">Loading courses...</div>
          ) : courses.length === 0 ? (
            <div className="text-gray-400">No courses available</div>
          ) : (
            courses.map((course) => {
              // Strapi returns actual course data in `attributes`
              const courseData = course.attributes || course;

              // Safely get banner URL
              const bannerUrl =
                courseData.banner?.[0]?.formats?.medium?.url ||
                courseData.banner?.[0]?.url ||
                '/images/course1.png';

              return (
                <div
                  key={course.id}
                  className="bg-[#1b1b2f] rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg"
                >
                  <img
                    src={
                      bannerUrl.startsWith('http')
                        ? bannerUrl
                        : `http://localhost:1337${bannerUrl}`
                    }
                    alt={courseData.titile || 'Course'}
                    className="w-full md:w-60 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {courseData.titile}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Instructor Name
                      </p>

                      {/* Progress */}
                      <div className="mt-2">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: '0%' }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">0%</p>
                      </div>
                    </div>

                    {/* Start Course Button */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <button
                        onClick={() =>
                          router.push(
                            `/dashboard/courses/${courseData.documentId}`
                          )
                        }
                        className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition"
                      >
                        Start Course
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
