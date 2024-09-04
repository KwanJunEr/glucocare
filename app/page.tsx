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
import { useState } from "react";
import QuickActionList from "@/components/quickactionscomponents/quickactionlist";
import GotoButton from "@/components/quickactionscomponents/gotoButton";

import DoctorAppointmentCard from "@/components/dashboardcomponents/doctorAppointmentCard";
import RecentHealthDataTable from "@/components/dashboardcomponents/RecentHealthDataTable";
const words1 = `Empowering Your Journey to Better Diabetes Control.`;

const words = [
  {
    text: "Welcome,",
  },
  {
    text: "Mr",
  },
  {
    text: "James",
  },
  {
    text: "Doe",
  },
];
export default function Home() {
  const [isCompleted, setisCompleted] = useState(false);
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
          <div className="flex flex-col space-y-2">
            <div className="p-3 border-b-2  flex flex-row justify-between">
              <QuickActionList direction={"Resources"} />
              <GotoButton />
            </div>

            <div className="p-3 border-b-2  flex flex-row justify-between">
              <QuickActionList direction={"Community"} />
              <GotoButton />
            </div>

            <div className="p-3 border-b-2  flex flex-row justify-between">
              <QuickActionList direction={"Resources"} />
              <GotoButton />
            </div>
          </div>
        </Card>
        <Card
          hoverable
          title="Daily Health CheckIns"
          extra={<Button>Add Reminder</Button>}
          className="md:w-[800px] w-full !cursor-default max-h-[300px] overflow-auto scroll-smooth"
        >
          <div></div>
          <div className="flex flex-row items-center justify-between p-4 bg-white shadow-md rounded-md mt-2 ">
            {/* Medication and Time Details */}
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-lg">
                Check Blood Sugar (Fasting)
              </p>
              <p className="text-sm text-gray-500">7.00 a.m.</p>
              {/* Additional Information (e.g., dosage, notes) */}

              <p className="text-sm text-gray-700">Dosage: 70-130mg/dL</p>
              <p className="text-sm text-gray-700">
                Notes: Record your levels before Breakfast
              </p>
            </div>
            {/* Complete Button */}
            <div>
              <Button
                type="primary"
                className="bg-green-500 hover:bg-green-600"
              >
                Complete
              </Button>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between p-4 bg-white shadow-md rounded-md mt-2 ">
            {/* Medication and Time Details */}
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-lg">Eat Medicine</p>
              <p className="text-sm text-gray-500">8:30 a.m.</p>
              {/* Additional Information (e.g., dosage, notes) */}

              <p className="text-sm text-gray-700">Dosage: 1 Tablet</p>
              <p className="text-sm text-gray-700">Notes: Take with water</p>
            </div>
            {/* Complete Button */}
            <div>
              <Button
                type="primary"
                className="bg-green-500 hover:bg-green-600"
              >
                Complete
              </Button>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between p-4 bg-white shadow-md rounded-md mt-2">
            {/* Medication and Time Details */}
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-lg">Eat Medicine (2)</p>
              <p className="text-sm text-gray-500">12.30p.m.</p>
              {/* Additional Information (e.g., dosage, notes) */}

              <p className="text-sm text-gray-700">Dosage: 1 Tablet</p>
              <p className="text-sm text-gray-700">
                Notes: Check blood sugar levels first then eat metformin
              </p>
            </div>
            {/* Complete Button */}
            <div>
              <Button
                type="primary"
                className="bg-green-500 hover:bg-green-600"
              >
                Complete
              </Button>
            </div>
          </div>

          {/* <Badge color="green" text="Done" /> */}
        </Card>
      </div>

      <div className="py-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
        <Card
          hoverable
          title="Recent Health Data"
          extra={<Button>Add Reminder</Button>}
          className="md:w-[600px] w-full !cursor-default"
        >
          <div>
            <RecentHealthDataTable/>
          </div>
        </Card>

        <Card
          hoverable
          title="Doctor Appointments "
          extra={<Button>Add Reminder</Button>}
          className="md:w-[600px] w-full !cursor-default"
        >
          <div className="flex flex-col space-y-3">
            <DoctorAppointmentCard
              doctor="Dr. Smith"
              appointmentDate={"19th September 2024"}
              appointmentTime={"9 a.m."}
              agenda={"Body Checkup"}
              location={"Solaris Dutamas"}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
