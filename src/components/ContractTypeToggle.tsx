"use client";

import React from "react";

interface ToggleButtonProps {
  options: { name: string }[];
  onSelect: (name: string) => void;
}

const ContractTypeToggle: React.FC<ToggleButtonProps> = ({
  options,
  onSelect,
}) => {
  return (
    <div className="inline-flex rounded-md bg-gray-100 p-0.5 text-sm font-medium shadow-sm">
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => onSelect(option.name)}
          className="p-2 rounded"
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default ContractTypeToggle;
