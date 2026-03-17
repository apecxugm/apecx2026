import AboutUs from "../modules/landing-page/about-us";
import Gallery from "../modules/landing-page/gallery";
import Hero from "../modules/landing-page/hero";
import Theme from "../modules/landing-page/theme";
import Test from "../components/ui/test";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Theme />
      <Gallery />
    </>
  );
}
