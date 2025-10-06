import React from "react";
import Hero from "./Hero";
import CourseSection from "./CourseSection";
import CourseOverview from "./CourseOverview";
import MeetTrainer from "./MeetTrainer";
import SuccessStories from "./SuccessStories";
import ConsultationSection from "./ConsultationSection";

// No "use client" needed here if all child components are server components.
// Add "use client" if you need useState/useEffect or any client-side hooks.

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <Hero />
      <CourseSection />
      <CourseOverview />
      <MeetTrainer />
      <SuccessStories />
      <ConsultationSection />
    </main>
  );
};

export default HomePage;
