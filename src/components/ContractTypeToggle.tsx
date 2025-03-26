"use client";

import React, { useState } from "react";

interface ToggleButtonProps {
  options: { name: string }[];
  onSelect: (name: string) => void;
}

const ContractTypeToggle: React.FC<ToggleButtonProps> = ({
  options,
  onSelect,
}) => {
  const [selected, setSelected] = useState<string | null>("All");

  const handleSelect = (name: string) => {
    setSelected(name);
    onSelect(name);
  };
  return (
    <div className="inline-flex rounded-md bg-gray-100 p-0.5 text-sm font-medium shadow-sm">
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => handleSelect(option.name)}
          className={`px-4 py-1.5 rounded transition-colors ${
            selected === option.name
              ? "bg-white rounded-md text-gray-800 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default ContractTypeToggle;
