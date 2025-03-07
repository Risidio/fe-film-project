"use client"; 

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Tab = "AI" | "Blockchain";

const AiBlockchainToggle: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>("AI");
    const router = useRouter();
    
    const aiButtonOnClick = () => {
        setActiveTab("AI");
        router.push("/ai");

    };
    const blockchainButtonOnClick = () => {
        setActiveTab("Blockchain");
        router.push("/blockchain");
    }

  return (
      <div className="flex items-center rounded-full bg-[#243045] shadow-md w-64">
      <button
        onClick={aiButtonOnClick}
        className={` py-2 text-sm font-medium rounded-full transition-colors flex-1
          ${
            activeTab === "AI"
              ? "bg-gradient-to-r from-[#168ECE] to-[#2AABEE] text-white"
              : "text-gray-300 hover:text-white"
          }
        `}
      >
        AI
      </button>
      <button
        onClick={blockchainButtonOnClick}
        className={` py-2 text-sm font-medium rounded-full transition-colors flex-1
          ${
            activeTab === "Blockchain"
              ? "bg-gradient-to-r from-[#168ECE] to-[#2AABEE] text-white"
              : "text-gray-300 hover:text-white"
          }
        `}
      >
        Blockchain
      </button>
    </div>
  );
};

export default AiBlockchainToggle;