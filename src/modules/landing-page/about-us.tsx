import { Button } from '@/src/components/ui/button';
import Container from '@/src/components/ui/container';

const AboutUs = () => {
  return (
    <section className="relative items-center justify-center">
      <Container className="relative bg-primary-800 bg-[radial-gradient(79.61%_44.79%_at_50.9%_0%,rgba(43,8,48,0)_0%,rgba(43,8,48,0.7)_100%)]">
        <div className="grid grid-cols-1 lg:grid-cols-[506px_1fr] gap-3 md:gap-8 lg:gap-15 my-18 md:my-30 w-full items-start">
          <div>
            <h2
              className="!md:text-[32px] font-bold leading-9.75 md:leading-14.25"
              style={{
                background:
                'linear-gradient(90deg, var(--Colors-Neutral-100, #FFF) 0%, var(--Colors-Tertiary-200, #7ECCFF) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Engineering Solutions for a Changing World.
            </h2>
          </div>
          <div className="flex flex-col gap-11 md:gap-5">
            <p className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium">
              APECX is the flagship annual event hosted by the SPE UGM Student
              Chapter. For over 15 years, it has been a prestigious hub where
              students, academics, and industry experts meet to solve the
              world&apos;s toughest energy challenges.
            </p>
            <Button variant="white" size="fit" className="text-sm lg:self-start md:self-center self-end">
              Get To Know APECX 2026
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
