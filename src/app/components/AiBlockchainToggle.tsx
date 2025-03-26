'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Tab = 'AI' | 'Blockchain';

const AiBlockchainToggle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('AI');
  const router = useRouter();

  const aiButtonOnClick = () => {
    setActiveTab('AI');
    router.push('/ai');
  };
  const blockchainButtonOnClick = () => {
    setActiveTab('Blockchain');
    router.push('/blockchain');
  };

  return (
    <div className="flex w-64 items-center rounded-full bg-[#243045] shadow-md">
      <button
        onClick={aiButtonOnClick}
        className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
          activeTab === 'AI'
            ? 'bg-gradient-to-r from-[#168ECE] to-[#2AABEE] text-white'
            : 'text-gray-300 hover:text-white'
        } `}
      >
        AI
      </button>
      <button
        onClick={blockchainButtonOnClick}
        className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
          activeTab === 'Blockchain'
            ? 'bg-gradient-to-r from-[#168ECE] to-[#2AABEE] text-white'
            : 'text-gray-300 hover:text-white'
        } `}
      >
        Blockchain
      </button>
    </div>
  );
};

export default AiBlockchainToggle;
