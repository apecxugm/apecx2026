import Container from '@/src/components/ui/container';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { InstagramLogoIcon, LinkedinLogoIcon, TiktokLogoIcon } from '@phosphor-icons/react/ssr';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-neutral-100 py-16 md:py-20">
      <Container className="bg-transparent flex flex-col gap-8">
        {/* Main Footer Content */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 w-full justify-items-stretch">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Image src="/logo/logo-light.svg" alt="apecx" width={157} height={146} className='w-25 md:w-32'/>
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
                  <Link href="/about" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    About SPE UGM
                  </Link>
                </li>
                <li>
                  <Link href="/#theme" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Theme
                  </Link>
                </li>
                <li>
                  <Link href="/#events" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/#events" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Competitions
                  </Link>
                </li>
                <li>
                  <Link href="/#events" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Events
                  </Link>
                </li>
                {/* <li>
                  <Link href="#game" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Games
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Events */}
            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium" style={{ fontWeight: 700 }}>Events</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/event/social-event" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Social Event
                  </Link>
                </li>
                <li>
                  <Link href="/event/company-visit" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Company Visit
                  </Link>
                </li>
                <li>
                  <Link href="/event/talkshow" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Talkshow
                  </Link>
                </li>
                <li>
                  <Link href="/event/exhibition" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Exhibition
                  </Link>
                </li>
                <li>
                  <Link href="/event/awarding-night" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Awarding Night
                  </Link>
                </li>
              </ul>
            </div>

            {/* Competitions */}
            <div className="flex flex-col gap-4 min-w-[145px] md:min-w-[210px]">
              <h5 className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium" style={{ fontWeight: 700 }}>Competitions</h5>
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/competition/bcc" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Business Case Competition
                    </Link>
                  </li>
                  <li>
                    <Link href="/competition/ppc" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Paper and Poster
                    </Link>
                  </li>
                  <li>
                    <Link href="/competition/pod" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Plan of Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/competition/scml" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Supply Chain Management and Logistic
                    </Link>
                  </li>
                  <li>
                    <Link href="/competition/petrosmart" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                      Petrosmart
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-100 text-justify text-sm md:text-[15px] lg:text-base font-normal md:font-medium" style={{ fontWeight: 700 }}>Contact Us</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="https://wa.me/62895639314478" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    General
                  </Link>
                </li>
                <li>
                  <Link href="/#sponsor-cta" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Sponsorship
                  </Link>
                </li>
                <li>
                  <Link href="/#sponsor-cta" className="text-secondary-100 text-sm md:text-[15px] lg:text-base cursor-pointer">
                    Media Partner
                  </Link>
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
            &copy; {currentYear} Copyright - Universitas Gadjah Mada SPE Student Chapter. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/apecx2026/">
              <Button variant="light" size="fit" className="text-xs md:text-sm p-[10px]">
                <InstagramLogoIcon size={24} />
              </Button>
            </Link>
            <Link href="https://www.tiktok.com/@apecx2026">
              <Button variant="light" size="fit" className="text-xs md:text-sm p-[10px]">
                <TiktokLogoIcon size={24} />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/apecx-speugm-8b0437362/">
              <Button variant="light" size="fit" className="text-xs md:text-sm p-[10px]">
                <LinkedinLogoIcon size={24} />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;