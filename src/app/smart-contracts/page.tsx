"use client";

import { useState } from "react";
import { SmartContractCard } from "@/components/ContractCard";
import ContractTypeToggle from "@/components/ContractTypeToggle";

export default function Page() {
  const [selectedType, setSelectedType] = useState("All");
  const DUMMY_CONTRACTS = [
    {
      title: "FilmRights",
      description: "Manages ownership of IP, assigns revenue shares",
      type: "ERC-721",
      functions: [
        "Assigns ownership",
        "Records rights",
        "Facilitates transfers",
      ],
    },
    {
      title: "Licensing",
      description: "Automates film licensing and royalty payments",
      type: "ERC-721",
      functions: ["Issues licenses", "Enforces royalties on distribution"],
    },
    {
      title: "RevenueSplit",
      description:
        "Automates revenue sharing among investors, creators, and stakeholders",
      type: "ERC-20",
      functions: [
        "Distribution of revenue",
        "Handles multiple revenue streams",
      ],
    },
    {
      title: "Investment",
      description: "Enables tokenised film investment and revenue sharing",
      type: "ERC-1155",
      functions: [
        "Tracks contributions",
        "Issues film-backed tokens",
        "Automates investor payouts",
      ],
    },
    {
      title: "StreamingPayouts",
      description: "Enables tokenised film investment and revenue sharing",
      type: "ERC-20",
      functions: ["Reads external streaming data", "Executes micropayments"],
    },
  ];

  const toggleOptions = [
    { name: "All" },
    { name: "ERC-721" },
    { name: "ERC-1155" },
    { name: "ERC-20" },
  ];

  const filteredContracts =
    selectedType === "All"
      ? DUMMY_CONTRACTS
      : DUMMY_CONTRACTS.filter((contract) => contract.type === selectedType);
  return (
    <>
      <div className="mt-4">
        <ContractTypeToggle
          options={toggleOptions}
          onSelect={setSelectedType}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {filteredContracts.map((card, i) => {
          const { title, description, type, functions } = card;
          return (
            <SmartContractCard
              key={i}
              title={title}
              description={description}
              type={type}
              functions={functions}
            />
          );
        })}
      </div>
    </>
  );
}
