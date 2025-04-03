
import React from 'react';
import { X } from 'lucide-react';

interface UploadedFileCardProps {
    file: File;
    handleRemove: () => void;
}

function UploadedFileCard({ file, handleRemove }: UploadedFileCardProps) {
    return (
        <div className="flex justify-between mt-4 p-4 border rounded-lg">
            <div>
                <h2 className="font-medium">Selected File:</h2>
                <p>{file.name}</p>
            </div>
            <button onClick={handleRemove}>
                <X />
            </button>
        </div>
    );
}

export default UploadedFileCard;

