import { use } from 'react';

import AssetSelection from '@/components/AssetSelection';

export default function SmartContractDetailPage({
  params,
}: {
  params: Promise<{ title?: string }>;
}) {
  const resolvedParams = use(params);
  if (!resolvedParams?.title) {
    return <p>Loading...</p>;
  }
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold">
        {decodeURIComponent(resolvedParams.title)} Smart Contract
      </h1>
      <AssetSelection title={resolvedParams.title} />
    </div>
  );
}
