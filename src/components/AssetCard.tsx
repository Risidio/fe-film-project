import { Card, CardContent } from "@/components/ui/card";
import getFileIcon from "@/utils/getFileIcon";


interface AssetCardProps {
    fileName: string;
    fileSize: string;
    date: string;
}


export default function AssetCard({ fileName, fileSize, date }: AssetCardProps) {
    const icon = getFileIcon(fileName);
    return (
        <Card className="flex flex-row items-center gap-4 p-4">
            {icon}
            <CardContent className="p-0">
                <p className="font-medium">{fileName}</p>
                <p className="text-sm text-gray-500">{fileSize} • {date}</p>
            </CardContent>
        </Card>
    );
}
