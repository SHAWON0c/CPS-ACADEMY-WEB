import React from 'react';
import DashboardSection from './Dashboard';
import ProtectedRoute from '../../Components/ProtectedRoute';


const page = () => {
    return (
        <ProtectedRoute>
        <div className=''>
            <DashboardSection></DashboardSection>
        </div>
        </ProtectedRoute>

    );
};

export default page;