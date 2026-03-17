'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, X, ChevronRight, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';

const LINKS = [
  { name: 'Theme', href: '#theme' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Events', href: '#events', hasDropdown: true },
  { name: 'Competitions', href: '#competitions', hasDropdown: true },
  { name: 'Game', href: '#game' },
];

const ACTION_LINKS = [
  { label: "Register Now!", href: "#register" },
  { label: "Explore APECX", href: "#about" },
  { label: "Explore APECX", href: "#theme" },
  { label: "Explore APECX", href: "#events" },
  { label: "Explore APECX", href: "#competitions" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 mx-auto border-none shadow-none transition-[background-color,backdrop-filter,padding] duration-300 ease-linear backdrop-blur-md',

        // Logika WARNA: Putih jika di-scroll ATAU jika menu sedang terbuka
        isScrolled || isOpen ? 'bg-neutral-100' : 'bg-transparent text-white',

        // Logika LAYOUT (Padding & Max Width): HANYA aktif jika di-scroll
        isScrolled ? 'max-w-7xl py-3' : 'py-0',
      )}
    >
      <div
        className={cn(
          'flex flex-row items-center justify-between px-8 max-w-360 mx-auto transition-all duration-300',
          isScrolled ? 'py-0' : 'py-4',
        )}
      >
        {/* LOGO */}
        <div
          className={cn(
            'shrink-0 transition-all duration-300',
            isScrolled,
          )}
        >
          <Image
            src={
              isScrolled || isOpen
                ? '/logo/dark-apecx-icon.webp'
                : '/logo/apecx-icon.webp'
            }
            alt="APECX 2026"
            width={62}
            height={58}
            className="object-contain"
          />
        </div>

        {/* NAVIGATION & ACTIONS */}
        <div className="flex items-center gap-10">
          <DesktopLinks isScrolled={isScrolled} />

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant="dark-blue"
                size="fit"
                className="!text-sm hover:bg-tertiary-1000"
              >
                Social Events
              </Button>
              <Button
                variant="dark-blue"
                size="fit"
                className="!text-sm hover:bg-tertiary-1000"
              >
                Join Our Competitions
              </Button>
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
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 border-none bg-neutral-100 shadow-none lg:hidden"
          >
            <div className="flex flex-col mx-4 md:mx-8 py-[10px] gap-2">
              {LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center justify-between px-4 text-black text-lg py-[10px]',
                    link.name === 'Theme' && 'border-t border-black',
                    link.name === 'Game' && 'border-b border-black',
                  )}
                >
                  {link.name} <ChevronRight size={18} className="text-black" />
                </Link>
              ))}

              <div className="flex flex-col gap-2 pt-2 pb-3 ">
                <Button
                  variant="dark-blue"
                  size="default"
                  className="hover:bg-tertiary-1000 w-full md:w-auto"
                  onClick={() => setIsOpen(false)}
                >
                  Social Events
                </Button>
                <Button
                  variant="dark-blue"
                  size="default"
                  className="hover:bg-tertiary-1000 w-full md:w-auto"
                  onClick={() => setIsOpen(false)}
                >
                  Join Our Competitions
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

const DesktopLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-7">
      {LINKS.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <div key={link.name} className='relative group py-4'>
            {link.hasDropdown ? (
              <>
                <div
                  className={cn(
                    'group relative cursor-pointer flex items-center gap-1 transition-all duration-100 text-sm font-medium',
                    isScrolled
                      ? 'text-black hover:text-neutral-1000'
                      : 'text-white hover:text-neutral-400',
                  )}
                >
                  {link.name}{' '}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-400"
                  />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                  <DropdownContent />
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                className={cn(
                  'transition-all duration-300 text-sm font-medium hover:text-neutral-400',
                  isActive
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

const DropdownContent = () => {
  return (
    <div className="w-[480px] h-[262px] p-5 gap-8 bg-neutral-100 text-neutral-1000 flex flex-row items-stretch justify-center rounded-[10px] shadow-2xl border border-neutral-200">
      <div className="flex flex-col gap-2 flex-1 text-center w-full">
        {ACTION_LINKS.map((item) => (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            className="w-full rounded-[8px] border border-neutral-100 bg-neutral-100 px-6 py-[8.5px] text-sm shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="relative shrink-0 w-[167px] h-[222px] self-stretch rounded-lg overflow-hidden">
        <Image
          src="/navbar-dropdown-image.webp"
          alt="APECX Icon"
          fill
          sizes="167px"
          className="object-cover"
        />
      </div>
    </div>
  );
}