import React from 'react';

interface HandDrawnArrowProps {
  className?: string;
}

const HandDrawnArrow: React.FC<HandDrawnArrowProps> = ({ className = '' }) => {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      className={className}
    >
      <path 
        d="M20 5 C18 8, 16 12, 15 16 C14 20, 15 24, 17 28 C18 30, 19 32, 20 35" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        fill="none"
      />
      <path 
        d="M16 32 L20 35 L24 32" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        fill="none"
      />
    </svg>
  );
};

export default HandDrawnArrow;