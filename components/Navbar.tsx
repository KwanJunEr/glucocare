import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full flex flex-row bg-blue-1 py-4 px-6 justify-between z-50 '>
      <div >
        <Link href={'/'}>
        
        </Link>
        <p>GlucoCare</p>
      </div>
      <div className='flex flex-row space-x-4'>

      </div>
    </div>
  )
}

export default Navbar
