import React from 'react';
import Image from 'next/image';
import Cabin from '../public/images/3d-rendering-wooden-house_2.jpg';

export default function Home() {
  return (
    <>
      <div className=' w-full h-screen overflow-hidden'>
        <Image src={Cabin} alt='Cabin' />
        <div className='z-0 absolute inset-0 bg-black bg-opacity-30'></div>
      </div>
      <div>Home</div>
    </>
  );
}
