'use client';

import { useState, useActionState } from "react"
import { FileDropZone } from "@/components/File-drop-zone"
import UploadedFileCard from "@/components/UploadedFileCard"
import FileDescriptionInput from "@/components/FileDescriptionInput"
import { Button } from "@/components/ui/button"
import uploadFileAction from "@/actions/uploadFile"



export default function Page() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [state, formAction, isPending] = useActionState( uploadFileAction,undefined)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }
  const handleRemoveFile = () => {
    setSelectedFile(null)
  }

  return (
    <div className="flex flex-col items-center justify-start p-4">
      <form className="w-full max-w-xl mt-10 flex flex-col gap-4  " action={formAction}>
        <FileDropZone onFileSelect={handleFileSelect} className={selectedFile ? 'hidden': ''} />

        {selectedFile && (
          <>
            <UploadedFileCard file={selectedFile} handleRemove={handleRemoveFile} />
            <FileDescriptionInput />
            <Button type="submit" variant="outline" className="w-full mt-4"  disabled={isPending}  >
              {isPending ? "Uploading..." : "Upload"}
            </Button>
          </>
        )}
        
      </form>
      <div className="mt-4">
        {state?.success && <p>File uploaded successfully</p>}
        {state?.error && <p>{state.error}</p>}
      </div>
    </div>
  );
}
