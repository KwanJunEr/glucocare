"use client";
import React from "react";
import { TimeSpent } from "@/components/exercise/timespent";
import { ExerciseType } from "@/components/exercise/exercisetype";
import { DayIntensity } from "@/components/exercise/dayintensity";
import ExerciseCards from "@/components/exercise/exercisecards";

const Exercise = () => {
  return (
    <div className="flex flex-col">
      <div className="my-2">
        <h1 className="text-4xl font-semibold text-gray-800">
          Your Exercise Performance
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Track your daily exercises to live a healthier lifestyle
        </p>
      </div>
      {/*Exercise Cards*/}
      <div className="flex flex-row space-x-3 justify-evenly">
        <div className=" bg-white shadow-lg rounded-lg p-4  my-4  min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Duration Exercise Today
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">1 Hour</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Steps Walked Today
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">8500 Steps</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Calories Burned Today
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">350 kcal</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Distance Covered
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">4.2km</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Daily Goal Achievements
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">85%</h5>
        </div>
      </div>
      {/*Charts*/}
      <div className="my-5">
        <div className="flex flex-row justify-between my-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Your Exercise Performance Dashboard
          </h3>
          <button className="max-h-[40px] px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Add Data
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <TimeSpent />
          <ExerciseType />
          <DayIntensity />
        </div>
      </div>
      {/*Recommended Exercise*/}
      <div className="flex flex-col space-y-5">
        <div>
        <h1>Your Recommended Exercise </h1>
        <div className="flex flex-row justity-between">
            <h5>Here are a few recommended exercise that you can perform to grow healthier</h5>
            <button>View More</button>
        </div>
       
        </div>

        <div className="flex flex-row space-x-6">
            <ExerciseCards/>
            <ExerciseCards/>
            <ExerciseCards/>
        </div>

      </div>
      
    </div>
  );
};

export default Exercise;
