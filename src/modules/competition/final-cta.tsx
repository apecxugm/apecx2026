import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const FinalCTA = ({ title, guidebook }: { title: string; guidebook: string }) => {
  return (
    <section className="relative items-center justify-center bg-neutral-100">
      <Container className="flex flex-col md:flex-row gap-6 md:gap-10 py-18 md:py-30">
        <div className=" justify-center items-center w-full gap-5">
          <Image
            src="/competition-cta.webp"
            alt="Sponsor APECX 2026"
            width={498}
            height={337}
            className="object-contain aspect-[498/337] h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-2">
          <div className="w-full md:w-[427px]">
            <h2 className=" font-bold text-black">
              Prove Your Potential.
            </h2>
          </div>
          <div>
            <p className="text-black text-left text-base font-normal md:font-medium">
              Solve real-world challenges, connect with industry giants, and compete for prestige in the most anticipated energy competition of the year.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end gap-[10px] mt-6 ml-auto md:ml-0 lg:self-start self-end">
            <Link href="/registration">
              <Button variant="dark-blue" size="fit" className="!text-sm">
                Register for {title}!
              </Button>
            </Link>
            <Link href={guidebook}>
              <Button variant="dark-blue" size="fit" className="!text-sm">
                Guidebook
              </Button>
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default FinalCTA;