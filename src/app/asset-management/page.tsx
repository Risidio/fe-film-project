import AssetCard from "@/components/AssetCard";


type file = {
  name: string;
  size: number;
  date: string;
};

export default async function Page() {

  const assetFiles = await fetch(process.env.URL +"/api/asset-management/file-assets", {
    method: "GET"
  }).then((response) => response.json());
  
  if (assetFiles.error) {
    console.error(assetFiles.error);
    return <div>Error fetching asset files</div>;
  }

  const files: file[] = assetFiles.fileAssets.map((file: file) => ({
    name: file.name,
    size: (file.size / (1024 * 1024)).toFixed(2),
    date: new Date(file.date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-2">
      {files.map((file, index) => (
        <AssetCard
          key={index}
          fileName={file.name}
          fileSize={file.size}
          date={file.date}
        />
      ))}
    </div>
  );
}
