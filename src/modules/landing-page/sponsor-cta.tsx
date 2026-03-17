'use client';
import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/ui/container";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const SponsorCta = () => {
  return (
    <section className="relative items-center justify-center bg-neutral-100">
      <Container className="flex flex-col md:flex-row gap-6 md:gap-10 py-18 md:py-30">
        <div className=" justify-center items-center w-full gap-5">
          <Image
            src="/dummy.webp"
            alt="Sponsor APECX 2026"
            width={498}
            height={337}
            className="object-contain aspect-[498/337] h-full w-full"
          />
        </div>  
        <div className="flex flex-col gap-3 md:gap-2">
          <div className="w-full md:w-[427px]"> 
            <h2 className=" font-bold text-black"> 
              Shape the Future of Energy With Us.
            </h2>
          </div>
          <div>
            <p className="text-black text-left text-base font-normal md:font-medium">
              We are looking for mission-driven partners and media outlets to help bring APECX 2026 to life. Discover our partnership and sponsorship opportunities.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end gap-[10px] mt-6 ml-auto md:ml-0 lg:self-start self-end">
            <Link href="https://wa.me/6281390422049">
              <Button variant="dark-blue" size="fit" className="!text-sm">
                <WhatsappLogoIcon />
                <span className="font-bold">Sponsorship</span> (Arib)
              </Button>
            </Link>
            <Link href="https://wa.me/6281377579088">
              <Button variant="dark-blue" size="fit" className="!text-sm">
                <WhatsappLogoIcon />
                <span className="font-bold">Media Partners</span> (Revina)
              </Button>
            </Link>
          </div>
        </div>  
        
      </Container>
    </section>
  );
};

export default SponsorCta;