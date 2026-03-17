import Container from '@/src/components/ui/container';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { InstagramLogoIcon, TiktokLogoIcon, XLogoIcon } from '@phosphor-icons/react/ssr';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-neutral-100 py-16 md:py-20">
      <Container className="bg-transparent flex flex-col gap-8">
        {/* Main Footer Content */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 w-full justify-items-stretch">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Image src="/logo/logo-light.svg" alt="apecx" width={157} height={146} />
            <h5 className="text-sm mdtext-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium:text-base text-secondary-100 w-full">
              APECX is the flagship annual event hosted by the SPE UGM Student Chapter. For over 15 year
            </h5>
          </div>

          {/* Links Section - 4 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-[repeat(4,1fr)] gap-x-16 gap-y-8 w-full justify-items-stretch">
            {/* General Info */}
            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium" style={{ fontWeight: 700 }}>General Info</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#about" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    About SPE UGM
                  </a>
                </li>
                <li>
                  <a href="#theme" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Theme
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#competitions" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Competitions
                  </a>
                </li>
                <li>
                  <a href="#events" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#games" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Games
                  </a>
                </li>
              </ul>
            </div>

            {/* Events */}
            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium" style={{ fontWeight: 700 }}>Events</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#blog" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Social Event 1
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Social Event 2
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Company Visit
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Talkshow
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Exhibition
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Awarding Night
                  </a>
                </li>
              </ul>
            </div>

            {/* Competitions */}
            <div className="flex flex-col gap-4 min-w-[145px] md:min-w-[210px]">
              <h5 className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium" style={{ fontWeight: 700 }}>Competitions</h5>
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#blog" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Business Case Competition
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Poster and Paper
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Reservoir Development
                    </a>
                  </li>
                  <li>
                    <a href="#support" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Supply Chain Management and Logistic
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Petro-smart
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium" style={{ fontWeight: 700 }}>Contact Us</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#home" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Participant
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Partnership
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-100"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-secondary-100 text-xs md:text-sm">
            &copy; {currentYear}Copyright - Universitas Gadjah Mada SPE Student Chapter. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="light" size="fit" className="text-xs md:text-sm p-[10px]">
              <InstagramLogoIcon size={24} />
            </Button>
            <Button variant="light" size="fit" className="text-xs md:text-sm p-[10px]">
              <TiktokLogoIcon size={24} />
            </Button>
            <Button variant="light" size="fit" className="text-xs md:text-sm p-[10px]">
              <XLogoIcon size={24} />
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;