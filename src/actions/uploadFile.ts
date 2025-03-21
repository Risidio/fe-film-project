type FileData = {
    name: string;
    size: number;
    type: string;
    description: string;
    date: string;
    pinataUrl: string;
}


async function uploadToPinata(file: File) { 
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/ipsFileUpload", {
        method: "POST",
        body: formData,
    });
    return response.json();
}

async function storeFileMetadata(filedata :FileData) {

    const response = await fetch("/api/storeFileMetadata", {
        method: "POST",
        body: JSON.stringify(filedata),
    });
    // return response.json();
    return filedata;
}

export default async function uploadFile(formData: FormData) {
    const file = formData.get('file') as File;

    const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        description: formData.get('description') as string,
        date: new Date().toISOString(),
    }

    const pinataUrl = await uploadToPinata(file);
    const metadata = await storeFileMetadata({ ...fileData, pinataUrl });
    return {...metadata, pinataUrl};

    // return 'success';

 }