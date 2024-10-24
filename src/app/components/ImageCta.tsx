'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import boxForestCabin from '../public/images/3d-rendering-wooden-house2.jpg';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
export default function ImageCta() {
  return (
    <section className='h-auto py-12 md:py-0 px-2 md:px-0 md:h-screen bg-col_white_background flex justify-center items-center '>
      <motion.div
        initial='hidden'
        whileInView='animate'
        variants={fadeInUpVariants}
        className='h-[300px] md:h-[90vh] md:w-[90vw] flex items-center justify-center rounded-2xl relative'
      >
        <Image
          src={boxForestCabin}
          alt='Modern house'
          className='w-full h-full z-0 object-cover rounded-2xl'
        />
        <div className='h-full w-full z-0 bg-black opacity-20 absolute rounded-2xl inset-0'></div>
        <motion.div
          initial='hidden'
          whileInView='animate'
          variants={fadeInUpVariants}
          className='absolute flex flex-col md:max-w-[50%] items-center justify-center '
        >
          <h3
            className={` z-20 text-center text-3xl sm:text-4xl md:text-5xl px-2 md:px-0 font-semi-bold text-col_white mb-4 md:mb-12`}
          >
            Get in touch to start your eco-living journey today!
          </h3>
          <Button
            asChild
            variant='outline'
            className=' bg-col_white_3 py-5 px-2 pl-4 rounded-full border-gray-200 hover:bg-gray-100'
          >
            <a
              href='https://www.linkedin.com/in/hugo-walandowitsch/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='mr-2 text-col_gray_dark'>Get Started!</span>
              <span className='relative flex h-8 w-8 items-center justify-center'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex h-full w-full items-center justify-center rounded-full bg-green-500'>
                  <ChevronRight className='h-4 w-4 text-white' />
                </span>
              </span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
