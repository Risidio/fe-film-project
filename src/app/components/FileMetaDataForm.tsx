import React from 'react'
import { FileData } from '@/types/types';



function FileMetaDataForm({ fileData, handleFileDataChange }: { fileData: FileData, handleFileDataChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) {
    return (
        <div className="grid grid-cols-2 gap-8 p-4">
          <div>
              <label className="block text-sm mb-1 text-white">File name</label>
              <input type="text" placeholder="Enter filename" name="fileName" value={fileData.fileName} onChange={handleFileDataChange} className="bg-opacity-50 bg-black/20 w-full px-2 py-1 text-white rounded-xl" />
          </div>
          <div>
              <label className="block text-sm mb-1 text-white">Tags (up-to 3)</label>
              <input type="text" placeholder="Tags" name="tag" value={fileData.tag} onChange={handleFileDataChange} className="bg-opacity-50 bg-black/20 w-full px-2 py-1 text-white rounded-xl" />
            </div>
            <div className='col-span-2'>
            <label className="block text-sm mb-1 text-white">Description</label>
            <textarea placeholder="Any description" name="description" value={fileData.description} onChange={handleFileDataChange} rows={4}  className="bg-opacity-50 w-full bg-black/20 px-2 py-1 text-white rounded-xl" />
            </div>
        </div>
  )
}

export default FileMetaDataForm
