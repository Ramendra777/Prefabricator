import { useState } from 'react'; // Added this import
import { FiUpload, FiX } from 'react-icons/fi'

type FileInputProps = {
  label?: string
  onChange: (files: FileList | null) => void
  accept?: string
  multiple?: boolean
  className?: string
  required?: boolean
}

export const FileInput = ({
  label,
  onChange,
  accept = '',
  multiple = false,
  className = '',
  required = false
}: FileInputProps) => {
  const [files, setFiles] = useState<File[]>([]) // Now properly imported

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles))
      onChange(selectedFiles)
    }
  }

  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      
      <div className="flex items-center gap-2">
        <label className="cursor-pointer bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-md border border-blue-200 dark:border-gray-600 flex items-center gap-2 transition-colors">
          <FiUpload />
          <span>Choose Files</span>
          <input
            type="file"
            className="hidden"
            onChange={handleChange}
            accept={accept}
            multiple={multiple}
          />
        </label>
        
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {files.length > 0 ? `${files.length} file(s) selected` : 'No files selected'}
        </span>
      </div>
      
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded-md">
              <span className="text-sm text-gray-700 dark:text-gray-300 truncate max-w-xs">
                {file.name}
              </span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}