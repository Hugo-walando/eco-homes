'use client';
// Import Photos
import LeftImage from '../public/images/unique-simple-small-wooden-house-design-1.jpg';
import Cabin from '../public/images/minimalistic-cabin-blending-into-environment.jpg';
import boxForestCabin from '../public/images/3d-rendering-wooden-house2.jpg';
import housePlain from '../public/images/3d-rendering-wooden-house.jpg';
import riverHouse from '../public/images/unique-simple-small-wooden-house-design-14.jpg';
import Carpenter from '../public/images/carpenter-man-working-wood.jpg';
import snowHouse from '../public/images/snow-house.jpeg';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { helveticaRegular } from '../public/fonts/font';
import gsap from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const fadeInSlideImagesContainerRef = useRef<HTMLDivElement>(null);
  const fadeInTextContainerRef = useRef<HTMLDivElement>(null);
  const pinnedImageContainerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ANIMATION PREMIERE SECTION IMAGES
    const mm = gsap.matchMedia();
    // Sélectionner toutes les images dans le container
    if (fadeInSlideImagesContainerRef.current) {
      const images = gsap.utils.toArray<HTMLImageElement>(
        fadeInSlideImagesContainerRef.current.querySelectorAll(
          '.animated-image',
        ),
      );

      // Créer une timeline
      const firstTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: fadeInSlideImagesContainerRef.current, // Le déclencheur est le container d'images
          start: 'top 70%',
          toggleActions: 'play pause resume reverse',
        },
      });
      // Appliquer l'animation à chaque image
      images.forEach((image, index) => {
        firstTimeLine.fromTo(
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

    // ANIMATION DEUXIEME SECTION TEXTE / IMAGE PINNED

    if (
      pinnedImageContainerRef.current &&
      fadeInTextContainerRef.current &&
      mainContainerRef.current
    ) {
      const texts = gsap.utils.toArray<HTMLDivElement>(
        fadeInTextContainerRef.current.querySelectorAll('.animated-text'),
      );
      console.log(fadeInTextContainerRef.current!.scrollHeight);

      texts.forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0 }, // Départ
          {
            opacity: 1, // Fin
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: text, // Le déclencheur est le container d'images
              start: 'top 65%',
              end: '80% 20%',
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      mm.add('(min-width: 600px)', () => {
        console.log('desktop');

        ScrollTrigger.create({
          trigger: mainContainerRef.current,
          start: 'top top',
          end: `bottom bottom`,
          pin: pinnedImageContainerRef.current,
        });
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
        <div className='z-0 absolute inset-0 bg-black bg-opacity-20'></div>
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
          className={`${helveticaRegular.className} text-center text-col_gray_dark text-4xl pt-20 max-w-screen-sm `}
        >
          These eco-friendly homes are designed to meet modern needs, combining
          sustainability, efficiency, and contemporary living for a
          <span className='text-green-500'> greener future</span>.
        </h2>
        <div className='flex w-full h-full pb-6 px-20 justify-center gap-7 items-center'>
          <div className='w-[200px] h-[200px]'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={boxForestCabin}
              alt='modern house in nature'
            />
          </div>
          <div className='w-[300px] h-[300px]'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={LeftImage}
              alt='modern house in nature'
            />
          </div>
          <div className='w-[200px] h-[200px]'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={housePlain}
              alt='modern house in nature'
            />
          </div>
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
          ref={fadeInSlideImagesContainerRef}
          className='w-full h-full pb-20 px-20 flex gap-4 '
        >
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20'></div>
            <h2
              className={`${helveticaRegular.className} tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
            >
              Eco friendly
            </h2>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={riverHouse}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20'></div>
            <h2
              className={`${helveticaRegular.className} tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
            >
              Earthquake & cyclone resistant
            </h2>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Cabin}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20'></div>
            <h2
              className={`${helveticaRegular.className} tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
            >
              Rapid construction
            </h2>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Carpenter}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20'></div>
            <h2
              className={`${helveticaRegular.className} tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
            >
              Thermal efficiency
            </h2>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={snowHouse}
              alt='modern house in nature'
            />
          </div>
        </div>
      </section>
      <section className='bg-col_white_background'>
        <div className='w-full  flex flex-col items-center justify-right pt-20  '>
          <span
            className={`${helveticaRegular.className} text-col_gray_dark uppercase`}
          >
            Explore our services
          </span>
          <h2
            className={`${helveticaRegular.className} text-col_gray_dark text-5xl pt-5 max-w-[25%] text-center`}
          >
            From blueprint to key in hand
          </h2>
        </div>
        <div ref={mainContainerRef} className='flex'>
          <div
            ref={fadeInTextContainerRef}
            className='w-1/2  flex flex-col items-end pt-[110px]'
          >
            <div className='h-[70vh] flex flex-col items-center justify-center max-w-[70%] text-left px-20 animated-text'>
              <h3
                className={`${helveticaRegular.className} text-col_gray_dark text-4xl `}
              >
                Lorem ipsum dolor sit amet.
              </h3>
              <span
                className={`${helveticaRegular.className} text-col_gray_dark text-sm pt-5 `}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                necessitatibus.
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, atque.
                </b>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, aliquam?
              </span>
            </div>
            <div className='h-[70vh] flex flex-col items-center justify-center max-w-[70%] text-left px-20 animated-text'>
              <h3
                className={`${helveticaRegular.className} text-col_gray_dark text-4xl `}
              >
                Lorem ipsum dolor sit amet.
              </h3>
              <span
                className={`${helveticaRegular.className} text-col_gray_dark text-sm pt-5 `}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                necessitatibus.
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, atque.
                </b>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, aliquam?
              </span>
            </div>
            <div className='h-[70vh] flex flex-col items-center justify-center max-w-[70%] text-left px-20 animated-text'>
              <h3
                className={`${helveticaRegular.className} text-col_gray_dark text-4xl`}
              >
                Lorem ipsum dolor sit amet.
              </h3>
              <span
                className={`${helveticaRegular.className} text-col_gray_dark text-sm pt-5 `}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                necessitatibus.
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, atque.
                </b>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, aliquam?
              </span>
            </div>
            <div className='h-[70vh]  flex flex-col items-center justify-center max-w-[70%] text-left px-20 animated-text'>
              <h3
                className={`${helveticaRegular.className} text-col_gray_dark text-4xl`}
              >
                Lorem ipsum dolor sit amet.
              </h3>
              <span
                className={`${helveticaRegular.className} text-col_gray_dark text-sm pt-5 `}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                necessitatibus.
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, atque.
                </b>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, aliquam?
              </span>
            </div>
          </div>

          <div
            ref={pinnedImageContainerRef}
            className='w-1/2 h-screen flex flex-col justify-center bg-red-400'
          >
            <div className='rounded-2xl h-[40vh] w-[30vw]'>
              {/* <Image
                src={LeftImage}
                alt='Modern house'
                className='rounded-3xl w-full h-full  object-cover '
              /> */}
              <div className=' h-full w-full bg-black'></div>
            </div>
            {/* <div className='rounded-2xl h-[40vh]'>
                <Image
                  src={LeftImage}
                  alt='Modern house'
                  className='rounded-3xl w-full h-full object-cover '
                />
              </div>
              <div className='rounded-2xl h-[40vh]'>
                <Image
                  src={LeftImage}
                  alt='Modern house'
                  className='rounded-3xl w-full h-full object-cover '
                />
              </div>
              <div className='rounded-2xl h-[40vh]'>
                <Image
                  src={LeftImage}
                  alt='Modern house'
                  className='rounded-3xl w-full h-full object-cover '
                />
              </div> */}
          </div>
        </div>
      </section>
      <section className='h-screen'></section>
    </>
  );
}
