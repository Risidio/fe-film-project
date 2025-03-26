import React from 'react';

import { ReactNode } from 'react';

const CancelButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: ReactNode;
}) => {
  return (
    <button
      className="cursor-pointer rounded-md border border-white/20 bg-red-500/80 px-4 py-1.5 font-medium text-white shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50"
      onClick={onClick}
    >
      {children ? children : 'Cancel'}
    </button>
  );
};

export default CancelButton;
