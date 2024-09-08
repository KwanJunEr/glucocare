'use client';
import React from 'react'
import { Input,FloatButton,Card} from 'antd';
import CommunityContentCards from '@/components/communitycomponents/communitycontentcard';

const Community = () => {
  const {Search} = Input;
  return (
    <div>
      <h1 className='font-semibold text-4xl text-gray-700'>Community</h1>
      <h3 className='my-4 text-lg'>Join the conversation, learn from personal stories, and access expert advice to help manage your journey with diabetes.</h3>
       <div className='grid grid-cols-4 gap-7'>
 
      <div className='col-span-3  '>
        <div className='mt-6'>
           <Search
      className=''
      placeholder="Serach for @Keywords, @Hastags"
      allowClear
      enterButton="Search"
      size="large"
     width={500}
     height={50}
    />
        </div>
      <div className='flex flex-col space-y-7 mt-5'>
        <CommunityContentCards/>
        <CommunityContentCards/>
        <CommunityContentCards/>
        <CommunityContentCards/>
      </div>
      </div>

      <div className='col-span-1 bg-blue-100'>

    <FloatButton />
      </div>
    </div>
    </div>
   
  )
}

export default Community
