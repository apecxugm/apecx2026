'use client';

import React, { useRef, useState } from 'react';
import { CloudArrowUp, X } from '@phosphor-icons/react';

interface FileUploadFieldProps {
  label: string;
  accept: string;
  onChange: (file: File | null) => void;
  file: File | null;
  pdfOnly?: boolean;
}

export default function FileUploadField({
  label,
  accept,
  onChange,
  file,
  pdfOnly = false,
}: FileUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert(`File is too large. Maximum 5MB. This file is ${(file.size / 1024 / 1024).toFixed(2)}MB`);
      return;
    }

    // Validate file type
    const validTypes = accept.split(',').map(t => t.trim());
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    const isValidType =
      validTypes.includes(file.type) || validTypes.includes(fileExtension);

    if (!isValidType) {
      alert(
        `Unsupported file format. Supported formats: ${accept}`
      );
      return;
    }

    onChange(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-neutral-1000 mb-2">
        {label}<span className="text-red-200">*</span>
      </label>

      {!file ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
          className={`relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${dragActive
            ? 'border-primary-500 bg-primary-100 bg-opacity-20'
            : 'border-neutral-300 hover:border-primary-400 hover:bg-primary-50 hover:bg-opacity-10'
            }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleChange}
            className="hidden"
          />

          <div className="flex flex-col items-center justify-center">
            <CloudArrowUp
              size={40}
              className="text-primary-500 mb-2"
              weight="bold"
            />
            <p className="text-center text-sm font-semibold text-neutral-1000">
              Drag & drop file here or click to select
            </p>
            <p className="text-center text-xs text-neutral-600 mt-1">
              {pdfOnly ? 'PDF Format (Max 5MB)' : 'JPG, JPEG, or PNG (Max 5MB)'}
            </p>
          </div>
        </div>
      ) : (
        <div className="border border-quarternary-600 bg-quarternary-100 bg-opacity-30 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-quarternary-600 rounded flex items-center justify-center text-white text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-1000 truncate">
                {file.name}
              </p>
              <p className="text-xs text-neutral-600">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1 hover:bg-red-100 hover:bg-opacity-20 rounded transition-colors"
          >
            <X size={20} className="text-red-200" weight="bold" />
          </button>
        </div>
      )}
    </div>
  );
}
