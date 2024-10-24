'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Contact() {
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
        <div className='w-full py-6  flex flex-col justify-between md:pt-12 md:pb-12 lg:pt-20 lg:pb-16'>
          <motion.h2
            initial='hidden'
            whileInView='animate'
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className={` text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl pt-5 max-w-[80%] mb-12`}
          >
            Contact us here !
          </motion.h2>
          <motion.form
            initial='hidden'
            whileInView='animate'
            variants={fadeInUpVariants}
            viewport={{ once: true }}
            className='mx-auto flex flex-col items-center w-full lg:max-w-[600px]'
            id='contact_form'
            action='https://api.web3forms.com/submit'
            method='POST'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-delay='200'
          >
            <input
              type='hidden'
              name='access_key'
              value='ea3aa204-96df-478f-8f95-4d08e1e15147'
            />
            <div className='w-full'>
              <label className='text-xl text-col_gray_dark'>Name:</label>
              <input
                className='w-full h-10 text-xl bg-c_black border border-gray-300 rounded-lg p-5 mt-1 focus:outline-none focus:border-white'
                name='name'
                type='text'
                required
                placeholder='Your Name ..'
              />
            </div>
            <div className='w-full mt-4'>
              <label className='text-xl text-col_gray_dark'>Email:</label>
              <input
                className='w-full h-10 text-xl bg-c_black border border-gray-300 rounded-lg p-5 mt-1 focus:outline-none focus:border-white'
                name='email'
                type='email'
                required
                placeholder='Your Email ..'
              />
            </div>
            <div className='w-full mt-4'>
              <label className='text-xl text-col_gray_dark'>Message:</label>
              <textarea
                className='w-full text-xl h-32 bg-c_black border border-gray-300 rounded-lg p-5 mt-1 focus:outline-none focus:border-white'
                name='message'
                id='message'
                placeholder='Your Message ..'
              ></textarea>
            </div>
            <input
              type='hidden'
              name='redirect'
              value='https://web3forms.com/success'
            />
            <Button
              variant='outline'
              type='submit'
              className=' bg-col_white_3 bg-opacity-50 backdrop-blur-sm hover:bg-transparent py-5 px-2 pl-4 rounded-full border-col_gray_dark'
            >
              <span className={`mr-2 text-col_gray_dark `}>Send</span>
              <span className='relative flex h-8 w-8 items-center justify-center'>
                <span className='relative inline-flex h-full w-full items-center justify-center rounded-full'>
                  <ChevronRight className='h-4 w-4 text-col_gray_dark' />
                </span>
              </span>
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
