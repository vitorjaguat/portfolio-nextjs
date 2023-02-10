import Image from 'next/image';
import { useEffect } from 'react';
import propertyImg from '../../public/assets/projects/property.jpeg';

export default function property({ setNavColor }) {
  useEffect(() => {
    setNavColor('bg-transparent');
  }, []);

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1 translate-y-[-100px]'
          src={propertyImg}
          alt='screenshots'
        />
      </div>
    </div>
  );
}
