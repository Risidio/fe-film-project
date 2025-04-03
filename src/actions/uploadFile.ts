'server only'

import { FileData } from "@/types/types";


async function uploadToPinata(file: File) { 
    try {
        if (!file) throw new Error("No file selected");
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("/api/asset-management/ips-file-upload", {
            method: "POST",
            body: formData,
        });
        if (response.status==500) throw new Error("Pinata server error");
        return response.json();
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

async function storeFileMetadata(filedata: FileData) {
    const response = await fetch("/api/asset-management/file-assets", {
        method: "POST",
        body: JSON.stringify(filedata),
     })
    return response.json();
}

export default async function uploadFileAction(prevState:unknown, formData: FormData) {

    const file = formData.get('file') as File;

    const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        description: formData.get('description') as string,
        date: new Date(),
    }
    try {
        const url = await uploadToPinata(file);
        const metadata = await storeFileMetadata({ ...fileData, url });
        console.log(metadata);
        return {
            success: true,
            fileData: { ...metadata, url },
        };
    } catch (error) {
        console.error("Error uploading file:", error);
        return {
            success: false,
            error: `Error: ${(error as Error).message}`,
        };
    }
 }