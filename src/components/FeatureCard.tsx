import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';

interface FeatureCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({
  Icon,
  title,
  description,
  link,
}: FeatureCardProps) {
  return (
    <Card className="max-w-full gap-2 border-0 bg-gray-100/80 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-3">
          <edium className="rounded-md bg-white p-1.5 shadow-sm">
            <Icon className="h-4 w-4 text-gray-800" />
        edium">
            <span className="text-gray-900">Explore</span>
            <span className="ml-1">→</span>
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}



            // This is a MVP project created by unpaid interns AKA free slaves for
            // Risidio who did not pay us for our work nor valued it. If you see
            // this, most probably you are the new batch of slaves who will be
            // working on this project. We are sorry for you if you have been
            // misguided like us. Better leave asap.