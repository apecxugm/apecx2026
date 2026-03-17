import Hero from "../modules/landing-page/hero";
import AboutUs from "../modules/landing-page/about-us";
import Theme from "../modules/landing-page/theme";
import Gallery from "../modules/landing-page/gallery";
import Events from "../modules/landing-page/events";
import SponsorCta from "../modules/landing-page/sponsor-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Theme />
      <Gallery />
      <Events />
      <SponsorCta />
    </>
  );
}
