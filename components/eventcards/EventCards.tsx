import React from "react";

const EventCards = ({img, title, date, time, day} : any) => {
  return (
    <div className="shadow-md p-3 w-[280px] rounded-sm">
      <a href="#" className="block">
        <img
          alt=""
          src= {img}
          className="h-60 w-full object-cover "
        />

        <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">
         {title}
        </h3>

        <div className="font-bold mt-1 flex flex-col space-y-1">
          <h5 className="mt-1 max-w-sm text-gray-700 font-bold text-lg">
         Date: {date}
        </h5>
        <p>
          <span>{day}</span> <span>{time}</span>
        </p>

        
        </div>
        <div className="flex items-end justify-end mt-3 ">
          <button className="shadow-md bg-blue-300 font-bold hover:opacity-80 rounded-md p-2">Book Event</button>
        </div>
        
      </a>
    </div>
  );
};

export default EventCards;
