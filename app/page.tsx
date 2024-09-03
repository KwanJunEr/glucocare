"use client";
import { motion } from "framer-motion";

import { Button, Card, Badge } from "antd";

import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ProfilePictureCard from "@/components/ProfilePictureCard";
import ProfileInfo from "@/components/ProfileInfo";
const words1 = `Empowering Your Journey to Better Diabetes Control.`;

const words = [
  {
    text: "Welcome,",
  },
  {
    text: "Kwan",
  },
  {
    text: "Jun",
  },
  {
    text: "Er",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-4 mb-4 flex flex-col md:flex-col items-start w-full space-x-5 justify-start">
        {/*Text Parts*/}
        <div className="flex flex-col">
          <TypewriterEffectSmooth words={words} />
          <TextGenerateEffect words={words1} />
        </div>
        {/*Text Parts*/}
      </div>

      {/*Profile Carsd*/}
      <div className="py-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
        <ProfilePictureCard />
        <ProfileInfo />
      </div>
      {/*Profile Carsd*/}

      <div className="py-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
        <Card
          hoverable
          title="Quick Actions"
          className="md:w-[400px] w-full !cursor-default"
        >
         
        </Card>
        <Card
          hoverable
          title="Daily Health CheckIns"
          extra={<Button>Add Reminder</Button>}
          className="md:w-[800px] w-full !cursor-default"
        >

<div className="border-b  pb-2 shadow-sm flex flex-row items-center justify-between">
            <div className="flex flex-col space-y-1">
              <p className="">Eat Medicine</p>
              <p>8.30a.m.</p>
            </div>
            <Badge color="red" text="Missed" />
          </div>

          <div className="border-b  py-2 shadow-sm flex flex-row items-center justify-between">
            <div>
              <p className="">Eat Medicine</p>
              <p>8.30a.m.</p>
            </div>
            <Badge color="green" text="Done" />
          </div>

          <p>Card content</p>
          <p>Card content</p>


        </Card>
        </div>

        <div className="py-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
          <Card
            hoverable
            title="Recent Health Data"
            extra={<Button>Add Reminder</Button>}
            className="md:w-[600px] w-full !cursor-default"
          ></Card>

          <Card
            hoverable
            title="Reminders"
            extra={<Button>Add Reminder</Button>}
            className="md:w-[600px] w-full !cursor-default"
          ></Card>
       
      </div>
    </div>
  );
}
