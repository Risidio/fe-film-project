"use client"

import { useState } from "react"
import { FileDropZone } from "@/components/File-drop-zone"

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    console.log("Selected file:", file)
  }

  return (
    <div className="flex flex-col items-center justify-start p-4">
      <div className="w-full max-w-xl mt-10 ">
        <FileDropZone onFileSelect={handleFileSelect} />

        {selectedFile && (
          <div className="mt-4 p-4 border rounded-lg">
            <h2 className="font-medium">Selected File:</h2>
            <p>{selectedFile.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}