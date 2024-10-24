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
        <div className='embla__slide h-[300px] relative md:h-[400px]'>
          <div className='w-full h-full absolute hover:bg-black hover:bg-opacity-20 opacity-0 hover:opacity-100 transition-all rounded-xl z-0'>
            <h2 className='text-4xl absolute bottom-6 left-6 text-col_white_3  transition-all z-10'>
              Project 1
            </h2>
          </div>
          <Image
            src={cabin1}
            alt='Modern house'
            className=' w-full h-full object-cover rounded-xl'
          />
        </div>
        <div className='embla__slide h-[300px] md:h-[400px]'>
          <div className='w-full h-full absolute hover:bg-black hover:bg-opacity-20 opacity-0 hover:opacity-100 transition-all rounded-xl z-0'>
            <h2 className='text-4xl absolute bottom-6 left-6 text-col_white_3  transition-all z-10'>
              Project 2
            </h2>
          </div>
          <Image
            src={cabin2}
            alt='Modern house'
            className=' w-full h-full object-cover rounded-xl'
          />
        </div>
        <div className='embla__slide h-[300px] md:h-[400px]'>
          <div className='w-full h-full absolute hover:bg-black hover:bg-opacity-20 opacity-0 hover:opacity-100 transition-all rounded-xl z-0'>
            <h2 className='text-4xl absolute bottom-6 left-6 text-col_white_3  transition-all z-10'>
              Project 3
            </h2>
          </div>
          <Image
            src={cabin3}
            alt='Modern house'
            className=' w-full h-full object-cover rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
