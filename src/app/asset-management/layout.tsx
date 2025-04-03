import { ReactNode } from 'react';
import ToggleButton from '@/components/ToggleButton';



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
