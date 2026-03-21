'use client';

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { CaretRight, Check, CopySimple } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import FileUploadField from '@/src/components/registration/file-upload-field';
import { uploadRegistration } from '@/src/lib/api';
import { validateEmail, validatePhone } from '@/src/lib/validation';
import { validateRegistrationForm } from '@/src/lib/validation';

const STORAGE_KEY = 'apecx_registration_form';
const STEP_STORAGE_KEY = 'apecx_registration_step';
const FILES_STORAGE_KEY = 'apecx_registration_files';

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

export interface RegistrationFormHandle {
  goBack: () => boolean;
}

type RegistrationFormProps = object;

interface FileField {
  key: keyof FileData;
  label: string;
  accept: string;
  pdfOnly: boolean;
  helperText: string;
  linkLabel?: string;
  linkHref?: string;
}

const COMPETITIONS = ['SCML', 'POD', 'BCC', 'Petrosmart', 'PPC'] as const;
const COMPETITION_LABELS: Record<(typeof COMPETITIONS)[number], string> = {
  SCML: 'Supply Chain Management and Logistics Competition',
  POD: 'Plan of Development Competition',
  BCC: 'Business Case Competition',
  Petrosmart: 'Petrosmart Competition',
  PPC: 'Paper and Poster Competition',
};
const COMPETITION_FEE_INFO: Record<(typeof COMPETITIONS)[number], { earlyBird: string; normal: string }> = {
  SCML: { earlyBird: 'IDR 100,000 / USD 6', normal: 'IDR 150,000 / USD 9' },
  POD: { earlyBird: 'IDR 100,000 / USD 6', normal: 'IDR 150,000 / USD 9' },
  BCC: { earlyBird: 'IDR 100,000 / USD 6', normal: 'IDR 150,000 / USD 9' },
  Petrosmart: { earlyBird: 'IDR 150,000 / USD 9', normal: 'IDR 175,000 / USD 11' },
  PPC: { earlyBird: '[Amount]', normal: '[Amount]' },
};

const PAYMENT_ACCOUNT = {
  bank: 'BNI',
  number: '1868424437',
  holder: 'Frieti Josefa Purba',
};

const FILE_FIELDS: FileField[] = [
  {
    key: 'payment_proof',
    label: 'Proof of Payment',
    accept: 'image/png,image/jpeg,.jpg,.jpeg,.png,.pdf',
    pdfOnly: false,
    helperText: 'Upload PDF. Max 5 MB.',
  },
  {
    key: 'student_id',
    label: 'Student ID',
    accept: '.pdf',
    pdfOnly: true,
    helperText: 'Upload PDF. Max 5 MB.',
  },
  {
    key: 'follow_proof',
    label: 'Proof of Following @apecx2026',
    accept: '.pdf',
    pdfOnly: true,
    helperText: 'Upload PDF. Max 5 MB.',
  },
  {
    key: 'twibbon_proof',
    label: 'Proof of Uploading Twibbon',
    accept: '.pdf',
    pdfOnly: true,
    helperText: 'Upload PDF. Max 5 MB.',
    linkLabel: 'Twibbon Link',
    linkHref: '#',
  },
  {
    key: 'story_proof',
    label: 'Proof of Uploading Instagram Story',
    accept: '.pdf',
    pdfOnly: true,
    helperText: 'Upload PDF. Max 5 MB.',
  },
  {
    key: 'whatsapp_proof',
    label: 'Proof of sharing Instagram post to 3 Whatsapp Group',
    accept: '.pdf',
    pdfOnly: true,
    helperText: 'Upload PDF. Max 5 MB.',
  },
];

const STEPS = [
  'Team Identity & Captain',
  'Team Members',
  'Document Upload',
] as const;

const PREVIEW_SUCCESS_MODAL = true;

const inputClassName =
  'w-full rounded-lg border border-neutral-300 bg-white px-3 py-[10px] text-xs text-neutral-1000 placeholder:text-neutral-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30';

const sectionClassName =
  'rounded-lg border border-neutral-500 bg-neutral-100 px-3 py-4';

