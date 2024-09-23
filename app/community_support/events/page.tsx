"use client";
import React from "react";
import { Form, Select, Input } from "antd";
import EventCards from "@/components/eventcards/EventCards";
import PastEventCards from "@/components/eventcards/PastEventCards";

const Events = () => {
  const { Search } = Input;

  return (
    <div className="p-6">
      {/* Heading Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Explore Events</h1>
        <p className="text-gray-600">Discover upcoming and past events</p>
      </div>

      {/* Main Content: Filters and Events */}
      <div className="grid grid-cols-4 gap-8">
        {/* Left Section: Filters and Current Events */}
        <div className="col-span-3">
          {/* Filters Section */}
          <div className="flex flex-row items-center mb-6 space-x-4">
            <Select placeholder="Choose a Month" className="w-[200px]">
              <Select.Option value="january">January</Select.Option>
              <Select.Option value="february">February</Select.Option>
              <Select.Option value="march">March</Select.Option>
              {/* Add other months here */}
            </Select>
            <Search placeholder="Search events" className="w-[300px]" />
          </div>

          {/* Current Events Section */}
          <div className="grid grid-cols-3 gap-5">
            {/* Event rows can be dynamically rendered here */}
            <EventCards />
            <EventCards />
            <EventCards />

            {/*Event Cards Row 2 */}
            <EventCards />
            <EventCards />
            <EventCards />
          </div>
        </div>

        {/* Right Section: Past Events */}
        <div className="col-span-1">
          <div className="shadow-sm p-4 bg-white rounded-md">
            <h3 className="text-lg font-semibold mb-4">Past Events</h3>
            {/* Display past events here */}
           <PastEventCards/>
           <PastEventCards/>
     
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
