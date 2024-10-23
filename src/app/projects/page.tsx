'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import boxForestCabin from '../public/images/3d-rendering-wooden-house2.jpg';

gsap.registerPlugin(ScrollTrigger);

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Projects() {
  const projectNumbers = useRef<HTMLDivElement>(null);

  gsap.from(projectNumbers.current, {
    innerText: 0,
    duration: 3,
    scrollTrigger: {
      trigger: projectNumbers.current,
      markers: true,
    },
    snap: {
      innerText: 1,
    },
  });
  return (
    <>
      <div className='h-[25dvh] w-full bg-col_white border-b-2 border-col_gray_dark'></div>
      <section className='h-auto w-full flex bg-col_white flex-col items-center z-0 px-4 md:px-12 lg:px-20 pb-12'>
        <div className='w-full py-6  flex flex-col md:flex-row justify-between md:pt-12 md:pb-12 lg:pt-20 lg:pb-16'>
          <motion.h2
            initial='hidden'
            whileInView='animate'
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className={` text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl pt-5 max-w-[80%]`}
          >
            Featured Projects
          </motion.h2>

          <div className='flex items-center md:justify-end'>
            <motion.span
              initial='hidden'
              whileInView='animate'
              variants={fadeInUpVariants}
              viewport={{ once: true }}
              className={` text-col_gray_light font-extralight pt-6 md:pt-0 md:max-w-[60%] md:text-right`}
            >
              Our well-engineered houses are designed with precision, offerring
              a perfect blend of durabilty, efficiency, and comfort.
            </motion.span>
          </div>
        </div>
        <div className='flex w-full flex-col sm:flex-row sm:items-end justify-between'>
          <div className=' pb-6 sm:pb-0 w-full'>
            <div className='w-full pb-6 sm:pb-0 sm:w-[80%]'>
              <motion.div
                initial='hidden'
                whileInView='animate'
                variants={fadeInUpVariants}
                viewport={{ once: true }}
                className='h-[300px] sm:h-[300px] lg:h-[350px] xl:h-[500px] w-full pb-2'
              >
                <Image
                  className='w-full h-full object-cover rounded-xl'
                  src={boxForestCabin}
                  alt='modern house in nature'
                />
              </motion.div>
              <div className='w-full h-4 flex flex-row sm:flex-col md:flex-row justify-between'>
                <span className='text-col_gray_dark'>France</span>
                <span className='text-col_gray_dark'>19 rjkrf fpze </span>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-end'>
            <div className='w-full  sm:w-[60%]'>
              <motion.div
                initial='hidden'
                whileInView='animate'
                variants={fadeInUpVariants}
                viewport={{ once: true }}
                className='h-[200px] sm:h-[200px] lg:h-[250px] xl:h-[400px] pb-2'
              >
                <Image
                  className='w-full h-full object-cover rounded-xl'
                  src={boxForestCabin}
                  alt='modern house in nature'
                />
              </motion.div>
              <div className='w-full h-4 flex  flex-row sm:flex-col md:flex-row justify-between'>
                <span className='text-col_gray_dark'>France</span>
                <span className='text-col_gray_dark'>19 rjkrf fpze </span>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full py-6  flex flex-col md:flex-row justify-between md:pt-12 md:pb-12 lg:pt-20 lg:pb-16'>
          <motion.h2
            initial='hidden'
            whileInView='animate'
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className={` text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl pt-5 max-w-[80%]`}
          >
            Explore our completed success stories
          </motion.h2>
        </div>
        <div className='h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px]  w-full sm:w-[350px] lg:w-[500px]  flex justify-center gap-4 items-center md:pt-12 md:pb-12 lg:pt-20 lg:pb-16'>
          <h2
            ref={projectNumbers}
            className='text-8xl md:text-9xl text-green-500'
          >
            54
          </h2>
          <div className='h-full rounded-full w-[3px] bg-col_gray_dark'></div>
          <h2 className='text-3xl text-col_gray_dark md:text-4xl xl:text-5xl '>
            Projects we have done in 2024
          </h2>
        </div>
      </section>
    </>
  );
}