const RegistrationForm = forwardRef<RegistrationFormHandle, RegistrationFormProps>(function RegistrationForm({ }, ref) {
  const router = useRouter();
  const defaultFormData: FormData = {
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
  };

  const defaultFiles: FileData = {
    payment_proof: null,
    student_id: null,
    follow_proof: null,
    twibbon_proof: null,
    story_proof: null,
    whatsapp_proof: null,
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [files, setFiles] = useState<FileData>(defaultFiles);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [copiedPayment, setCopiedPayment] = useState(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }
    };
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const savedStep = localStorage.getItem(STEP_STORAGE_KEY);
    const savedFileNames = localStorage.getItem(FILES_STORAGE_KEY);

    if (savedFormData) {
      try {
        setFormData(JSON.parse(savedFormData));
      } catch (e) {
        console.error('Failed to load form data from localStorage', e);
      }
    }

    if (savedStep) {
      try {
        setCurrentStep(parseInt(savedStep, 10));
      } catch (e) {
        console.error('Failed to load step from localStorage', e);
      }
    }

    if (savedFileNames) {
      try {
        const fileData = JSON.parse(savedFileNames);
        setFiles(fileData);
      } catch (e) {
        console.error('Failed to load file metadata from localStorage', e);
      }
    }

    setIsHydrated(true);
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData, isHydrated]);

  // Save current step to localStorage whenever it changes
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(STEP_STORAGE_KEY, currentStep.toString());
  }, [currentStep, isHydrated]);

  // Save file metadata to localStorage (for UI state only, not actual file data)
  useEffect(() => {
    if (!isHydrated) return;
    const fileMetadata: Record<string, { name: string; size: number } | null> = {};
    (Object.entries(files) as [keyof FileData, File | null][]).forEach(([key, file]) => {
      if (file) {
        fileMetadata[key] = { name: file.name, size: file.size };
      } else {
        fileMetadata[key] = null;
      }
    });
    localStorage.setItem(FILES_STORAGE_KEY, JSON.stringify(fileMetadata));
  }, [files, isHydrated]);

  const requiredMembers = formData.competition === 'POD' ? 4 : 3;
  const requiredMemberIndices = formData.competition === 'POD' ? [1, 2, 3] : [1, 2];
  const optionalMemberIndices = formData.competition === 'POD' ? [4] : [];

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

      // Preview mode: skip API fetch and force success modal.
      const result = PREVIEW_SUCCESS_MODAL
        ? { success: true as const }
        : await uploadRegistration(formData, files);

      if (result.success) {
        // Clear localStorage on successful submission
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STEP_STORAGE_KEY);
        localStorage.removeItem(FILES_STORAGE_KEY);
        // Navigate to success page
        router.push('/registration/success');
      } else {
        setError(result.error || 'An error occurred while submitting the registration');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const validateStep = (step: number): string | null => {
    if (step === 0) {
      if (!formData.team_name.trim()) return 'Team name is required';
      if (!formData.institution.trim()) return 'Institution is required';
      if (!formData.competition) return 'Competition is required';
      if (!formData.captain_name.trim()) return 'Captain name is required';
      if (!validateEmail(formData.captain_email)) return 'Captain email is invalid';
      if (!validatePhone(formData.captain_phone)) {
        return 'Captain phone number is invalid (numbers only, 10-13 digits)';
      }
    }

    if (step === 1) {
      for (const memberNum of requiredMemberIndices) {
        const name = formData[`member${memberNum}_name` as keyof FormData];
        const email = formData[`member${memberNum}_email` as keyof FormData];
        const phone = formData[`member${memberNum}_phone` as keyof FormData];

        if (!name.toString().trim()) return `Member ${memberNum} name is required`;
        if (!validateEmail(email.toString())) return `Member ${memberNum} email is invalid`;
        if (!validatePhone(phone.toString())) {
          return `Member ${memberNum} phone number is invalid (numbers only, 10-13 digits)`;
        }
      }

      for (const memberNum of optionalMemberIndices) {
        const name = formData[`member${memberNum}_name` as keyof FormData].toString().trim();
        const email = formData[`member${memberNum}_email` as keyof FormData].toString().trim();
        const phone = formData[`member${memberNum}_phone` as keyof FormData].toString().trim();

        const hasAnyInput = name || email || phone;
        if (!hasAnyInput) continue;

        if (!name) return `Member ${memberNum} name is required`;
        if (!validateEmail(email)) return `Member ${memberNum} email is invalid`;
        if (!validatePhone(phone)) {
          return `Member ${memberNum} phone number is invalid (numbers only, 10-13 digits)`;
        }
      }
    }

    return null;
  };

  const handleNext = () => {
    const validationError = validateStep(currentStep);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  };

  const handleBack = () => {
    setError(null);
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleCopyPayment = async () => {
    const accountNumberOnly = PAYMENT_ACCOUNT.number.replace(/\D/g, '');
    try {
      await navigator.clipboard.writeText(accountNumberOnly);
      setCopiedPayment(true);

      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }

      copiedTimeoutRef.current = setTimeout(() => {
        setCopiedPayment(false);
      }, 2000);
    } catch {
      // Silently ignore clipboard errors in unsupported browsers.
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      goBack: () => {
        if (currentStep === 0) {
          return false;
        }

        handleBack();
        return true;
      },
    }),
    [currentStep],
  );

  const renderMemberFields = (memberNum: number, optional = false) => (
    <div
      key={memberNum}
      className="space-y-4 rounded-lg border border-neutral-300 bg-white p-4"
    >
      <h5 className="text-xs border-b border-neutral-300 pb-2 font-bold text-neutral-1000">
        Member {memberNum}&apos;s Biodata {optional ? <span className="font-medium text-neutral-700">(Optional)</span> : null}
      </h5>

      <div className="space-y-2">
        <label className="block text-xs font-semibold text-neutral-1000">
          Full Name{!optional && <span className="text-red-200">*</span>}
        </label>
        <input
          type="text"
          name={`member${memberNum}_name`}
          value={formData[`member${memberNum}_name` as keyof FormData]}
          onChange={handleInputChange}
          placeholder="Full Name"
          className={inputClassName}
          required={!optional}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-neutral-1000">
            Email{!optional && <span className="text-red-200">*</span>}
          </label>
          <input
            type="email"
            name={`member${memberNum}_email`}
            value={formData[`member${memberNum}_email` as keyof FormData]}
            onChange={handleInputChange}
            placeholder="member@email.com"
            className={inputClassName}
            required={!optional}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-neutral-1000">
            Phone Number{!optional && <span className="text-red-200">*</span>}
          </label>
          <input
            type="tel"
            name={`member${memberNum}_phone`}
            value={formData[`member${memberNum}_phone` as keyof FormData]}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className={inputClassName}
            required={!optional}
          />
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    if (currentStep === 0) {
      return (
        <>
          <h5 className="text-center font-bold text-[26px] text-tertiary-800">Team Identity & Captain</h5>
          <div className={sectionClassName}>
            <p className="border-b border-neutral-300 pb-2 text-xs font-bold text-neutral-1000">Team Identity</p>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-neutral-1000">
                  Name<span className="text-red-200">*</span>
                </label>
                <input
                  type="text"
                  name="team_name"
                  value={formData.team_name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className={inputClassName}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-neutral-1000">
                  Institution<span className="text-red-200">*</span>
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  placeholder="Institution"
                  className={inputClassName}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-neutral-1000">
                  Competition<span className="text-red-200">*</span>
                </label>
                <select
                  name="competition"
                  value={formData.competition}
                  onChange={handleCompetitionChange}
                  className={inputClassName}
                  required
                >
                  <option value="">Competition Name</option>
                  {COMPETITIONS.map((comp) => (
                    <option key={comp} value={comp}>
                      {COMPETITION_LABELS[comp]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={sectionClassName}>
            <h5 className="border-b border-neutral-300 pb-2 text-xs font-bold text-neutral-1000">Captain&apos;s Biodata</h5>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-neutral-1000">
                  Full Name<span className="text-red-200">*</span>
                </label>
                <input
                  type="text"
                  name="captain_name"
                  value={formData.captain_name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={inputClassName}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-neutral-1000">
                  Email<span className="text-red-200">*</span>
                </label>
                <input
                  type="email"
                  name="captain_email"
                  value={formData.captain_email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={inputClassName}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-neutral-1000">
                  Phone Number<span className="text-red-200">*</span>
                </label>
                <input
                  type="tel"
                  name="captain_phone"
                  value={formData.captain_phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className={inputClassName}
                  required
                />
              </div>
            </div>
          </div>
        </>
      );
    }

    if (currentStep === 1) {
      return (
        <>
          <h2 className="text-center font-bold text-tertiary-800">Team Members</h2>


          <div className="mt-4 space-y-4">
            {requiredMemberIndices.map(memberNum => renderMemberFields(memberNum))}
            {optionalMemberIndices.map(memberNum => renderMemberFields(memberNum, true))}
          </div>
        </>
      );
    }

    return (
      <>
        <h5 className="text-center text-[26px] font-bold text-tertiary-800">Document Upload</h5>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={sectionClassName}>
            <h5 className="border-b border-neutral-300 pb-2 text-xs font-bold text-neutral-1000">Competition&apos;s Fee</h5>
            <p className="mt-3 text-xs text-neutral-800">
              The registration fee for {formData.competition ? COMPETITION_LABELS[formData.competition as keyof typeof COMPETITION_LABELS] : 'Competition Name'} is as follows:
            </p>
            <ul className="mt-1 list-disc pl-5 text-xs text-neutral-900">
              <li>Early Bird Rate: {formData.competition ? COMPETITION_FEE_INFO[formData.competition as keyof typeof COMPETITION_FEE_INFO].earlyBird : '[Amount]'} per team</li>
              <li>Normal Rate: {formData.competition ? COMPETITION_FEE_INFO[formData.competition as keyof typeof COMPETITION_FEE_INFO].normal : '[Amount]'} per team</li>
            </ul>
          </div>

          <div className={sectionClassName}>
            <h5 className="border-b border-neutral-300 pb-2 text-xs font-bold text-neutral-1000">Payment Details</h5>
            <p className="mt-3 text-xs text-neutral-800">Please transfer the exact amount</p>
            <div className="mt-2 flex items-center justify-between gap-3 rounded-sm bg-secondary-200/70 px-3 py-2">
              <p className="text-xs font-medium text-neutral-1000">
                {PAYMENT_ACCOUNT.bank} - {PAYMENT_ACCOUNT.number}
                <br />
                {PAYMENT_ACCOUNT.holder}
              </p>
              <button
                type="button"
                onClick={handleCopyPayment}
                className="rounded p-1 text-neutral-1000 hover:bg-neutral-200 text-xs"
                title={copiedPayment ? 'Copied' : 'Copy account number'}
              >
                {copiedPayment ? (
                  <Check size={20} weight="bold" className="text-green-200" />
                ) : (
                  <CopySimple size={20} weight="bold" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={sectionClassName}>
          <div className="mt-2 grid grid-cols-1 gap-4">
            {FILE_FIELDS.map(field => (
              <FileUploadField
                key={field.key}
                label={field.label}
                accept={field.accept}
                onChange={(file) => handleFileChange(field.key as keyof FileData, file)}
                file={files[field.key as keyof FileData]}
                pdfOnly={field.pdfOnly}
                helperText={field.helperText}
                linkLabel={field.linkLabel}
                linkHref={field.linkHref}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl rounded-2xl border border-priamry-700 bg-neutral-100 p-5 shadow-xl md:p-8">
      <div className="mb-8 flex items-center justify-center gap-2 text-xs text-neutral-800 md:gap-3 md:text-sm">
        {STEPS.map((label, index) => {
          const isActive = currentStep === index;
          const isCompleted = index < currentStep;

          return (
            <React.Fragment key={label}>
              <div className="flex items-center gap-2">
                <div
                  className={`flex size-7 items-center justify-center rounded-lg border text-xs font-bold md:size-8 ${isActive || isCompleted
                    ? 'border-primary-700 bg-primary-700 text-white'
                    : 'border-primary-500 bg-white text-neutral-1000'
                    }`}
                >
                  {index + 1}
                </div>
                <span className={`hidden md:inline ${isActive ? 'font-semibold text-neutral-1000' : 'text-neutral-800'}`}>
                  {label}
                </span>
              </div>

              {index < STEPS.length - 1 && (
                <CaretRight size={16} className="text-neutral-700" weight="bold" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-5 rounded-lg border border-red-100 bg-red-100/20 p-3">
          <p className="text-red-200 text-xs font-semibold">{error}</p>
        </div>
      )}

      <div className="space-y-5">
        {renderStepContent()}
      </div>

      <div className="mt-7 flex w-full">
        {currentStep < STEPS.length - 1 ? (
          <Button
            type="button"
            variant="dark-blue"
            size="fit"
            onClick={handleNext}
            className="w-full px-10"
          >
            Next Step
          </Button>
        ) : (
          <Button
            type="submit"
            variant="dark-blue"
            size="fit"
            disabled={loading || !formData.competition}
            className="w-full px-8 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Submitting Registration...' : 'Complete Registration'}
          </Button>
        )}
      </div>
    </form>
  );
});

export default RegistrationForm;
