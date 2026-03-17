import AboutUs from "../modules/landing-page/about-us";
import Gallery from "../modules/landing-page/gallery";
import Hero from "../modules/landing-page/hero";
import Events from "../modules/landing-page/events";

import SponsorCta from "../modules/landing-page/sponsor-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Gallery />
      <Events />
      <SponsorCta />
    </>
  );
}
