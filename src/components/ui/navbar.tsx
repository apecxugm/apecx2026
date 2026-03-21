'use client';

import { useState, useEffect, type MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { CaretDownIcon, CaretRightIcon, ListIcon, XIcon } from '@phosphor-icons/react/dist/ssr';

const LINKS = [
  { name: 'Theme', href: '/#theme' },
  { name: 'Timeline', href: '/#timeline' },
  { name: 'Events', href: '/#events', hasDropdown: true },
  { name: 'Competitions', href: '/#competitions', hasDropdown: true },
  { name: 'Game', href: '/#game', disabled: true },
];

const COMPETITION_LINKS = [
  {
    label: 'Paper & Poster',
    href: '/competition/paper-and-poster',
    image: '/logo/paper-poster.svg',
  },
  {
    label: 'Business Case',
    href: '/competition/business-case',
    image: '/logo/business-case.svg',
  },
  {
    label: 'Petrosmart',
    href: '/competition/petrosmart',
    image: '/logo/petrosmart.svg',
  },
  {
    label: 'Plan of Development',
    href: '/competition/plan-of-development',
    image: '/logo/plan-of-development.svg',
  },
  {
    label: 'Supply Chain Management & Logistics',
    href: '/competition/supply-chain-management-logistics',
    image: '/logo/supply-chain.svg',
  },
];

const EVENTS_LINKS = [
  {
    label: 'Social Event',
    href: '/event/social-event',
    image: '/logo/social-event.svg',
  },
  {
    label: 'Company Visit',
    href: '/event/company-visit',
    image: '/logo/company-visit.svg',
  },
  {
    label: 'Talkshow',
    href: '/event/talkshow',
    image: '/logo/talkshow.svg',
  },
  {
    label: 'Exhibition',
    href: '/event/exhibition',
    image: '/logo/exhibition.svg',
  },
  {
    label: 'Awarding Night',
    href: '/event/awarding-night',
    image: '/logo/awarding-night.svg',
  },
];

type DropdownType = 'events' | 'competitions';

const scrollToHash = (href: string) => {
  if (!href.startsWith('#')) {
    return false;
  }

  const sectionId = href.slice(1);
  const target = document.getElementById(sectionId);

  if (!target) {
    return false;
  }

  const navElement = document.querySelector('nav');
  const navOffset = navElement instanceof HTMLElement ? navElement.offsetHeight + 12 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navOffset;

  window.history.replaceState(null, '', href);
  window.scrollTo({ top, behavior: 'smooth' });

  return true;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [shrinkProgress, setShrinkProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      setIsScrolled(nextScrollY > 50);
      setShrinkProgress(Math.min(nextScrollY / 120, 1));
    };

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const isDetailPage =
    pathname.startsWith('/competition/') || pathname.startsWith('/event/');
  const compactWidth = Math.min(viewportWidth || 0, 1280);
  const animatedWidth =
    viewportWidth > 0
      ? viewportWidth - (viewportWidth - compactWidth) * shrinkProgress
      : undefined;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      // Scroll to hero on home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Otherwise, Link will navigate to /
  };
  return (
    <nav
      style={{
        width: animatedWidth ? `${animatedWidth}px` : undefined,
        borderRadius: viewportWidth >= 1024 ? `${17 * shrinkProgress}px` : '0px',
      }}
      className={cn(
        'fixed top-0 left-1/2 -translate-x-1/2 z-50 mx-auto border-none shadow-none transition-[background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[width,border-radius]',

        // Logika WARNA: Putih jika di-scroll ATAU jika menu sedang terbuka
        isDetailPage
          ? isScrolled || isOpen
            ? "bg-neutral-100 text-neutral-1000"
            : "bg-transparent text-neutral-1000"
          : isScrolled || isOpen
            ? "bg-neutral-100 text-neutral-1000"
            : "bg-transparent text-white",

        // LAYOUT animasi sekarang mengikuti progress scroll agar menyusut halus
        'max-w-none',
      )}
    >
      <div
        className={cn(
          'flex flex-row items-center justify-between px-8 max-w-360 mx-auto py-4',
        )}
      >
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick}>
          <div className={cn('shrink-0 transition-all duration-300', isScrolled)}>
            <Image
              src={
                isScrolled || isOpen || isDetailPage
                  ? '/logo/dark-apecx-icon.webp'
                  : '/logo/apecx-icon.webp'
              }
              alt="APECX 2026"
              width={62}
              height={58}
              className="object-contain"
            />
          </div>
        </Link>

        {/* NAVIGATION & ACTIONS */}
        <div className="flex items-center gap-10">
          <DesktopLinks isScrolled={isScrolled} isDetailPage={isDetailPage} />

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <Link href="#events">
                <Button
                  variant="dark-blue"
                  size="fit"
                  className="!text-sm hover:bg-tertiary-1000"
                >
                  Social Events
                </Button>
              </Link>
              <Link href="/registration">
                <Button
                  variant="dark-blue"
                  size="fit"
                  className="!text-sm hover:bg-tertiary-1000"
                >
                  Join Our Competitions
                </Button>
              </Link>
            </div>

            {/* TOGGLE MOBILE */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  'relative z-60 p-2 transition-colors duration-300',
                  isScrolled || isOpen ? 'text-black' : 'text-white',
                )}
                aria-label="Toggle Menu"
              >
                <div
                  className={cn(
                    'transition-transform duration-300 ease-in-out',
                    isOpen ? 'rotate-180' : 'rotate-0',
                  )}
                >
                  {isOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu overlay */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 border-none bg-neutral-100 shadow-none lg:hidden transition-all duration-300 ease-in-out',
          isOpen
            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
            : 'opacity-0 -translate-y-5 invisible pointer-events-none',
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col mx-4 md:mx-8 py-[10px] gap-2">
          {LINKS.map((link) =>
            link.disabled ? (
              <span
                key={link.name}
                aria-disabled="true"
                className={cn(
                  'flex items-center justify-between px-4 text-sm py-[10px] text-neutral-400 cursor-not-allowed select-none',
                  link.name === 'Theme' && 'border-t border-black',
                  link.name === 'Game' && 'border-b border-black',
                )}
              >
                {link.name}
                {link.hasDropdown && <CaretRightIcon size={18} className="text-neutral-400" />}
              </span>
            ) : link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === link.name ? null : link.name,
                    )
                  }
                  className={cn(
                    'w-full flex items-center justify-between px-4 text-black text-sm py-[10px]',
                    link.name === 'Theme' && 'border-t border-black',
                    link.name === 'Game' && 'border-b border-black',
                  )}
                >
                  {link.name}
                  <CaretRightIcon
                    size={18}
                    className={cn(
                      'text-black transition-transform duration-300',
                      mobileDropdownOpen === link.name && 'rotate-90',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    mobileDropdownOpen === link.name
                      ? 'max-h-96'
                      : 'max-h-0',
                  )}
                >
                  <div className="flex flex-col gap-2 bg-neutral-50 pl-8 pr-4 py-2">
                    {(link.name === 'Events' ? EVENTS_LINKS : COMPETITION_LINKS).map(
                      (item) => (
                        <Link
                          key={`${item.label}-${item.href}`}
                          href={item.href}
                          onClick={() => {
                            scrollToHash(item.href);
                            setIsOpen(false);
                            setMobileDropdownOpen(null);
                          }}
                          className="text-black text-sm py-2 hover:font-medium transition-all"
                        >
                          {item.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) => {
                  if (scrollToHash(link.href)) {
                    event.preventDefault();
                  }
                  setIsOpen(false);
                }}
                className={cn(
                  'flex items-center justify-between px-4 text-black text-sm py-[10px]',
                  link.name === 'Theme' && 'border-t border-black',
                  link.name === 'Game' && 'border-b border-black',
                )}
              >
                {link.name}
              </Link>
            ),
          )}

          <div className="flex flex-col gap-2 pt-2 pb-3 ">
            <Link href="#events" onClick={() => setIsOpen(false)}>
              <Button
                variant="dark-blue"
                size="default"
                className="hover:bg-tertiary-1000 w-full md:w-auto"
                onClick={() => setIsOpen(false)}
              >
                Social Events
              </Button>
            </Link>
            <Link href="#events" onClick={() => setIsOpen(false)}>
              <Button
                variant="dark-blue"
                size="default"
                className="hover:bg-tertiary-1000 w-full md:w-auto"
                onClick={() => setIsOpen(false)}
              >
                Join Our Competitions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const DesktopLinks = ({
  isScrolled,
  isDetailPage,
}: {
  isScrolled: boolean;
  isDetailPage: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-7">
      {LINKS.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <div key={link.name} className="relative group py-4">
            {link.hasDropdown ? (
              <>
                <div
                  className={cn(
                    'group relative cursor-pointer inline-flex items-baseline gap-1 transition-colors duration-300 text-sm font-medium leading-normal',
                    isDetailPage
                      ? 'text-neutral-1000 hover:text-neutral-700'
                      : isScrolled
                        ? 'text-black hover:text-neutral-1000'
                        : 'text-white hover:text-neutral-400',
                  )}
                >
                  {link.name}{' '}
                  <CaretDownIcon
                    size={14}
                    className="translate-y-px group-hover:rotate-180 transition-[transform,color] duration-300"
                  />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                  <DropdownContent
                    type={
                      link.name === 'Events' ? 'events' : 'competitions'
                    }
                  />
                </div>
              </>
            ) : link.disabled ? (
              <span
                aria-disabled="true"
                className="text-sm font-medium text-neutral-400 cursor-not-allowed select-none"
              >
                {link.name}
              </span>
            ) : (
              <Link
                href={link.href}
                onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                  if (scrollToHash(link.href)) {
                    event.preventDefault();
                  }
                }}
                className={cn(
                  'transition-all duration-300 text-sm font-medium hover:text-neutral-400',
                  isDetailPage
                    ? 'text-neutral-1000 hover:text-neutral-700'
                    : isActive
                      ? 'text-neutral-400 font-bold'
                      : isScrolled
                        ? 'text-black hover:text-neutral-1000'
                        : 'text-white hover:text-neutral-400',
                )}
              >
                {link.name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

const DropdownContent = ({ type }: { type: DropdownType }) => {
  const links = type === 'events' ? EVENTS_LINKS : COMPETITION_LINKS;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-[480px] h-fit p-5 gap-8 bg-neutral-100 text-neutral-1000 flex flex-row items-stretch justify-center rounded-[10px] shadow-2xl border border-neutral-200">
      <div className="flex flex-col gap-2 flex-1 text-center w-full">
        {links.map((item, index) => (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              if (scrollToHash(item.href)) {
                event.preventDefault();
              }
            }}
            className={cn(
              'w-full py-2 rounded-md transition-colors duration-300 text-sm font-medium',
              index === activeIndex
                ? 'border-neutral-300 bg-neutral-200'
                : 'border-neutral-100 bg-neutral-100',
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="relative shrink-0 w-[167px] aspect-square rounded-lg overflow-hidden">
        <Image
          src={links[activeIndex]?.image ?? '/navbar-dropdown-image.webp'}
          alt={`${links[activeIndex]?.label ?? 'APECX'} image`}
          fill
          sizes="167px"
          className="object-cover"
        />
      </div>
    </div>
  );
};
