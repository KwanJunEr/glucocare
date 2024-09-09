'use client';
import React from 'react'
import { Input,FloatButton,Card} from 'antd';
import CommunityContentCards from '@/components/communitycomponents/communitycontentcard';
import { CgProfile } from "react-icons/cg";

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

      <div className='col-span-1 flex flex-col'>
      <div className='flex flex-col space-y-5 '>
  {/* Trending Health Post Card */}
  <Card
    title="Trending Health Post"
    extra={<a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">More <i className="ml-1 fa fa-arrow-right"></i></a>}
    style={{ width: 300 }}
    className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
  > 
    <div>

    <p className="text-gray-700">"5 Tips for Managing Diabetes Daily" - Learn practical tips from experts.</p>
    <button className=" my-2 bg-gray-100 text-white px-2 py-1 rounded-sm shadow hover:bg-gray-400 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300">
    <p className='text-sm text-black'>Read More</p>
  </button>
    </div>

    <hr className='mb-2'/>
    <div>  
       <p className="text-gray-700">"Healthy Recipes: Delicious and Diabetes-Friendly" - Discover new meal ideas.</p>
    <button className=" my-2 bg-gray-100 text-white px-2 py-1 rounded-sm shadow hover:bg-gray-400 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300">
    <p className='text-sm text-black'>Read More</p>
  </button>
    </div>
 
    <hr className='mb-2'/>
    <div>
  <p className="text-gray-700">"Understanding Blood Sugar Levels" - A comprehensive guide for beginners.</p>
  <button className=" my-2 bg-gray-100 text-white px-2 py-1 rounded-sm shadow hover:bg-gray-400 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300">
    <p className='text-sm text-black'>Read More</p>
  </button>
    </div>
    

    <hr className='mb-2'/>
  </Card>

  {/* Friends List Card */}
  <Card
    title="Friends List"
    extra={<a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">More <i className="ml-1 fa fa-arrow-right"></i></a>}
    style={{ width: 300 }}
    className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
  >
    <div className='flex flex-col space-y-3'>
      <div className='flex flex-row space-x-2'>
        <CgProfile size={30}/>
        <div>
           <p className="text-gray-700 font-bold">John Doe</p>
        <p>Focusing on a low-carb diet.</p>
        </div>   
      </div>
      <hr className='mb-2'/>

      <div className='flex flex-row space-x-2'>
        <CgProfile size={30}/>
        <div>
           <p className="text-gray-700 font-bold">Jane Smith</p>
        <p>Joined a Fitness Group For Diabetics</p>
        </div>   
      </div>
      <hr className='mb-2'/>

      <div className='flex flex-row space-x-2'>
        <CgProfile size={30}/>
        <div>
           <p className="text-gray-700 font-bold">Micheal Brown</p>
        <p>Learning About Mind</p>
        </div>   
      </div>
      <hr className='mb-2'/>
    </div>


   
  </Card>

  {/* Groups You Have Joined Card */}
  <Card
    title="Groups You Have Joined"
    extra={<a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">More <i className="ml-1 fa fa-arrow-right"></i></a>}
    style={{ width: 300 }}
    className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
  >
    <p className="text-gray-700 font-bold text-center">No Groups Joined Yet</p>
  </Card>
</div>
     
    <FloatButton />
      </div>
    </div>
    </div>
   
  )
}

export default Community
