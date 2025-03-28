import AssetCard from "@/components/AssetCard";
import fetchFileAssets from "@/utils/fetchFileAssets";

type File = {
  id : string;
  name: string;
  size: number;
  date: string;
};

export default async function Page() {

  const files = await fetchFileAssets();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-2">
      {files.map((file : File) => (
        <AssetCard
          key={file.id}
          fileName={file.name}
          fileSize={file.size}
          date={file.date}
        />
      ))}
    </div>
  );
}
