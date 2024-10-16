'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Cabin from '../public/images/minimalistic-cabin-blending-into-environment.jpg';
import LeftImage from '../public/images/unique-simple-small-wooden-house-design-1.jpg';
import Lenis from 'lenis';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { helveticaRegular } from '../public/fonts/font';
import gsap from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sélectionner toutes les images dans le container
    if (imagesContainerRef.current) {
      const images = gsap.utils.toArray<HTMLImageElement>(
        imagesContainerRef.current.querySelectorAll('.animated-image'),
      );

      // Créer une timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imagesContainerRef.current, // Le déclencheur est le container d'images
          start: 'top 70%',
          toggleActions: 'play pause resume reverse',
        },
      });
      // Appliquer l'animation à chaque image
      images.forEach((image, index) => {
        tl.fromTo(
          image,
          { opacity: 0, x: -100 }, // Départ
          {
            opacity: 1,
            x: 0, // Fin
            duration: 1,
            ease: 'power2.out',
          },
          index * 0.2,
        );
      });
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

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
      <section className='h-screen w-full flex bg-col_white_background flex-col items-center '>
        <h2
          className={`${helveticaRegular.className} text-center text-col_gray_dark text-4xl pt-20 max-w-screen-md `}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          commodi at, eum eligendi,
          <span className='text-green-500'> magni</span> laboriosam consequuntur
          iure
        </h2>
        <div className='flex w-full h-full pb-6 px-20 justify-center gap-7 items-center'>
          <Image
            className='rounded-xl w-[200px]'
            src={LeftImage}
            alt='modern house in nature'
          />

          <Image
            className='animated_image rounded-xl w-[300px] z-1'
            src={LeftImage}
            alt='modern house in nature'
          />

          <Image
            className='animated_image rounded-xl w-[200px] z-1'
            src={LeftImage}
            alt='modern house in nature'
          />
        </div>
      </section>
      <section className='h-screen w-full flex bg-col_white flex-col items-center z-0'>
        <div className='w-full px-20 flex justify-between pt-20 pb-16'>
          <div className=''>
            <span
              className={`${helveticaRegular.className} text-col_gray_dark uppercase`}
            >
              Safety and secure
            </span>
            <h2
              className={`${helveticaRegular.className} text-col_gray_dark text-5xl pt-5 max-w-[80%]`}
            >
              Well-engineered houses with these features
            </h2>
          </div>
          <div className='flex items-center justify-end'>
            <span
              className={`${helveticaRegular.className} text-col_gray_dark max-w-[60%] text-right`}
            >
              Our well-engineered houses are designed with precision, offerring
              a perfect blend of durabilty, efficiency, and comfort.
            </span>
          </div>
        </div>
        <div
          ref={imagesContainerRef}
          className='w-full h-full pb-20 px-20 flex gap-4 '
        >
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Cabin}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Cabin}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Cabin}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Cabin}
              alt='modern house in nature'
            />
          </div>
        </div>
      </section>
      <section className='h-screen bg-col_white_background'>
        <div className='w-full flex flex-col items-center justify-center pt-20'>
          <span
            className={`${helveticaRegular.className} text-col_gray_dark uppercase`}
          >
            Explore our services
          </span>
          <h2
            className={`${helveticaRegular.className} text-col_gray_dark text-5xl pt-5 `}
          >
            From blueprint to key in hand
          </h2>
        </div>
      </section>
    </>
  );
}
