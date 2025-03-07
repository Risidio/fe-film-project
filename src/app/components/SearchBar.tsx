"use client"; 
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex justify-end   bg-white/10 backdrop-blur-sm rounded-2xl w-xl mt-4 pl-6 text-white shadow-md border border-gray-200">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Document title or filename..."
        className="flex-1  focus:outline-none placeholder-gray-400 text-sm"
      />
      <button
        onClick={handleSearch}
        className="bg-cyan-600 px-4 py-2 rounded-2xl text-white text-sm font-medium ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
