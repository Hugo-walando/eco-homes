'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { helveticaMedium } from '../public/fonts/font';
const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'FAQ', href: '/faq' },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  className={`${helveticaMedium.className} ${
                    isActive ? 'text-red-500' : 'text-black'
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
