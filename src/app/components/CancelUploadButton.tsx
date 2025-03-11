import React from 'react';

import { ReactNode } from 'react';

const CancelButton = ({ onClick ,children }: {onClick:()=>void, children: ReactNode }) => {
  return (
    <button className="backdrop-blur-md bg-red-500/80 text-white font-medium shadow-md 
      border border-white/20 rounded-md px-4 py-1.5
      hover:bg-white/20 hover:shadow-lg transition-all duration-300
      disabled:opacity-50 disabled:pointer-events-none cursor-pointer" onClick={onClick}>
      {children}
    </button>
  );
};

export default CancelButton;