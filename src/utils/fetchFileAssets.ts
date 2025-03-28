import { IFileAsset } from "@/models/FileAsset";


export default async function fetchFileAssets() {
    try {
        const res = await fetch(
            process.env.URL + "/api/asset-management/file-asset",
            {
                method: "GET",
            }
        );
        const data = await res.json();

        if (data.error) {
            console.error("API Error: " + data.error);
            return data.error;
        }

        return data.fileAssets.map((file: IFileAsset) => ({
            id: file._id,
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2),
            date: new Date(file.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
            }),
        }));
    } catch (error) {
        console.error("Error fetching asset files:", error);
        return error;
    }
}