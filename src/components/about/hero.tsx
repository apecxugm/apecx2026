import Image from 'next/image';
import Container from '../ui/container';

const HeroAbout = () => {
  return (
    <section className="bg-primary-900 relative w-full h-168 md:h-125 overflow-hidden">
      <Container className="z-2 absolute inset-0 flex items-end py-10 md:py-13 justify-end flex flex-col md:grid grid-cols-2 md:gap-15 gap-3">
        <h5 className="text-transparent font-bold md:text-[46px] text-[32px] bg-clip-text bg-gradient-to-r from-neutral-100 to-primary-200">
          Annual Petroleum Exhibition and Competition 2026
        </h5>
        <p className='text-neutral-100 md:text-lg'>Originally rooted in petroleum, APECX has evolved to meet the demands of a changing world. We are building a collaborative ecosystem to spark the interdisciplinary solutions needed for a sustainable energy future, all hosted by the award-winning SPE UGM Student Chapter.</p>
      </Container>
      <Image src="/about-hero.svg" alt="About Hero Image" fill className="object-cover md:object-fill h-full w-auto" />
    </section>
  );
}

export default HeroAbout;