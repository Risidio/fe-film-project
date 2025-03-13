'use client';
import { motion } from 'motion/react'
import React, { useState } from 'react'
import FileUploader from './FileUploader';
import { useRouter } from 'next/navigation'
import UploadedFile from './UploadedFile';
import CancelButton from './CancelUploadButton';
import NextButton from './NextButton';
type FileData = {
    fileName: string;
}

function FileUploadCard() {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    const handleCancelUpload = () => {
        router.push("/ai");
    }
    const handleUpload = (file: File) => {
        setFile(file);
    }
    const removeFile = () => {

        setFile(null);
    }

    const uploadFileToPinata = async () => {
        try {
            if (!file) {
                alert("No file selected");
                return;
            }
            setUploading(true);
            const formData = new FormData();
            formData.set("file", file);
            const response = await fetch("/api/ipsFileUpload", {
                method: "POST",
                body: formData,
            });
            const signedUrl = await response.json();
            alert("File uploaded successfully");
            setFileUrl(signedUrl);
            setUploading(false);
        } catch (error) {
            console.error("Error uploading file", error);
            setUploading(false);
            alert("Error uploading file");
        }
    }



  return (
        <motion.div
            className="backdrop-blur-lg bg-linear-to-r from-cyan-800 to-blue-800 border border-white/10 shadow-lg rounded-xl transition-all duration-300 p-8 w-3xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-2">Upload Your Script</h2>
            <p className="text-white/70 text-sm mb-6">
              Upload your Script file to begin the registration process
            </p>
            
          <FileUploader onUpload={handleUpload} />
          {file && (
            <div className='mt-4 mx-5'>
                  <UploadedFile fileName={file.name} onRemove={removeFile} />
              </div>
              
          )}
          <p> { fileUrl}</p>
          <div className="flex justify-between mt-8">
            <CancelButton onClick={handleCancelUpload}>
                Cancel Upload
            </CancelButton>
              <NextButton onClick={uploadFileToPinata} >
                  Submit
              </NextButton>
          </div>
        </motion.div>
  )
}

export default FileUploadCard
