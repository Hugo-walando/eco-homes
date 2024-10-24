import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import cabin1 from '../public/images/cabin_project1.jpeg';
import cabin2 from '../public/images/cabin_project2.jpeg';
import cabin3 from '../public/images/cabin_project3.jpeg';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        <div className='embla__slide h-[200px] md:h-[400px]'>
          <Image
            src={cabin1}
            alt='Modern house'
            className=' w-full h-full object-cover rounded-xl'
          />
          <div className='w-full h-4 flex  flex-row sm:flex-col md:flex-row justify-between'>
            <span className='text-col_gray_dark'>France</span>
            <span className='text-col_gray_dark'>19 rjkrf fpze </span>
          </div>
        </div>
        <div className='embla__slide'>
          <div>
            <Image
              src={cabin2}
              alt='Modern house'
              className=' w-full h-full object-cover rounded-xl'
            />
            <div className='w-full h-4 flex  flex-row sm:flex-col md:flex-row justify-between'>
              <span className='text-col_gray_dark'>France</span>
              <span className='text-col_gray_dark'>19 rjkrf fpze </span>
            </div>
          </div>
        </div>
        <div className='embla__slide '>
          <Image
            src={cabin3}
            alt='Modern house'
            className=' w-full h-full object-cover rounded-xl'
          />
          <div className='w-full h-4 flex  flex-row sm:flex-col md:flex-row justify-between'>
            <span className='text-col_gray_dark'>France</span>
            <span className='text-col_gray_dark'>19 rjkrf fpze </span>
          </div>
        </div>
      </div>
    </div>
  );
}
