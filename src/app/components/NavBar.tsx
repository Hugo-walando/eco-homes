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
        className={`${helveticaMedium.className} font-bold text-4xl  text-col_white_2 `}
      >
        Eco Homes
      </Link>
      <nav className=''>
        <ul className='flex bg-col_white_2 rounded-full py-4 px-8 gap-8'>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  className={`${helveticaRegular.className} ${
                    isActive ? 'text-col_primary_1' : 'text-col_gray_1'
                  } text-base`}
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
        className='text-base text-col_white_2 py-4 px-8 bg-transparent border-2 border-col_white_2 rounded-full'
        href='/contact'
      >
        Free Consultation!
      </Link>
    </div>
  );
}
