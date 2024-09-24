import React from 'react'

const HealthCards = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
  
  
    <dl className="mt-2 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>
  
        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
      </div>
  
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>
  
        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
      </div>
  
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>
  
        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
      </div>
  
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>
  
        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
      </div>
    </dl>
  </div>
  )
}

export default HealthCards
