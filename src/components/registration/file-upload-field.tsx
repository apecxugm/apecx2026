'use client';

import React, { useRef, useState } from 'react';
import { ArrowSquareOut, CopySimple, UploadSimple, X } from '@phosphor-icons/react';

interface FileUploadFieldProps {
  label: string;
  accept: string;
  onChange: (file: File | null) => void;
  file: File | null;
  pdfOnly?: boolean;
  helperText?: string;
  linkLabel?: string;
  linkHref?: string;
}

export default function FileUploadField({
  label,
  accept,
  onChange,
  file,
  pdfOnly = false,
  helperText,
  linkLabel,
  linkHref,
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
    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert(`File is too large. Maximum 10MB. This file is ${(file.size / 1024 / 1024).toFixed(2)}MB`);
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
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="block text-xs font-semibold text-neutral-1000">
          {label}<span className="text-red-200">*</span>
        </label>
        {linkLabel && linkHref && (
          <a
            href={linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-neutral-800 underline hover:text-tertiary-800"
          >
            {linkLabel}
            <ArrowSquareOut size={14} weight="bold" />
          </a>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />

      {!file ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
          className={`relative flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${dragActive
            ? 'border-primary-500 bg-primary-100/20'
            : 'border-neutral-300 bg-white hover:border-primary-400'
            }`}
        >
          <UploadSimple size={20} className="text-neutral-900" weight="bold" />
          <p className="text-xs text-neutral-700">{label}</p>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-quarternary-600 bg-quarternary-100/40 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-neutral-1000">
              {file.name}
            </p>
            <p className="text-xs text-neutral-600">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClick}
              className="rounded p-1 text-neutral-800 transition-colors hover:bg-neutral-200"
              title="Replace file"
            >
              <CopySimple size={18} weight="bold" />
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="rounded p-1 text-red-200 transition-colors hover:bg-red-100/20"
              title="Remove file"
            >
              <X size={18} weight="bold" />
            </button>
          </div>
        </div>
      )}

      <p className="mt-2 text-xs text-neutral-800">
        {helperText || (pdfOnly ? 'Upload PDF. Max 5 MB.' : 'Upload image file. Max 5 MB.')}
      </p>
    </div>
  );
}
