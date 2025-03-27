'use client';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
    <div className="flex w-xl justify-end rounded-2xl border border-gray-200 bg-white/10 pl-6 text-white shadow-md backdrop-blur-sm">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Document title or filename..."
        className="flex-1 text-sm placeholder-gray-400 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="ml-2 rounded-2xl bg-cyan-600 px-4 py-2 text-sm font-medium text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
