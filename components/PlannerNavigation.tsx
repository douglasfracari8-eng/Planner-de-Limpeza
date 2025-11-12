
import React from 'react';

interface PlannerNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const PlannerNavigation: React.FC<PlannerNavigationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm p-4 border-t border-gray-200 shadow-md flex items-center justify-center z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Anterior
        </button>
        <span className="text-gray-700 font-medium">
          Página {currentPage + 1} de {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-purple-200 text-purple-800 rounded-md hover:bg-purple-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default PlannerNavigation;
