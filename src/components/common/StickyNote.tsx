import React from 'react';

interface StickyNoteProps {
  children: React.ReactNode;
  className?: string;
}

const StickyNote: React.FC<StickyNoteProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      p-6 rounded-lg border-2 shadow-sm
      relative
      before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:bg-gradient-to-br before:from-transparent before:to-black/5 
      before:pointer-events-none before:rounded-lg
      ${className}
    `}>
      {children}
    </div>
  );
};

export default StickyNote;