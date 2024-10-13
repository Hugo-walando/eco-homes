'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { helveticaMedium, helveticaRegular } from '../public/fonts/font';
const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className='flex justify-between py-8 px-16 items-center absolute w-full z-10'>
      <Link
        href='/home'
        className={`${helveticaMedium.className} font-bold text-4xl  text-col_white `}
      >
        Eco Homes
      </Link>
      <nav className=''>
        <ul className='flex bg-col_white rounded-full py-3 px-6 gap-8'>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href} className='flex items-center'>
                <Link
                  className={`${helveticaRegular.className} ${
                    isActive ? 'text-green-500' : 'text-col_gray_dark'
                  } text-xs hover:text-col_gray_light`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link
        className={`${helveticaRegular.className} text-xs text-col_white_background py-3 px-6 bg-col_white_background border backdrop-blur-sm border-col_white_background bg-opacity-50 rounded-full`}
        href='/contact'
      >
        Free Consultation!
      </Link>
    </div>
  );
}
