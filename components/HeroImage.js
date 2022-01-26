import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
    return <div className='relative h-[30vh] md:h-[50vh] lg:h-[70vh]  '>
        <Image className='w-screen object-cover' layout='fill' src="https://links.papareact.com/0fm" objectPosition='center' alt='heroimg' />
        <div className='absolute h-full w-full flex flex-col justify-center items-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button className='bg-white py-5 px-10 text-purple-500 rounded-full shadow-md font-bold hover:shadow-lg active:scale-90 transition-all duration-150 mt-2 md:mt-5'>I'm Flexible</button>
        </div>
    </div>;
};

export default HeroImage;
