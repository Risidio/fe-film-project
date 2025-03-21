import AssetCard from "@/components/AssetCard";

export default function Page() {
  const files = [
    {
      name: "Contract Agreement.pdf",
      size: "2.5 MB",
      date: "Oct 15, 2023",
    },
    {
      name: "Financial Report.xlsx",
      size: "1.8 MB",
      date: "Nov 20, 2023",
    },
    {
      name: "Presentation.pptx",
      size: "5.2 MB",
      date: "Sep 05, 2023",
    },
    {
      name: "Requirements.docx",
      size: "1.1 MB",
      date: "Dec 01, 2023",
    },
  ];

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
