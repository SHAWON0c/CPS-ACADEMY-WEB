import React from 'react';
import Hero from '../LandingPage/Hero';
import CourseSection from '../LandingPage/CourseSection';
import SuccessStories from '../LandingPage/SuccessStories';
import MissionSection from '../LandingPage/MissionSection';
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CourseSection></CourseSection>
      <SuccessStories></SuccessStories>
      <MissionSection></MissionSection>
    </div>
  );
};

export default Home;