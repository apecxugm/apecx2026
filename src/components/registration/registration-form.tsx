'use client';

import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import FormSection from '@/src/components/registration/form-section';
import MemberFields from '@/src/components/registration/member-fields';
import FileUploadField from '@/src/components/registration/file-upload-field';
import { uploadRegistration } from '@/src/lib/api';
import { validateRegistrationForm } from '@/src/lib/validation';

export interface FormData {
  team_name: string;
  institution: string;
  competition: string;
  captain_name: string;
  captain_email: string;
  captain_phone: string;
  member1_name: string;
  member1_email: string;
  member1_phone: string;
  member2_name: string;
  member2_email: string;
  member2_phone: string;
  member3_name: string;
  member3_email: string;
  member3_phone: string;
  member4_name: string;
  member4_email: string;
  member4_phone: string;
}

export interface FileData {
  payment_proof: File | null;
  student_id: File | null;
  follow_proof: File | null;
  twibbon_proof: File | null;
  story_proof: File | null;
  whatsapp_proof: File | null;
}

const COMPETITIONS = ['SCML', 'POD', 'BCC', 'Petrosmart', 'PPC'];
const FILE_FIELDS = [
  { key: 'payment_proof', label: 'Payment Proof', accept: 'image/png,image/jpeg,.jpg,.jpeg,.png', pdfOnly: false },
  { key: 'student_id', label: 'Student ID (ID Card)', accept: '.pdf', pdfOnly: true },
  { key: 'follow_proof', label: 'Follow Proof', accept: '.pdf', pdfOnly: true },
  { key: 'twibbon_proof', label: 'Twibbon Proof', accept: '.pdf', pdfOnly: true },
  { key: 'story_proof', label: 'Story Proof', accept: '.pdf', pdfOnly: true },
  { key: 'whatsapp_proof', label: 'WhatsApp Join Proof', accept: '.pdf', pdfOnly: true },
] as const;

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    team_name: '',
    institution: '',
    competition: '',
    captain_name: '',
    captain_email: '',
    captain_phone: '',
    member1_name: '',
    member1_email: '',
    member1_phone: '',
    member2_name: '',
    member2_email: '',
    member2_phone: '',
    member3_name: '',
    member3_email: '',
    member3_phone: '',
    member4_name: '',
    member4_email: '',
    member4_phone: '',
  });

  const [files, setFiles] = useState<FileData>({
    payment_proof: null,
    student_id: null,
    follow_proof: null,
    twibbon_proof: null,
    story_proof: null,
    whatsapp_proof: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const requiredMembers = formData.competition === 'POD' ? 5 : 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleFileChange = (key: keyof FileData, file: File | null) => {
    setFiles(prev => ({
      ...prev,
      [key]: file,
    }));
    setError(null);
  };

  const handleCompetitionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      competition: value,
      // Clear extra member data if switching from POD to non-POD
      ...(value !== 'POD' && {
        member3_name: '',
        member3_email: '',
        member3_phone: '',
        member4_name: '',
        member4_email: '',
        member4_phone: '',
      }),
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Validate on frontend first
      const validationError = validateRegistrationForm(formData, requiredMembers);
      if (validationError) {
        setError(validationError);
        setLoading(false);
        return;
      }

      // Check if all required files are selected
      const requiredFiles: (keyof FileData)[] = [
        'payment_proof',
        'student_id',
        'follow_proof',
        'twibbon_proof',
        'story_proof',
        'whatsapp_proof',
      ];

      for (const file of requiredFiles) {
        if (!files[file]) {
          setError(`File ${FILE_FIELDS.find(f => f.key === file)?.label} is required`);
          setLoading(false);
          return;
        }
      }

      // Call API
      const result = await uploadRegistration(formData, files);

      if (result.success) {
        setSuccess(true);
        // Reset form
        setFormData({
          team_name: '',
          institution: '',
          competition: '',
          captain_name: '',
          captain_email: '',
          captain_phone: '',
          member1_name: '',
          member1_email: '',
          member1_phone: '',
          member2_name: '',
          member2_email: '',
          member2_phone: '',
          member3_name: '',
          member3_email: '',
          member3_phone: '',
          member4_name: '',
          member4_email: '',
          member4_phone: '',
        });
        setFiles({
          payment_proof: null,
          student_id: null,
          follow_proof: null,
          twibbon_proof: null,
          story_proof: null,
          whatsapp_proof: null,
        });

        // Show success message for 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(result.error || 'An error occurred while submitting the registration');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Success Message */}
      {success && (
        <div className="p-4 bg-quarternary-100 border border-quarternary-600 rounded-lg">
          <p className="text-quarternary-1000 font-semibold">
            ✓ Registration successful! Your data has been saved.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-100 bg-opacity-20 border border-red-100 rounded-lg">
          <p className="text-red-200 font-semibold">{error}</p>
        </div>
      )}

      {/* Team Information Section */}
      <FormSection title="Team Information" description="Basic team information">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-1000 mb-2">
              Team Name<span className="text-red-200">*</span>
            </label>
            <input
              type="text"
              name="team_name"
              value={formData.team_name}
              onChange={handleInputChange}
              placeholder="Enter your team name"
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-1000 mb-2">
              Institution/University<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              placeholder="Enter your institution name"
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-1000 mb-2">
              Select Competition<span className="text-red-200">*</span>
            </label>
            <select
              name="competition"
              value={formData.competition}
              onChange={handleCompetitionChange}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            >
              <option value="">-- Select Competition --</option>
              {COMPETITIONS.map(comp => (
                <option key={comp} value={comp}>
                  {comp}
                </option>
              ))}
            </select>
            {formData.competition && (
              <p className="mt-2 text-sm text-neutral-700">
                {formData.competition === 'POD'
                  ? 'This team requires 1 captain + 3 members minimum (up to 4 members allowed)'
                  : 'This team requires 1 captain + 2 members (total 3 people)'}
              </p>
            )}
          </div>
        </div>
      </FormSection>

      {/* Captain Information Section */}
      <FormSection
        title="Captain Information"
        description="Captain details who will represent the team"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-1000 mb-2">
              Full Name<span className="text-red-200">*</span>
            </label>
            <input
              type="text"
              name="captain_name"
              value={formData.captain_name}
              onChange={handleInputChange}
              placeholder="Enter captain full name"
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                Email<span className="text-red-200">*</span>
              </label>
              <input
                type="email"
                name="captain_email"
                value={formData.captain_email}
                onChange={handleInputChange}
                placeholder="kapten@email.com"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-1000 mb-2">
                Phone Number<span className="text-red-200">*</span>
              </label>
              <input
                type="tel"
                name="captain_phone"
                value={formData.captain_phone}
                onChange={handleInputChange}
                placeholder="08123456789"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>
      </FormSection>

      {/* Members Section */}
      {formData.competition && (
        <MemberFields
          formData={formData}
          handleInputChange={handleInputChange}
          requiredMembers={requiredMembers}
        />
      )}

      {/* File Upload Section */}
      <FormSection
        title="Upload Documents"
        description="Upload all required documents (max 5MB per file)"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FILE_FIELDS.map(field => (
            <FileUploadField
              key={field.key}
              label={field.label}
              accept={field.accept}
              onChange={(file) => handleFileChange(field.key as keyof FileData, file)}
              file={files[field.key as keyof FileData]}
              pdfOnly={field.pdfOnly}
            />
          ))}
        </div>
      </FormSection>

      {/* Submit Button */}
      <div className="flex flex-col gap-4 pt-6">
        <Button
          type="submit"
          variant="default"
          disabled={loading || !formData.competition}
          className="w-full md:w-auto md:self-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting Registration...' : 'Register Now'}
        </Button>
        <p className="text-center text-sm text-neutral-600">
          By registering, you agree to the terms and conditions of APECX 2026
        </p>
      </div>
    </form>
  );
}
