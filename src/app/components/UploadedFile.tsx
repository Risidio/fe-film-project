import React from 'react'
import { MdCancel } from "react-icons/md";



function UploadedFile({fileName, onRemove}: {fileName: string, onRemove: () => void}) {
  return (
    <div>
        <div className="flex items-center justify-between">
              <span> { fileName}</span>
            <button className="text-red-500" onClick={onRemove}>
                <MdCancel />
            </button>
        </div>     
    </div>
  )
}

export default UploadedFile
