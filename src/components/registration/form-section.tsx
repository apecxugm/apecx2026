'use client';

import React from 'react';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg w-full max-w-1000 p-6 md:p-8 space-y-6">
      <div className="space-y-1">
        <h3 className="font-bold text-primary-900">{title}</h3>
        {description && (
          <p className="text-neutral-600 text-sm">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
