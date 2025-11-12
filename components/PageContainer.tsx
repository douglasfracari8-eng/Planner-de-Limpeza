
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 my-8 shadow-lg rounded-lg border border-gray-100">
      {children}
    </div>
  );
};

export default PageContainer;
