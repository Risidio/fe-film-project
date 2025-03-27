'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

const FileUploader = ({ onUpload }: { onUpload: (file: File) => void }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      onUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      onUpload(file);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl backdrop-blur-none">
      <motion.div
        className={`relative flex h-60 flex-col items-center justify-center rounded-lg p-6 transition-all duration-200 ${
          isDragging
            ? 'border-teal-bright/80 border bg-white/10'
            : 'bg-black/20'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="file"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          onChange={handleFileSelect}
          accept=".pdf,.doc,.docx,.txt"
        />

        <motion.div
          className="flex flex-col items-center"
          animate={{ y: isDragging ? -10 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <div className="bg-teal-bright/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <Upload className="text-teal-bright h-8 w-8" />
          </div>

          <p className="mb-2 text-lg font-medium text-white">
            Click to Upload your Script
          </p>
          <p className="text-center text-sm text-white/60">
            Supported formats: PDF, DOC, DOCX, TXT
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FileUploader;
