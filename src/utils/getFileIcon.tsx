import { FileText, File, FileSpreadsheet, Presentation } from "lucide-react";

export default function getFileIcon(filename: string) {
    const extension = filename.split('.').pop()?.toLowerCase() || '';
    switch (extension) {
        case 'pdf':
            return <FileText className="w-6 h-6 text-red-500" />;
        case 'xlsx':
            return <FileSpreadsheet className="w-6 h-6 text-green-500" />;
        case 'pptx':
            return <Presentation className="w-6 h-6 text-blue-500" />;
        case 'docx':
            return <File className="w-6 h-6 text-gray-500" />;
        default:
            return <FileText className="w-6 h-6 text-gray-500" />;
        
    }
}