'use client';
import { useState, useRef, type DragEvent, type ChangeEvent } from 'react';
import { Upload } from 'lucide-react';

interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
  maxSizeMB?: number;
  accept?: string;
  className?: string;
}

export function FileDropZone({
  onFileSelect,
  maxSizeMB = 20,
  accept,
  className = '',
}: FileDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const validateFile = (file: File): boolean => {
    setError(null);
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      setError(`File size exceeds ${maxSizeMB}MB limit`);
      return false;
    }

    return true;
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-colors ${isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/20'} hover:border-primary/50`}
      >
        <div className="bg-muted mb-4 rounded-full p-3">
          <Upload className="text-muted-foreground h-5 w-5" />
        </div>
        <p className="mb-1 text-center">Drag & drop a file here</p>
        <p className="text-muted-foreground text-sm">
          Or click to browse (max {maxSizeMB}MB)
        </p>
        {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept={accept}
        className="hidden"
      />
    </div>
  );
}
