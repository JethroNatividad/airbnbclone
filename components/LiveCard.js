import Image from 'next/image';
import React from 'react';

const LiveCard = ({ img, title }) => {
    return <div>
        <div className='h-94 relative'>

            <Image src={img} layout='fill' objectFit='contain' alt='title' className='rounded-lg' />
        </div>
        <h2>{title}</h2>
    </div>;
};

export default LiveCard;
