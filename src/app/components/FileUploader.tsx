'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const FileUploader = ({onUpload}:{onUpload:(file: File) => void}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [fileList, setFileList] = useState<FileList | null>(null);
  
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
    <div className="w-full max-w-2xl mx-auto backdrop-blur-none">
      <motion.div
        className={`relative h-60  rounded-lg flex flex-col items-center justify-center p-6 transition-all duration-200 ${
          isDragging 
            ? "border border-teal-bright/80 bg-white/10" 
            : "bg-black/20"
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
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileSelect}
          accept=".pdf,.doc,.docx,.txt"
        />
        
        <motion.div 
          className="flex flex-col items-center"
          animate={{ y: isDragging ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="w-16 h-16 rounded-full bg-teal-bright/10 flex items-center justify-center mb-4">
            <Upload className="h-8 w-8 text-teal-bright" />
          </div>
          
          <p className="text-lg font-medium text-white mb-2">Click to Upload your Script</p>
          <p className="text-sm text-white/60 text-center">
            Supported formats: PDF, DOC, DOCX, TXT
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FileUploader;
