'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLenisScroll } from '../../lib/lenis';

const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'Projects', href: '/projects' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = pathname === '/home';

  // Framer Motion animation fade in up
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Commence en bas avec une opacité de 0
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }, // Animation fluide
    },
  };

  useLenisScroll();
  return (
    <>
      <div className='absolute top-0 w-full h-1 bg-black bg-opacity-0'></div>
      <motion.nav
        initial='hidden'
        animate='visible'
        variants={fadeInUpVariants}
        viewport={{ once: true }}
        className='flex justify-between py-8 px-2 lg:px-16 items-center absolute w-full z-20'
      >
        <div>
          <Link
            href='/home'
            className={` text-nowrap font-bold text-4xl   ${
              isHomePage ? 'text-col_white_3' : 'text-col_gray_dark'
            }`}
          >
            Eco Homes
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className='md:hidden z-20'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={` ${
              isHomePage
                ? 'text-col_gray_dark bg-col_white_3'
                : 'text-col_white_3 bg-col_gray_dark'
            } rounded-full p-2 focus:outline-none`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? 'translate-y-0' : 'translate-y-[-600px]'
          } z-10 flex flex-col absolute left-0 md:translate-y-0 top-0 items-center transition-transform duration-500 ease-in-out bg-opacity-10 backdrop-blur-md border-b-2 ${
            isHomePage
              ? 'bg-col_white_3 border-col_white_background'
              : 'bg-col_gray_dark md:bg-col_white_3 border-col_gray_dark md:border-col_white_background'
          }   md:bg-opacity-100 rounded-lg w-full md:w-auto md:static md:flex-row py-16 px-12 md:rounded-full md:py-3 md:px-6 gap-8`}
        >
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href} className='flex items-center'>
                <Link
                  className={`  text-lg md:text-xs ${
                    isHomePage ? 'text-col_white_3' : 'text-col_gray_dark'
                  } ${
                    isActive ? 'md:text-green-500' : 'md:text-col_gray_dark'
                  } hover:text-col_gray_light`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          className={` hidden md:block text-xs text-nowrap hover:bg-transparent ${
            isHomePage
              ? 'text-col_white_3 border-col_white_background '
              : 'text-col_gray_dark border-col_gray_dark'
          } py-3 px-6 bg-col_white_background border backdrop-blur-sm  bg-opacity-50 rounded-full`}
          href='/contact'
        >
          Free Consultation!
        </Link>
      </motion.nav>
    </>
  );
}
