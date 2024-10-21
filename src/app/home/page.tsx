'use client';
// Import Photos
import LeftImage from '../public/images/unique-simple-small-wooden-house-design-1.jpg';
import Cabin from '../public/images/minimalistic-cabin-blending-into-environment.jpg';
import boxForestCabin from '../public/images/3d-rendering-wooden-house2.jpg';
import housePlain from '../public/images/3d-rendering-wooden-house.jpg';
import riverHouse from '../public/images/unique-simple-small-wooden-house-design-14.jpg';
import Carpenter from '../public/images/carpenter-man-working-wood.jpg';
import snowHouse from '../public/images/snow-house.jpeg';
import architects from '../public/images/architects-working-project.jpg';
import interior from '../public/images/photorealistic-timber-house-interior-with-wooden-decor-furnishings.jpg';
import cabin2 from '../public/images/unique-simple-small-wooden-house-design-7.jpg';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

      console.log(texts);

      const images = gsap.utils.toArray<HTMLImageElement>(
        pinnedImageContainerRef.current.querySelectorAll('.slide-image-wf'),
      );

      console.log(images);

      gsap.set(images, { yPercent: 101 });

      const allImages = gsap.utils.toArray<HTMLImageElement>(
        pinnedImageContainerRef.current.querySelectorAll('.slide-image'),
      );

      // Anim text fade-in

      texts.forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0 }, // Départ
          {
            opacity: 1, // Fin
            duration: 3,
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
      // Anim Images slides ONLY FOR DESKTOP

      texts.forEach((text, index) => {
        const headline = text.querySelector('h3');
        const animation = gsap
          .timeline()
          .to(images[index], { yPercent: 0, ease: 'power2.out', duration: 2 })
          .set(allImages[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: 'top 80%',
          end: 'top 50%',
          animation: animation,
          scrub: true,
        });
      });

      window.addEventListener('resize', () => {
        ScrollTrigger.refresh(); // Recalcule les positions
      });

      // Fonction de nettoyage si les conditions ne sont plus remplies
      return () => {
        // Ce return fait en sorte que tout soit nettoyé si la taille de l'écran change
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
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
      <section className='w-full h-dvh overflow-hidden'>
        <Image
          src={Cabin}
          alt='Cabin'
          className='w-full h-dvh object-cover absolute'
        />
        <div className='z-0 absolute inset-0 bg-black bg-opacity-20'></div>
        <div className='w-full h-full flex items-end md:justify-start justify-center px-2 pb-8 md:px-16 md:pb-20'>
          <div className='z-10 max-w-screen-md'>
            <h1
              className={` text-4xl md:text-5xl font-semi-bold text-col_white mb-4 md:mb-12`}
            >
              Eco-friendly tiny homes <br />
              designed for sustainable living
            </h1>
            <div className='flex  gap-4'>
              <Button
                variant='outline'
                className=' bg-col_white py-5 px-2 pl-4 rounded-full border-gray-200 hover:bg-gray-100'
              >
                <span className={`mr-2 text-col_gray_dark `}>Get Started!</span>
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
                <span className={`mr-2 text-col_white `}>Contact Us!</span>
                <span className='relative flex h-8 w-8 items-center justify-center'>
                  <span className='relative inline-flex h-full w-full items-center justify-center rounded-full'>
                    <ChevronRight className='h-4 w-4 text-white' />
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='h-auto sm:h-screen w-full flex bg-col_white_background flex-col items-center '>
        <h2
          className={` px-4 text-center text-col_gray_dark text-2xl md:text-4xl  pt-20 max-w-screen-sm  `}
        >
          These eco-friendly homes are designed to meet modern needs, combining
          sustainability, efficiency, and contemporary living for a
          <span className='text-green-500'> greener future</span>.
        </h2>
        <div className='flex flex-col sm:flex-row w-full h-full pb-12 pt-8 px-4 sm:px-20  justify-center gap-7 items-center'>
          {/* Image du milieu pour mobile */}
          <div className='w-full h-[300px] sm:w-[300px] sm:h-[300px] order-1 sm:order-none sm:absolute'>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={LeftImage}
              alt='modern house in nature'
            />
          </div>

          {/* Images de gauche et droite, alignées côte à côte sous la taille sm */}
          <div className='flex flex-row w-full justify-between  gap-2 sm:justify-between sm:gap-48 sm:w-auto order-2 sm:order-1'>
            <div className='w-[48%] h-[200px] sm:w-[200px] sm:h-[200px]'>
              <Image
                className='w-full h-full object-cover rounded-2xl'
                src={boxForestCabin}
                alt='modern house in nature'
              />
            </div>
            <div className='w-[48%] h-[200px] sm:w-[200px] sm:h-[200px]'>
              <Image
                className='w-full h-full object-cover rounded-2xl'
                src={housePlain}
                alt='modern house in nature'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='md:h-screen sm:h-auto w-full flex bg-col_white flex-col items-center z-0 px-4 md:px-12 pb-6 lg:px-20'>
        <div className='w-full py-6  flex flex-col md:flex-row justify-between md:pt-12 md:pb-12 lg:pt-20 lg:pb-16'>
          <div className=''>
            <span className={` text-col_gray_dark uppercase`}>
              Safety and secure
            </span>
            <h2
              className={` text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl pt-5 max-w-[80%]`}
            >
              Well-engineered houses with these features
            </h2>
          </div>
          <div className='flex items-center md:justify-end'>
            <span
              className={` text-col_gray_light font-extralight pt-6 md:pt-0 md:max-w-[60%] md:text-right`}
            >
              Our well-engineered houses are designed with precision, offerring
              a perfect blend of durabilty, efficiency, and comfort.
            </span>
          </div>
        </div>
        <div
          ref={fadeInSlideImagesContainerRef}
          className='w-full h-full pb- md:pb-20 flex flex-col md:flex-row gap-4 '
        >
          <div className='w-full h-[300px] md:h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20 rounded-2xl'></div>
            <h2
              className={` tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
            >
              Eco friendly
            </h2>
            <Image
              className='w-full h-full object-cover rounded-2xl '
              src={riverHouse}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-[300px] md:h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20 rounded-2xl'></div>
            <h2
              className={` tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
            >
              Earthquake & cyclone resistant
            </h2>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Cabin}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-[300px] md:h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20 rounded-2xl'></div>
            <h2
              className={` tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
            >
              Rapid construction
            </h2>
            <Image
              className='w-full h-full object-cover rounded-2xl'
              src={Carpenter}
              alt='modern house in nature'
            />
          </div>
          <div className='w-full h-[300px] md:h-full rounded-2xl bg-black animated-image'>
            <div className='z-0 absolute inset-0 bg-black bg-opacity-20 rounded-2xl'></div>
            <h2
              className={` tracking-wider font-semibold absolute bottom-4 left-4 max-w-[80%] text-3xl text-col_white `}
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
        <div className='w-full flex flex-col items-center justify-right pt-20 pb-5'>
          <span className={` text-col_gray_dark uppercase`}>
            Explore our services
          </span>
          <h2
            className={` text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl px-10 md:px-0 pt-5 md:max-w-[30%] text-center`}
          >
            From blueprint to key in hand
          </h2>
        </div>
        <div ref={mainContainerRef} className='flex'>
          <div
            ref={fadeInTextContainerRef}
            className='md:w-1/2 flex flex-col md:items-end px-3 md:px-0'
          >
            <div className='h-auto md:h-screen flex flex-col md:items-center justify-center w-full  xl:max-w-[80%] text-left px-4 md:px-12 pb-6 lg:px-20 pt-6 bg-col_white md:bg-transparent rounded-xl'>
              <h3
                className={` md:max-w-full text-left text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl `}
              >
                Custom design & architecture
              </h3>
              <span
                className={` text-col_gray_light pt-6 mb-6 md:pb-0 md:pt-6 md:max-w-full md:text-lg  `}
              >
                EcoHomes creates personalized, eco-friendly homes tailored to
                your vision. We blend{' '}
                <b>modern design with sustainable architecture</b>, ensuring
                each home is unique and <b>energy-efficient</b>.
              </span>
              <div className='md:hidden w-full h-[300px]'>
                <Image
                  className=' w-full h-full object-cover rounded-2xl '
                  src={architects}
                  alt='modern house in nature'
                />
              </div>
            </div>
            <div className='animated-text h-auto md:h-screen flex flex-col md:items-center justify-center w-full  xl:max-w-[80%] text-left px-4 md:px-12 pb-6 lg:px-20 pt-6 bg-col_white md:bg-transparent rounded-xl'>
              <h3
                className={` md:max-w-full text-left text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl `}
              >
                Interior design & smart solutions
              </h3>
              <span
                className={` text-col_gray_light pt-6 mb-6 md:pb-0 md:pt-6 md:max-w-full md:text-lg  `}
              >
                Our interiors focus on <b>style</b>, <b>comfort</b>, and{' '}
                <b>functionality</b>. With
                <b>integrated smart home technology</b>, we offer automated
                systems that enhance convenience while{' '}
                <b>reducing energy consumption</b>.
              </span>
              <div className='md:hidden w-full h-[300px]'>
                <Image
                  className=' w-full h-full object-cover rounded-2xl '
                  src={interior}
                  alt='modern house in nature'
                />
              </div>
            </div>
            <div className='animated-text h-auto md:h-screen flex flex-col md:items-center justify-center w-full  xl:max-w-[80%] text-left px-4 md:px-12 pb-6 lg:px-20 pt-6 bg-col_white md:bg-transparent rounded-xl'>
              <h3
                className={` md:max-w-full text-left text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl `}
              >
                Affordable solutions & financing
              </h3>
              <span
                className={` text-col_gray_light pt-6 mb-6 md:pb-0 md:pt-6 md:max-w-full md:text-lg  `}
              >
                We provide <b>cost-effective</b> eco-homes with flexible
                financing options, making sustainable living accessible to
                everyone without compromising quality or budget.
              </span>
              <div className='md:hidden w-full h-[300px]'>
                <Image
                  className=' w-full h-full object-cover rounded-2xl '
                  src={cabin2}
                  alt='modern house in nature'
                />
              </div>
            </div>
            <div className='animated-text h-auto md:h-screen flex flex-col md:items-center justify-center w-full  xl:max-w-[80%] text-left px-4 md:px-12 pb-6 lg:px-20 pt-6 bg-col_white md:bg-transparent rounded-xl'>
              <h3
                className={` md:max-w-full text-left text-col_gray_dark font-medium text-3xl md:text-4xl xl:text-5xl `}
              >
                Mobile & permanent eco-homes
              </h3>
              <span
                className={` text-col_gray_light pt-6 mb-6 md:pb-0 md:pt-6 md:max-w-full md:text-lg  `}
              >
                Whether you are seeking a mobile home or a permanent residence,
                EcoHomes delivers <b>sustainable</b>, <b>energy-efficient</b>{' '}
                solutions for both, tailored to your lifestyle and environmental
                needs.
              </span>
              <div className='md:hidden w-full h-[300px]'>
                <Image
                  className=' w-full h-full object-cover rounded-2xl '
                  src={LeftImage}
                  alt='modern house in nature'
                />
              </div>
            </div>
          </div>

          <div className='hidden md:flex w-1/2 h-screen flex-col justify-center md:sticky top-0 '>
            <div
              ref={pinnedImageContainerRef}
              className=' rounded-2xl h-[50vh] md:w-[40vw] lg:w-[35vw] relative overflow-hidden'
            >
              <Image
                src={architects}
                alt='Modern house'
                className='slide-image rounded-3xl w-full h-full object-cover absolute '
              />
              <Image
                src={interior}
                alt='Modern house'
                className='slide-image slide-image-wf rounded-3xl w-full h-full object-cover absolute '
              />
              <Image
                src={cabin2}
                alt='Modern house'
                className='slide-image slide-image-wf  rounded-3xl w-full h-full object-cover absolute '
              />
              <Image
                src={LeftImage}
                alt='Modern house'
                className='slide-image slide-image-wf  rounded-3xl w-full h-full object-cover absolute'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='h-auto py-12 md:py-0 px-2 md:px-0 md:h-screen bg-col_white_background flex justify-center items-center '>
        <div className='h-[300px] md:h-[90vh] md:w-[90vw] flex items-center justify-center rounded-2xl relative'>
          <Image
            src={boxForestCabin}
            alt='Modern house'
            className='w-full h-full z-0 object-cover rounded-2xl'
          />
          <div className='h-full w-full z-0 bg-black opacity-20 absolute rounded-2xl inset-0'></div>
          <div className='absolute flex flex-col md:max-w-[50%] items-center justify-center '>
            <h3
              className={` z-20 text-center text-3xl sm:text-4xl md:text-5xl px-2 md:px-0 font-semi-bold text-col_white mb-4 md:mb-12`}
            >
              Get in touch to start your eco-living journey today!
            </h3>
            <Button
              variant='outline'
              className='z-20 bg-col_white py-5 px-2 pl-4 rounded-full border-gray-200 hover:bg-gray-100'
            >
              <span className={`mr-2 text-col_gray_dark `}>
                Get Started Now!
              </span>
              <span className='relative flex h-8 w-8 items-center justify-center'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex h-full w-full items-center justify-center rounded-full bg-green-500'>
                  <ChevronRight className='h-4 w-4 text-white' />
                </span>
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
