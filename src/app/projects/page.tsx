'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
export default function Projects() {
  return (
    <>
      <div className='h-[25dvh] w-full bg-col_white border-b-2 border-gray-300'></div>
      <section className='md:h-screen sm:h-auto w-full flex bg-col_white flex-col items-center z-0 px-4 md:px-12 pb-6 lg:px-20'>
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
      </section>
    </>
  );
}
