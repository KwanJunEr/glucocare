import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiSolidBell } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className='w-full flex flex-row bg-blue-1 py-2 px-6 justify-between items-center z-50 shadow-sm max-sm:py-2 opacity-85'>
      <div className='flex flex-row items-center'>
        <Link href={'/'}>
          <Image
            src={'/icons/official_icon.png'}
            alt="logo"
            height={45}
            width={45}
            
          />
        </Link>
        <p className='text-2xl font-extrabold py-2 ml-4 max-sm:hidden'>GlucoCare</p>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex items-center justify-center p-2  mt-1 rounded-full hover:bg-blue-2 transition-colors hover:text-stone-600'>
          <BiSolidBell size={24} className="text-black" />
        </div>
        <div>
          <Image
            src={'/icons/icons8-user-profile-48.png'}
            alt="profile-icon"
            width={42}
            height={42}
            className='rounded-full border-black border'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
