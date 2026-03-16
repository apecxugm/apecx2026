import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/ui/container";
import HeroBackground from "@/src/components/hero/hero-background";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen max-h-[850px] min-h-[750px]">
      <HeroBackground />
      <Container className="h-full bg-primary-800 flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4 z-10 max-w-xl">
          <h1 className="black-current-transition text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-tertiary-400 to-tertiary-800">
            Where Every Field Powers the Future
          </h1>
          <p className="text-base md:text-[22px] mb-8">Join UGM’s top energy competition. Collaborate and lead the next big shift in the global energy industry.</p>
          <div className="flex flex-row gap-6">
            <Button variant="default">Register Now!</Button>
            <Button variant="light">Explore APECX</Button>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;