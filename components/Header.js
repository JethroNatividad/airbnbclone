import Image from 'next/image';

const Header = () => {
    return <header className='sticky p-5 md:px-10 shadow-md grid grid-cols-3' >
        <div className='h-10 relative flex cursor-pointer'>
            <Image layout='fill' src="https://links.papareact.com/qd3" objectFit='contain' objectPosition='left' alt='airbnb' />
        </div>
        {/* search */}
        <div>
            <input placeholder='Search here bich' />
        </div>

        {/* misc */}
    </header>;
};

export default Header;
