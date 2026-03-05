import { Button } from "@/src/components/ui/button";
import { Badge } from "lucide-react";
import Container from "@/src/components/ui/container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <Container className="h-full bg-primary-800 flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4 z-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Welcome to Our Landing Page</h1>
          <p className="text-lg md:text-2xl mb-8">Discover our amazing product and features.</p>
          <Button variant="default" size="default">Get Started</Button>
          <Button variant="light" size="fit">Learn More</Button>
          <Button variant="white" size="icon"><Badge /></Button>
          <Button variant="dark-blue">Sign Up</Button>
        </div>
        <Image
          src="/logo-background.webp"
          alt="Hero Background"
          width={80}
          height={80}
          objectFit="cover"
          className="absolute w-100 h-auto opacity-50"
        />
      </Container>
    </section>
  );
};

export default Hero;