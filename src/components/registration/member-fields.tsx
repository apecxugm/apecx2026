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
  // requiredMembers includes captain, so subtract 1 to get member count
  // For POD: requiredMembers=5 → members 1,2,3,4 (member4 optional)
  // For others: requiredMembers=3 → members 1,2 (required)
  const totalMembers = requiredMembers - 1;
  const members = [1, 2, 3, 4].slice(0, totalMembers);
  const isPOD = formData.competition === 'POD';

  return (
    <FormSection
      title="Team Members Information"
      description={
        isPOD
          ? `Enter information for at least 3 members (you can add up to 4)`
          : `Enter information for ${totalMembers} team members`
      }
    >
      <div className="space-y-8">
        {members.map((memberNum) => {
          const isOptional = isPOD && memberNum === 4;
          return (
            <div
              key={memberNum}
              className="pb-6 border-b border-neutral-200 last:border-b-0 last:pb-0"
            >
              <h3 className="text-lg font-semibold text-primary-700 mb-4">
                Member {memberNum} {isOptional && <span className="text-sm text-neutral-600">(Optional)</span>}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                    Full Name {!isOptional && <span>*</span>}
                  </label>
                  <input
                    type="text"
                    name={`member${memberNum}_name`}
                    value={formData[`member${memberNum}_name` as keyof FormData]}
                    onChange={handleInputChange}
                    placeholder={`Enter full name of member ${memberNum}`}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required={!isOptional}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                      Email {!isOptional && <span>*</span>}
                    </label>
                    <input
                      type="email"
                      name={`member${memberNum}_email`}
                      value={formData[`member${memberNum}_email` as keyof FormData]}
                      onChange={handleInputChange}
                      placeholder={`anggota${memberNum}@email.com`}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required={!isOptional}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                      Phone Number {!isOptional && <span>*</span>}
                    </label>
                    <input
                      type="tel"
                      name={`member${memberNum}_phone`}
                      value={formData[`member${memberNum}_phone` as keyof FormData]}
                      onChange={handleInputChange}
                      placeholder="08123456789"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required={!isOptional}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FormSection>
  );
}
