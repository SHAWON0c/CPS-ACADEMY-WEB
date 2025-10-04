// src/app/course/[id]/page.jsx
import CourseLayout from "@/components/CourseLayout";

// Map your courses to their video URLs
const courseVideos = {
  course1: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video
  course2: "https://www.youtube.com/embed/VIDEO_ID_2",
  course3: "https://www.youtube.com/embed/VIDEO_ID_3",
};

const courseTitles = {
  course1: "C to C++ Bootcamp",
  course2: "Advanced Competitive Programming",
  course3: "Data Structures & Algorithms",
};

export default function CoursePage({ params }) {
  const { id } = params;

  const videoUrl = courseVideos[id];
  const title = courseTitles[id];

  if (!videoUrl) {
    return <p className="p-10 text-white">Course not found!</p>;
  }

  return <CourseLayout title={title} videoUrl={videoUrl} />;
}
