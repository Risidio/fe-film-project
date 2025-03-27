import React, { ReactNode } from 'react';

const NextButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-blue-dark hover:bg-teal-bright cursor-pointer rounded-md border border-white/10 bg-cyan-500 px-6 py-2 font-medium shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl disabled:pointer-events-none disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default NextButton;
