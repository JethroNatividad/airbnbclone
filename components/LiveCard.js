import Image from 'next/image';
import React from 'react';

const LiveCard = ({ img, title }) => {
    console.log(img);
    return <div>
        <div className='h-80 w-80 relative mb-2'>
            <Image src={img} layout='fill' objectFit='cover' alt='title' className='rounded-lg' />
        </div>
        <h2 className='text-lg'>{title}</h2>

    </div>;
};

export default LiveCard;
