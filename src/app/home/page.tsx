import React from 'react';
import Image from 'next/image';

const landingImage = 'https://placehold.co/1920x1080';

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen'>
        <Image src={landingImage} alt='Landing Image' fill />
      </div>
      <div>Home</div>
    </>
  );
}
