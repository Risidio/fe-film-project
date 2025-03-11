import React, { ReactNode } from 'react';

const NextButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="backdrop-blur-md bg-cyan-500 text-blue-dark font-medium shadow-lg 
      border border-white/10 rounded-md px-6 py-2
      hover:bg-teal-bright hover:shadow-xl transition-all duration-300
      disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
        {children}
    </button>
  );
};

export default NextButton;