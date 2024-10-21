'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between py-8 px-2 md:px-16 items-center absolute w-full z-10'>
      <Link
        href='/home'
        className={` text-nowrap font-bold text-4xl  text-col_white `}
      >
        Eco Homes
      </Link>

      {/* Mobile menu toggle button */}
      <div className='md:hidden z-20'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=' text-gray-500 bg-col_white rounded-full p-2 hover:text-gray-700 focus:outline-none'
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
        } z-10 flex flex-col absolute left-0 md:translate-y-0 top-0 items-center transition-transform duration-500 ease-in-out bg-opacity-40 backdrop-blur-sm border-b-2 border-col_white_background  md:bg-opacity-100 rounded-lg w-full md:w-auto md:static md:flex-row py-16 px-12 bg-col_white md:rounded-full md:py-3 md:px-6 gap-8`}
      >
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <li key={link.href} className='flex items-center'>
              <Link
                className={` ${
                  isActive ? 'md:text-green-500' : 'md:text-col_gray_dark'
                } text-lg md:text-xs text-col_white hover:text-col_gray_light`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        className={` hidden md:block text-xs text-nowrap text-col_white_background py-3 px-6 bg-col_white_background border backdrop-blur-sm border-col_white_background bg-opacity-50 rounded-full`}
        href='/contact'
      >
        Free Consultation!
      </Link>
    </nav>
  );
}
