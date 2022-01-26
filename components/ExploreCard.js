import Image from 'next/image';
import React from 'react';

const ExploreCard = ({ img, location, distance }) => {
    return <div className='flex items-center space-x-4 my-2 rounded-lg mx-2 hover:bg-gray-100 hover:scale-105 transition-all duration-200 ease-out cursor-pointer'>
        <div className='h-full w-10 relative rounded-lg '>
            <Image src={img} layout='fill' alt='location' className='rounded-lg' />
        </div>
        <div>
            <p>{location}</p>
            <p className='text-sm'>{distance}</p>
        </div>
        {/* <p>{location}</p> */}
    </div>;
};

export default ExploreCard;
