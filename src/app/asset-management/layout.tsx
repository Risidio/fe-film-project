import { ReactNode } from 'react';
import ToggleButton from '@/components/ToggleButton';



const toggleOptions = [
    { name: "Browse Assets", link: "/asset-management" },
    { name: "Upload New", link: "/asset-management/upload" }
]


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl xl:text-4xl font-bold pb-2">Assets</h2>
      <p className="text-gray-500 text-lg xl:text-2xl">Upload and manage your files in one place</p>

      <div className="mt-4">
        <ToggleButton options={toggleOptions}/>
        </div>
          {children}
    </div>
  )
}