'use client';

import { useState } from 'react';
import { SmartContractCard } from '@/components/ContractCard';
import ContractTypeToggle from '@/components/ContractTypeToggle';
import { DUMMY_CONTRACTS } from '@/lib/SmartContractList';

import { v4 as uuidv4 } from 'uuid';

export default function Page() {
  const [selectedType, setSelectedType] = useState('All');

  const toggleOptions = [
    { name: 'All' },
    { name: 'ERC-721' },
    { name: 'ERC-1155' },
    { name: 'ERC-20' },
  ];

  const filteredContracts =
    selectedType === 'All'
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
      <div className="mt-6 grid h-2/3 grid-cols-1 gap-5 overflow-y-scroll md:grid-cols-2 lg:grid-cols-3">
        {filteredContracts.map(
          ({
            title,
            description,
            type,
            functions,
            keyFeatures,
            useCases,
            standards,
            chainSupport,
          }) => {
            return (
              <SmartContractCard
                key={uuidv4()}
                title={title}
                description={description}
                type={type}
                functions={functions}
                keyFeatures={keyFeatures}
                useCases={useCases}
                standards={standards}
                chainSupport={chainSupport}
              />
            );
          }
        )}
      </div>
    </>
  );
}
