'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { EmblaCarousel } from '../components/Carousel';

import cabin4 from '../public/images/cabin_project4.jpeg';
import cabin5 from '../public/images/cabin_project6.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectNumbers = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectNumbers.current) {
      console.log(projectNumbers.current?.innerText);
      gsap.to(projectNumbers.current, {
        innerText: '54',
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: projectNumbers.current,
          start: 'top 70%',
        },
      });
    }
  });
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
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
              Our game-changing innovation is the perfect blend of design,
              technology, and sustainability.
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
                  src={cabin4}
                  alt='modern house in nature'
                />
              </motion.div>
              <div className='w-full h-4 flex flex-row sm:flex-col md:flex-row justify-between'>
                <span className='text-col_gray_dark'>Tiny Heaven</span>
                <span className='text-col_gray_dark'>Toronto</span>
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
                  src={cabin5}
                  alt='modern house in nature'
                />
              </motion.div>
              <div className='w-full h-4 flex  flex-row sm:flex-col md:flex-row justify-between'>
                <span className='text-col_gray_dark'>Eco Nest</span>
                <span className='text-col_gray_dark'>New Zealand</span>
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
        <motion.div
          initial='hidden'
          whileInView='animate'
          variants={fadeInUpVariants}
          viewport={{ once: true }}
          className='h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px]  w-full sm:w-[350px] lg:w-[500px]  flex justify-center gap-4 items-center mb-10 md:mb-0 md:pt-12 md:pb-16 lg:pt-20 lg:pb-20 xl:pb-28'
        >
          <h2
            ref={projectNumbers}
            className='text-8xl md:text-9xl text-green-500'
          >
            0
          </h2>
          <div className='h-full rounded-full w-[3px] bg-col_gray_dark'></div>
          <h2 className='text-3xl text-col_gray_dark md:text-4xl xl:text-5xl '>
            Projects we have done in 2024
          </h2>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='animate'
          variants={fadeInUpVariants}
          viewport={{ once: true }}
          className='md:pt-12 md:pb-16 lg:pt-20 lg:pb-20 xl:pb-28 h-auto w-full md:w-[60%]'
        >
          <EmblaCarousel />
        </motion.div>
      </section>
    </>
  );
}
