import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/ui/container";
import HeroBackground from "@/src/components/hero/hero-background";
import Image from "next/image";

const PAST_SPONSORS = [
  {
    name: "Dummy 1",
    logo: "/dummy.webp",
  },
  {
    name: "Dummy 2",
    logo: "/dummy.webp",
  },
  {
    name: "Dummy 3",
    logo: "/dummy.webp",
  },
]

const Hero = () => {
  return (
    <section className="relative w-screen items-center justify-center flex h-screen max-h-[850px] min-h-[750px]">
      <HeroBackground />
      <Container className="h-full bg-primary-800 flex flex-col items-center justify-center mx-0">
        <div className=" justify-between gap-15 max-h-[450px] z-10 flex flex-col items-center">
          <div className="text-center flex flex-col items-center z-10 gap-10 max-w-xs md:max-w-xl">
            <div className="space-y-4">
              <h1 className="black-current-transition text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-tertiary-400 to-tertiary-800">
                Where Every Field Powers the Future
              </h1>
              <p className="text-base md:text-[22px]">Join UGM’s top energy competition. Collaborate and lead the next big shift in the global energy industry.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-[10px] justify-center w-full px-3 md:gap-6">
              <Button variant="default">Register Now!</Button>
              <Button variant="disabled">Invitation Letter</Button>
            </div>
          </div>

          <div className="z-10 text-center flex flex-col gap-5">
            <p>Previous Partner</p>
            <div className="flex flex-wrap justify-center gap-6">
              {PAST_SPONSORS.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image src={sponsor.logo} alt={sponsor.name} height={64} width={0} className="h-16 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;