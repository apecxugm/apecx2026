'use client';

import React from 'react';
import FormSection from './form-section';
import { FormData } from './registration-form';

interface MemberFieldsProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requiredMembers: number;
}

export default function MemberFields({
  formData,
  handleInputChange,
  requiredMembers,
}: MemberFieldsProps) {
  const members = [1, 2, 3, 4].slice(0, requiredMembers - 1); // -1 because captain is already counted

  return (
    <FormSection
      title="Team Members Information"
      description={`Enter information for ${requiredMembers - 1} team members`}
    >
      <div className="space-y-8">
        {members.map((memberNum) => (
          <div
            key={memberNum}
            className="pb-6 border-b border-neutral-200 last:border-b-0 last:pb-0"
          >
            <h3 className="text-lg font-semibold text-primary-700 mb-4">
              Member {memberNum}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name={`member${memberNum}_name`}
                  value={formData[`member${memberNum}_name` as keyof FormData]}
                  onChange={handleInputChange}
                  placeholder={`Enter full name of member ${memberNum}`}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name={`member${memberNum}_email`}
                    value={formData[`member${memberNum}_email` as keyof FormData]}
                    onChange={handleInputChange}
                    placeholder={`anggota${memberNum}@email.com`}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name={`member${memberNum}_phone`}
                    value={formData[`member${memberNum}_phone` as keyof FormData]}
                    onChange={handleInputChange}
                    placeholder="08123456789"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FormSection>
  );
}
