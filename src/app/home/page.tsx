import React from 'react';
import Image from 'next/image';
import Cabin from '../public/images/3d-rendering-wooden-house_2.jpg';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { helveticaRegular } from '../public/fonts/font';

export default function Home() {
  return (
    <>
      <div className=' w-full h-screen overflow-hidden'>
        <Image src={Cabin} alt='Cabin' />
        <div className='z-0 absolute inset-0 bg-black bg-opacity-15'></div>
        <div className='z-1 absolute bottom-20 left-16 max-w-screen-md'>
          <h1
            className={`${helveticaRegular.className} text-5xl font-semi-bold text-col_white mb-12`}
          >
            Eco-friendly tiny homes <br />
            designed for sustainable living
          </h1>
          <div className='flex gap-4'>
            <Button
              variant='outline'
              className=' bg-col_white py-5 px-2 pl-4 rounded-full border-gray-200 hover:bg-gray-100'
            >
              <span
                className={`mr-2 text-col_gray_dark ${helveticaRegular.className}`}
              >
                Get Started!
              </span>
              <span className='relative flex h-8 w-8 items-center justify-center'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex h-full w-full items-center justify-center rounded-full bg-green-500'>
                  <ChevronRight className='h-4 w-4 text-white' />
                </span>
              </span>
            </Button>
            <Button
              variant='outline'
              className=' bg-col_white bg-opacity-50 backdrop-blur-sm py-5 px-2 pl-4 rounded-full border-gray-200 hover:bg-gray-100'
            >
              <span
                className={`mr-2 text-col_white ${helveticaRegular.className}`}
              >
                Contact Us!
              </span>
              <span className='relative flex h-8 w-8 items-center justify-center'>
                <span className='relative inline-flex h-full w-full items-center justify-center rounded-full'>
                  <ChevronRight className='h-4 w-4 text-white' />
                </span>
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div>Home</div>
    </>
  );
}
