'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

import { FileDropZone } from '@/components/File-drop-zone';

import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

interface SampleData {
  id: number;
  name: string;
  type: string;
  size: string;
}

const data: SampleData[] = [
  { id: 1, name: 'Movie_Script_1.pdf', type: '.pdf', size: '600KB' },
  { id: 2, name: 'Movie_Script_2_DRAFT.docx', type: '.docx', size: '768KB' },
  { id: 3, name: 'Movie_Script_3.pdf', type: '.pdf', size: '1.2MB' },
];

const columns: ColumnDef<SampleData>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <span className="font-semibold">{row.getValue('name')}</span>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => <span>{row.getValue('type')}</span>,
  },
  {
    accessorKey: 'size',
    header: 'Size',
    cell: ({ row }) => <span>{row.getValue('size')}</span>,
  },
];

const AssetSelection = ({ title }: { title: string }) => {
  const router = useRouter();
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleAssetSelect = (asset: string) => {
    setSelectedAsset(asset);
    setUploadedFile(null);
  };

  const handleNext = () => {
    if (selectedAsset || uploadedFile) {
      router.push(
        `/smart-contracts/${encodeURIComponent(title)}/metadata-form`
      );
    } else {
      alert('Please select an asset or upload a file');
    }
  };

  return (
    <div>
      <h2>Step 1: Select or Upload a document</h2>

      <FileDropZone
        onFileSelect={(file: File) => {
          setUploadedFile(file);
          setSelectedAsset(null);
        }}
      />

      <div className="mt-4">
        <p className="mb-4">Browse existing assets:</p>
        <div className="flex w-full gap-2 rounded-xl border-2">
          <DataTable
            columns={columns}
            data={data}
            selectedAsset={handleAssetSelect}
          />
        </div>
      </div>
      <Button onClick={handleNext} className="mt-6">
        Next
      </Button>
    </div>
  );
};

export default AssetSelection;
