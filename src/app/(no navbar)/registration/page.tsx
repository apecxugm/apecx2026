'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import Container from '@/src/components/ui/container';
import RegistrationForm, { RegistrationFormHandle } from '@/src/components/registration/registration-form';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import ComingSoon from '@/src/components/coming-soon';
import Navbar from '@/src/components/ui/navbar';
import Footer from '@/src/components/ui/footer';

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
    <section className='relative h-screen overflow-hidden'>
      <Image src="/regist-background.webp" alt="Registration Background" fill className="object-cover object-center absolute z-0 bg-primary-900" />
      <div className="relative z-20 py-8 md:py-12 w-full flex items-center justify-center h-full">
        <Navbar />
        <ComingSoon />
      </div>
    </section>
    // <div className="relative w-screen items-center justify-center flex h-full max-h-fit min-h-screen bg-primary-900">
    //   <Image src="/regist-background.webp" alt="Registration Background" fill className="object-cover object-center bg-primary-900" />

    //   <main className="relative z-20 min-h-screen py-8 md:py-12 w-full flex items-center justify-center">
    //     <Container className="mx-auto h-full">
    //       <div className="md:absolute flex w-full justify-start pb-4 md:pb-8">
    //         <Button
    //           size="fit"
    //           variant="light"
    //           type="button"
    //           onClick={handleBack}
    //         >
    //           <ArrowLeft size={18} weight="bold" />
    //           Back
    //         </Button>
    //       </div>
    //       <div>
    //         <RegistrationForm ref={formRef} />
    //       </div>
    //     </Container>
    //   </main>
    // </div>
  );
}
