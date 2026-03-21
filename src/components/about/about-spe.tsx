import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/ui/container";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const AboutSPE = () => {
  return (
    <section id="sponsor-cta" className="relative items-center justify-center bg-neutral-100">
      <Container className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 py-18 md:py-30">
        <div className="flex flex-col gap-3 md:gap-2">
          <div className="w-full">
            <h2 className=" font-bold text-black">
              Your Connection to the Global Energy Industry.
            </h2>
          </div>
          <div>
            <p className="text-black text-left text-base font-normal md:font-medium">
              As a branch of the Society of Petroleum Engineers, we connect the university to a worldwide network of upstream oil and gas professionals. We provide the platform, the expertise, and the industry-standard training needed to excel in the global energy landscape.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end gap-[10px] mt-6 ml-auto md:ml-0 lg:self-start self-end">
            <Link href="https://www.instagram.com/speugmsc">
              <Button variant="dark-blue" size="fit" className="!text-sm">
                <InstagramLogoIcon size={20}/> SPE UGM Student Chapter
              </Button>
            </Link>
          </div>
        </div>
        <div className=" justify-center items-center w-full max-w-150 gap-5">
          <Image
            src="/logo/spe.svg"
            alt="Sponsor APECX 2026"
            width={600}
            height={293}
            className="object-fill aspect-[600/293] bg-neutral-200 h-full md:w-150 w-full md:max-w-150"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutSPE;