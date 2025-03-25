'use client';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import FileUploader from './FileUploader';
import { useRouter } from 'next/navigation';
import UploadedFile from './UploadedFile';
import CancelButton from './CancelUploadButton';
import NextButton from './NextButton';
import FileMetaDataForm from './FileMetaDataForm';
import { FileData } from '@/types/types';

function FileUploadCard() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  // const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileData, setFileData] = useState<FileData>({
    fileName: '',
    tag: '',
    description: '',
  });
  const [isFileMetaData, setIsFileMetaData] = useState(false);

  const handleFileDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancelUpload = () => {
    router.push('/ai');
  };
  const handleUpload = (file: File) => {
    setFile(file);
  };
  const removeFile = () => {
    setFile(null);
    setIsFileMetaData(false);
  };
  const handleNext = () => {
    if (!file) {
      alert('No file selected');
      return;
    }
    setIsFileMetaData(true);
  };

  const uploadFileToPinata = async () => {
    try {
      if (!file) {
        alert('No file selected');
        return;
      }
      setUploading(true);
      const formData = new FormData();
      formData.set('file', file);
      const response = await fetch('/api/ipsFileUpload', {
        method: 'POST',
        body: formData,
      });
      const signedUrl = await response.json();
      // setFileUrl(signedUrl);
      setUploading(false);
      alert('File uploaded successfully');
      return signedUrl;
    } catch (error) {
      console.error('Error uploading file', error);
      setUploading(false);
      alert('Error uploading file');
    }
  };

  const handleSubmit = async () => {
    const pinataUrl = await uploadFileToPinata();
    console.log(fileData);
    console.log(pinataUrl);
  };

  return (
    <motion.div
      className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-linear-to-r from-cyan-800 to-blue-800 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 md:w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="mb-2 text-2xl font-semibold text-white">
        Upload Your Script
      </h2>
      <p className="mb-6 text-sm text-white/70">
        Upload your Script file to begin the registration process
      </p>
      {isFileMetaData ? (
        <FileMetaDataForm
          fileData={fileData}
          handleFileDataChange={handleFileDataChange}
        />
      ) : (
        <FileUploader onUpload={handleUpload} />
      )}
      {file && (
        <div className="mx-5 mt-4">
          <UploadedFile fileName={file.name} onRemove={removeFile} />
        </div>
      )}
      <div className="mt-8 flex justify-between">
        <CancelButton onClick={handleCancelUpload}>Cancel Upload</CancelButton>
        {!isFileMetaData ? (
          <NextButton onClick={handleNext}>Next</NextButton>
        ) : (
          <NextButton onClick={handleSubmit}>Submit</NextButton>
        )}
      </div>
    </motion.div>
  );
}

export default FileUploadCard;
