import React from 'react';
import Image from 'next/image';
const Logo = () => {
    return (
        <div className='flex items-center gap-1 '>
            <Image
                src="/logo/logo.png"
                alt="True Care Logo"
                width={60}
                height={50}
            />
            <div>
                <h6 className='font-bold text-3xl text-primary'> <span className='text-accent'>True</span> care</h6>
                <p className='text-[7px]'>Baby Sitting & Elderly Care Service Platform</p>
            </div>
        </div>
    );
};

export default Logo;





