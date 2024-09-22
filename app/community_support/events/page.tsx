"use client";
import React from "react";
import { Form, Select, Input } from "antd";
import EventCards from "@/components/eventcards/EventCards";


const Events = () => {
  const { Search } = Input;
  return (
    <div>
      <div className="flex flex-col space-y-2 my-4">
        <h1 className="text-4xl font-semibold">Explore Events</h1>
        <h5 className="text-xl">
          Discover a variety of health events, workshops, and webinars designed
          to help you manage diabetes.{" "}
        </h5>
      </div>
      <div className="grid grid-cols-4 mt-2">
        <div className="col-span-3 flex flex-col bg-red-50">
          <div className="flex flex-row space-x-2">
            <Select
              placeholder="Select An Event Category"
              className="w-[200px]"
            >
              <Select.Option value="demo">Nutrition</Select.Option>
              <Select.Option value="demo">Fitness</Select.Option>
            </Select>

            <Select placeholder="Choose a Month" className="w-[200px]">
              <Select.Option value="demo">January</Select.Option>
            </Select>

            <Select placeholder="Free or Paid" className="w-[200px]">
              <Select.Option value="demo">Free </Select.Option>
              <Select.Option value="demo">Paid </Select.Option>
            </Select>
            <div>
              <Search
                className=""
                placeholder="Serach for @Keywords, @Hastags"
                allowClear
                enterButton="Search"
                size="middle"
                width={"500px"}
                height={1}
              />
            </div>
          </div>
          {/*Events*/}
          <div className="mt-5 flex flex-row space-x-5 ">
            <EventCards/>
            <EventCards/>
            <EventCards/>
          
          </div>

          <div className="mt-5 flex flex-row space-x-5 ">
            <EventCards/>
            <EventCards/>
            <EventCards/>
          
          </div>
        </div>
        <div className="col-span1">
          <div className="shadow-sm px-6 py-2">
            <h3>Past Events</h3>


          </div>


        </div>
      </div>
    </div>
  );
};

export default Events;
