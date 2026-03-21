'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import Container from '@/src/components/ui/container';
import Image from 'next/image';

export default function RegistrationSuccessPage() {
  const router = useRouter();

  const handleBackToLanding = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image src="/regist-background.webp" alt="Registration Background" fill className="object-cover object-center" />

      <Container className="relative z-10 flex h-screen flex-col items-center justify-center">
        <section className="mx-auto h-fit space-y-4 items-center justify-center w-full max-w-xl rounded-3xl border border-primary-700 bg-neutral-100 py-5 px-3 shadow-2xl md:py-8 md:px-6">
          <h5 className="text-center text-[26px] font-bold text-tertiary-900">Registration Successful!</h5>
          <p className="mx-auto mt-4 w-full text-center text-sm leading-relaxed text-neutral-1000">
            Please allow our team to <strong>verify your payment.</strong> A confirmation email and further competition details will be sent to the <strong>Team Captain&apos;s email address</strong> shortly.
          </p>

          <div className="w-full">
            <Button
              type="button"
              variant="dark-blue"
              onClick={handleBackToLanding}
              className="w-full"
              size="fit"
            >
              Back to Landing Page
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
