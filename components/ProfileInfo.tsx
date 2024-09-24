'use client'
import React from 'react'
import { Row,Col, Button } from 'antd'
import './componentindex.css';

const ProfileInfo = () => {
  return (
    <a
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 z-20 bg-white"

>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>
<div className='w-[1000px]  sm:overflow-auto profilecard'>
    <Row gutter={10}>
      <Col span={8} className='space-y-3'>
        <h3 className='text-lg font-bold text-blue-600'>Personal Details:</h3>
        <p className='text-base text-black'>Name : James Doe</p>
        <p className='text-base text-black'>Date of Birth: January 15, 1980</p>
        <p className='text-base text-black'>Age: 44 years old</p>
        <p className='text-base text-black'>Gender: Male</p>
        
      
      </Col>

      <Col span={8} className='space-y-3'>
      <h3 className='text-lg font-bold text-blue-600'>Health Condition:</h3>
      <p className='text-base text-black'>Diabetes Type: Type 2 Diabetes</p>
        <p className='text-base text-black'>Data of Diagnosis : March 2015</p>
        <p className='text-base text-black'>Medication: Metformin, Insulin</p>
        <p className='text-base text-black'>Latest HbA1c: 6.5%</p>
      
      </Col>

      <Col span={8} className='space-y-3'>
      <h3 className='text-lg font-bold text-blue-600'>Additional Information:</h3>
            <p className='text-base text-black'>Emergency Contact: Jane,Doe </p>
        <p className='text-base text-black'> Insurance Provider: <strong>None</strong></p>
        <p className='text-base text-black'>Policy Number: <strong>None</strong></p>
        <p className='text-base text-black'>Notes: Experiences with hypoglycemia.</p>
      </Col>


    </Row>
</div>
  

</a>
  )
}

export default ProfileInfo
