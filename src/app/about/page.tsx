import AboutSPE from "@/src/components/about/about-spe";
import Committee from "@/src/components/about/committee";
import HeroAbout from "@/src/components/about/hero";

const AboutPage = () => {
  return (
    <section>
      <HeroAbout />
      <AboutSPE />
      <Committee />
    </section>
  )
}

export default AboutPage;