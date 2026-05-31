'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import Container from '@/src/components/ui/container';
import RegistrationForm, { RegistrationFormHandle } from '@/src/components/registration/registration-form';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

export default function RegistrationPage() {
  const router = useRouter();
  const formRef = useRef<RegistrationFormHandle>(null);

  const handleBack = () => {
    const movedStep = formRef.current?.goBack() ?? false;
    if (!movedStep) {
      router.push('/');
    }
  };

  return (
    // <section className='relative h-screen overflow-hidden'>
    //   <Image src="/regist-background.webp" alt="Registration Background" fill className="object-cover object-center absolute z-0 bg-primary-900" />
    //   <div className="relative z-20 py-8 md:py-12 w-full flex items-center justify-center h-full">
    //     <Navbar />
    //     <ComingSoon />
    //   </div>
    // </section>
    <div className="relative w-screen items-center justify-center flex h-full max-h-fit min-h-screen bg-primary-900">
      <Image src="/regist-background.webp" alt="Registration Background" fill className="object-cover object-center bg-primary-900" />

      <main className="relative z-20 min-h-screen py-8 md:py-12 w-full flex items-center justify-center">
        <Container className="relative z-10 flex h-screen flex-col items-center justify-center">
          <section className="mx-auto h-fit space-y-4 items-center justify-center w-full max-w-xl rounded-3xl border border-primary-700 bg-neutral-100 py-5 px-3 shadow-2xl md:py-8 md:px-6">
            <h5 className="text-center text-[26px] font-bold text-tertiary-900">Registration Closed!</h5>
            <p className="mx-auto mt-4 w-full text-center text-sm leading-relaxed text-neutral-1000">
              Thank you for your interest in registering for APECX 2026! We are excited to announce that the registration period has now closed. We appreciate the overwhelming response and enthusiasm from all the teams who wanted to participate in this prestigious event. <br /> <br /> For the team that have not received a confirmation email, please allow our team to <strong>verify your payment.</strong> A confirmation email and further competition details will be sent to the <strong>Team Captain&apos;s email address</strong> at maximum of 2 x 24 hours. <br /> <br /> Please contact our <Link href="https://wa.me/62895639314478" className="text-primary-700 font-bold underline"> Contact Person
              </Link>
              {' '}if our team hasn&apos;t contacted you within the specified time or if you have any questions regarding the competition. <br /> <br /> Thank you for registering, and we look forward to seeing your team compete in APECX 2026!
            </p>

            <div className="w-full">
              <Link href="/" >
              <Button
                type="button"
                variant="dark-blue"
                className="w-full"
                size="fit"
              >
                Back to Landing Page
              </Button>
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
