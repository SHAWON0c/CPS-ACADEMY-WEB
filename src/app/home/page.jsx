import React from 'react';
import Hero from './Hero';
import CourseSection from './CourseSection';
import CourseOverview from './CourseOverview'
import MeetTrainer from './MeetTrainer';
import SuccessStories from './SuccessStories';
import ConsultationSection from './ConsultationSection';
const page = () => {
    return (
        <div className='items-center justify-center'>
            <Hero></Hero>
            <CourseSection></CourseSection>
            <CourseOverview></CourseOverview>
            <MeetTrainer></MeetTrainer>
            <SuccessStories></SuccessStories>
            <ConsultationSection></ConsultationSection>
        </div>
    );
};

export default page;