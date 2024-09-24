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
        <h1 className="text-3xl font-semibold">Latest Health Events</h1>
        <p className="text-gray-600 text-sm font-bold mt-2">
          {" "}
          Explore a diverse range of upcoming and past events focused on
          diabetes management, education and community support
        </p>
      </div>

      {/* Main Content: Filters and Events */}
      <div className="grid grid-cols-4 gap-8">
        {/* Left Section: Filters and Current Events */}
        <div className="col-span-3">
          {/* Filters Section */}
          <div className="flex flex-row items-center mb-6 space-x-4 font-bold">
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
            <EventCards
              img="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8fDB8fHww"
              title="Managing Diabetes: Tips for a Healthy Lifestyle"
              date="October 10, 2024"
              time="10:00 AM - 12:00 PM"
              day="Thursday"

            />

            <EventCards
              img="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMGFpfGVufDB8fDB8fHww"
              title="AI in Diabetes Management"
              date="November 2, 2024"
              time="2:00 PM - 4:30 PM"
              day="Saturday"
            />

            <EventCards
              img="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D"
              title="The Role of Nutrition in Diabetes Prevention"
              date="October 15, 2024"
              time="1:00 PM - 3:00 PM"
              day="Tuesday"
            />

            {/*Event Cards Row 2 */}

            <EventCards
              img="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D"
              title="Diabetes and Mental Health: Coping Strategies"
              date="November 7, 2024"
              time="4:00 PM - 6:00 PM"
              day="Thursday"
            />

            <EventCards
              img="https://images.unsplash.com/photo-1683028866998-dd7aed8c4980?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2x1Y29zZSUyMG1vbml0b3Jpbmd8ZW58MHx8MHx8fDA%3D"
              title="Innovations in Glucose Monitoring"
              date="December 3, 2024"
              time="11:00 AM - 1:30 PM"
              day="Tuesday"
            />

            <EventCards
              img="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRofGVufDB8fDB8fHww"
              title="Community Walk for Diabetes Awareness"
              date="October 21, 2024"
              time="8:00 AM - 10:00 AM"
              day="Monday"
            />
          </div>
        </div>

        {/* Right Section: Past Events */}
        <div className="col-span-1">
          <div className="shadow-sm p-4 bg-white rounded-md space-y-2">
            <h3 className="text-lg font-semibold mb-4">Past Events</h3>
            {/* Display past events here */}
            <PastEventCards
              title="Diabetes Awareness Walk: Step Towards a Healthier Future"
              description="A community event dedicated to raising awareness about diabetes and promoting healthier lifestyles"
            />
            <PastEventCards
              title="Living Well with Diabetes: Nutrition and Wellness Workshop"
              description="This interactive event will cover essential topics such as meal planning, healthy cooking demonstrations, and the importance of physical activity."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
