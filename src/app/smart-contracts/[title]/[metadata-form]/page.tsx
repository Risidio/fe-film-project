import AssetSelection from '@/components/AssetSelection';

export default function MetadataForm({
  params,
}: {
  params: { title?: string };
}) {
  if (!params.title) {
    return <p>Loading...</p>;
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {decodeURIComponent(params.title)} Smart 
      </h1>
      <AssetSelection title={params.title} />
    </div>
  );
}
