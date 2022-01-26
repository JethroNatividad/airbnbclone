import Image from 'next/image';
import React from 'react';

const ExploreCard = ({ img, location, distance }) => {
    return <div className='flex items-center space-x-4 my-4 mx-2'>
        <div className='h-10 w-10 relative'>
            <Image src={img} layout='fill' alt='location' />
        </div>
        <div>
            <p>{location}</p>
            <p>{distance}</p>
        </div>
        {/* <p>{location}</p> */}
    </div>;
};

export default ExploreCard;
