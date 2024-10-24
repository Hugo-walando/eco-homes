import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import boxForestCabin from '../public/images/3d-rendering-wooden-house2.jpg';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        <div className='embla__slide'>
          <Image src={boxForestCabin} alt='Modern house' />
        </div>
        <div className='embla__slide'>
          <Image src={boxForestCabin} alt='Modern house' />
        </div>
        <div className='embla__slide'>
          <Image src={boxForestCabin} alt='Modern house' />
        </div>
      </div>
    </div>
  );
}
