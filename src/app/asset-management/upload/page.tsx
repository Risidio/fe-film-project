"use client"

import { useState, useActionState } from "react"
import { FileDropZone } from "@/components/File-drop-zone"
import UploadedFileCard from "@/components/UploadedFileCard"
import FileDescriptionInput from "@/components/FileDescriptionInput"
import { Button } from "@/components/ui/button"
import uploadFile from "@/actions/uploadFile"

export default function Page() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  // const [state, formAction, isPending] = useActionState(uploadFile, {})

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    console.log("Selected file:", file)
  }
  const handleRemoveFile = () => {
    setSelectedFile(null)
  }



  return (
    <div className="flex flex-col items-center justify-start p-4">
      <form className="w-full max-w-xl mt-10 flex flex-col gap-4  ">
        { !selectedFile && <FileDropZone onFileSelect={handleFileSelect} /> }

        {selectedFile && (
          <>
            <UploadedFileCard file={selectedFile} handleRemove={handleRemoveFile} />
            <FileDescriptionInput />
            <Button variant="outline" className="w-full mt-4">
              Send
            </Button>
          </>
        )}
        
      </form>
    </div>
  )
}