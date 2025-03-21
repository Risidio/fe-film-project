
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface FeatureCardProps {
    Icon: React.ElementType;
    title: string;
    description: string;
    link: string;
}

export default function FeatureCard({ Icon, title, description, link }: FeatureCardProps) {
    return (
        <Card className="max-w-full bg-gray-100/80 border-0 shadow-sm gap-2">
            <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-white rounded-md shadow-sm">
                        <Icon className="h-4 w-4 text-gray-800" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                </div>
            </CardHeader>
            <CardContent className="pb-2 flex-grow">
                <p className="text-sm text-gray-500">{description}</p>
            </CardContent>
            <CardFooter>
                <Link href={link}>
                    <div className="flex items-center text-sm font-medium">
                        <span className="text-gray-900">Explore</span>
                        <span className="ml-1">→</span>
                    </div>
                </Link>
            </CardFooter>
        </Card>
    );
}
