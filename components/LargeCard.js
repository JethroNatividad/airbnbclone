import Image from 'next/image';
import React from 'react';

const LargeCard = ({ title, img, description, buttonText }) => {
    return <div className='my-10 relative cursor-pointer'>
        <div className='relative h-96'>
            <Image src={img} layout='fill' objectFit='cover' alt='title' className='rounded-lg' />
        </div>
        <div className='absolute top-0 px-10 py-16'>
            <h1 className='text-3xl font-bold mb-2 w-64'>{title}</h1>
            <p className='text-lg mb-1'>{description}</p>
            <button className='bg-black text-white px-3 py-1 rounded-xl'>{buttonText}</button>
        </div>
    </div>;
};

export default LargeCard;
