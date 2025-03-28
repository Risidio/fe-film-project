import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, FileSpreadsheet, Presentation } from 'lucide-react';
import ToggleButton from '@/components/ToggleButton';

const files = [
  {
    name: 'Contract Agreement.pdf',
    size: '2.5 MB',
    date: 'Oct 15, 2023',
    icon: <FileText className="h-6 w-6 text-red-500" />,
  },
  {
    name: 'Financial Report.xlsx',
    size: '1.8 MB',
    date: 'Nov 20, 2023',
    icon: <FileSpreadsheet className="h-6 w-6 text-green-500" />,
  },
  {
    name: 'Presentation.pptx',
    size: '5.2 MB',
    date: 'Sep 05, 2023',
    icon: <Presentation className="h-6 w-6 text-blue-500" />,
  },
  {
    name: 'Requirements.docx',
    size: '1.1 MB',
    date: 'Dec 01, 2023',
    icon: <FileText className="h-6 w-6 text-gray-500" />,
  },
];

const toggleOptions = [
  { name: 'Browse Assets', link: '/asset-management' },
  { name: 'Upload New', link: '/asset-management/upload' },
];

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="pb-2 text-2xl font-bold xl:text-4xl">Assets</h2>
      <p className="text-lg text-gray-500 xl:text-2xl">
        Upload and manage your files in one place
      </p>

      <div className="mt-4">
        <ToggleButton options={toggleOptions} />
      </div>
      {children}
    </div>
  );
}
