"use client"
import React from 'react';

import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className='h-screen z-20'>
      <nav className='h-full flex flex-col bg-gradient-to-b from-gray-100 to-white border-r border-gray-300 shadow-lg w-[220px] overflow-auto mt-0.5'>
        <div className='flex flex-col justify-between h-full px-6 py-4'>
          <div className='border p-3'>
            Johnson
        
   
          </div>
       
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
