import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/ui/container";
import HeroBackground from "@/src/components/hero/hero-background";
import Image from "next/image";
import Link from "next/link";

const PAST_SPONSORS = [
  {
    name: "Dummy 1",
    logo: "/past-sponsor/pertamina-ep.webp",
  },
  {
    name: "Dummy 2",
    logo: "/past-sponsor/pertamina.webp",
  },
  {
    name: "Dummy 3",
    logo: "/past-sponsor/pertamina-kilang.webp",
  },
  {
    name: "Dummy 1",
    logo: "/past-sponsor/exonmobil.webp",
  },
  {
    name: "Dummy 2",
    logo: "/past-sponsor/jasamarga.webp",
  },
  {
    name: "Dummy 3",
    logo: "/past-sponsor/skkmigas.webp",
  },
]

const MARQUEE_SPONSORS = [...PAST_SPONSORS, ...PAST_SPONSORS];

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
              <Link href="/registration">
                <Button variant="default">Register Now!</Button>
              </Link>
              <Link href="https://drive.google.com/file/d/14ZKwVmq-VjTvzIinqIFWJS8IiGymAdsK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="light">Invitation Letter</Button>
              </Link>
            </div>
          </div>

          <div className="z-10 text-center flex flex-col gap-5">
            <p>Previous Partner</p>
            <div className="marquee-wrapper w-full max-w-6xl overflow-hidden">
              <div className="marquee-track">
                {MARQUEE_SPONSORS.map((sponsor, index) => (
                  <div key={`${sponsor.name}-${index}`} className="flex items-center justify-center px-6">
                    <Image src={sponsor.logo} alt={sponsor.name} height={64} width={160} className="h-16 w-auto shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;