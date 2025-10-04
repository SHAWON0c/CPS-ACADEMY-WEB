import React from 'react';
import Hero from './Hero';
import CourseHighlights from './CourseHighlights';
import CourseTimeline from './CourseTimeline';
import BootcampMaterials from './BootcampMaterials';

const page = () => {
    return (
        <div>
            <h1> this is bootcamp</h1>
            <Hero></Hero>
            <CourseHighlights></CourseHighlights>
            <CourseTimeline></CourseTimeline>
            <BootcampMaterials></BootcampMaterials>
        </div>
    );
};

export default page;