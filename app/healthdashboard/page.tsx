import HealthCards from '@/components/healthdashboardcomponent/HealthCards'
import { StatsRingCard } from '@/components/healthdashboardcomponent/HealthGoal/HealthGoal'
import Introcard from '@/components/healthdashboardcomponent/Introcard'
import { HeartRateCard } from '@/components/healthdashboardcomponent/HeartRateCard'
import { BloodGlucoseLevelCard } from '@/components/healthdashboardcomponent/BloodGlucoseLevelCard'
import { WeightCard } from '@/components/healthdashboardcomponent/WeightCard'
import { BloodPressureCard } from '@/components/healthdashboardcomponent/BloodPressureCard'
import React from 'react'

const HealthDashboard = () => {
  return (
    <div className='flex flex-col'>
      {/*Introductory and Health Goal*/}
      <div className='flex flex-row space-x-5'>
          <Introcard/>
           <StatsRingCard/>
        {/*Health Goal*/}

      </div>
      <div className='mt-3'>
      <WeightCard/>
      </div>
      {/*Graphs and Dashboard 6 Graphs */}
      <div className='flex flex-col mt-2'>
        {/* Three Graphs*/}
        <div className='flex flex-row space-x-4'>
         
          <BloodGlucoseLevelCard/>
          <HeartRateCard/>
          <BloodPressureCard/>
        
        </div>

  

      </div>
      
    </div>
  )
}

export default HealthDashboard
