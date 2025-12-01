import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700">صفحه مورد نظر یافت نشد.</p>
      </div>
    </div>
  );
};

export default NotFound;