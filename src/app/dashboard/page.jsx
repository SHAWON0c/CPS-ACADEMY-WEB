import React from 'react';
import DashboardSection from './Dashboard';
import ProtectedRoute from '../../Components/ProtectedRoute';

const Page = () => {
  return (
    <ProtectedRoute allowedRoles={['student', 'media manager', 'super admin']}>
      <div className="">
        <DashboardSection />
      </div>
    </ProtectedRoute>
  );
};

export default Page;
