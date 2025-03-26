'use client';

import { useState } from 'react';
import { FileDropZone } from '@/components/File-drop-zone';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    console.log('Selected file:', file);
  };

  return (
    <div className="flex flex-col items-center justify-start p-4">
      <div className="mt-10 w-full max-w-xl">
        <FileDropZone onFileSelect={handleFileSelect} />

        {selectedFile && (
          <div className="mt-4 rounded-lg border p-4">
            <h2 className="font-medium">Selected File:</h2>
            <p>{selectedFile.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
