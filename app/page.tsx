"use client";
import { motion } from "framer-motion";

import { Button, Card } from "antd";
import "./globals.css";

import {
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
import { styleText } from "util";
const words1 = `Empowering Your Journey to Better Diabetes Control.`;

const words = [
  {
    text: "Welcome,",
    styleText : "40px",
  },
  {
    text: "Mr",
    styleText : "40px",
  },
  {
    text: "James",
    styleText : "40px",
  },
  {
    text: "Doe",
    styleText : "40px",
  },
  
];
export default function Home() {
  const [isCompleted, setisCompleted] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="py-4 mb-4 flex flex-col md:flex-col items-start w-full space-x-5 justify-start">
        {/* Text Parts */}
        <div className="flex flex-col">
          <TypewriterEffectSmooth words={words} className="sizetext" />
          <TextGenerateEffect words={words1} />
        </div>
      </div>

      {/* Profile Cards */}
      <div className="py-2 flex flex-row space-x-5">
        <ProfilePictureCard />
        <ProfileInfo />
      </div>

      {/* Quick Actions and Health Checkins */}
      <div className="py-2 flex flex-row space-x-5">
        <Card
          hoverable
          title="Quick Actions"
          className="md:w-[700px] w-full !cursor-default"
        >
          <div className="flex flex-col space-y-2">
            <div className="p-3 border-b-2 flex flex-row justify-between">
              <QuickActionList direction={"Resources"} />
              <GotoButton />
            </div>

            <div className="p-3 border-b-2 flex flex-row justify-between">
              <QuickActionList direction={"Community"} />
              <GotoButton />
            </div>

            <div className="p-3 border-b-2 flex flex-row justify-between">
              <QuickActionList direction={"Resources"} />
              <GotoButton />
            </div>
          </div>
        </Card>
        <Card
          hoverable
          title="Daily Health CheckIns"
          extra={<Button>Add Health CheckIns</Button>}
          className="md:w-[800px] w-full !cursor-default max-h-[300px] overflow-auto scroll-smooth"
        >
          <div className="flex flex-row items-center justify-between p-4 bg-white shadow-md rounded-md mt-2">
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-lg">
                Check Blood Sugar (Fasting)
              </p>
              <p className="text-sm text-gray-500">7.00 a.m.</p>
              <p className="text-sm text-gray-700">Dosage: 70-130mg/dL</p>
              <p className="text-sm text-gray-700">
                Notes: Record your levels before Breakfast
              </p>
            </div>
            <div>
              <Button type="primary" className="bg-green-500 hover:bg-green-600">
                Complete
              </Button>
            </div>
          </div>

          {/* Similar blocks for other health check-ins */}
        </Card>
      </div>

      {/* Recent Health Data and Doctor Appointments */}
      <div className="py-2 flex flex-row space-x-5">
        <Card
          hoverable
          title="Recent Health Data"
          extra={<Button>Add Health Data</Button>}
          className="w-[700px]  !cursor-default"
        >
          <div>
            <RecentHealthDataTable />
          </div>
        </Card>

        <Card
          hoverable
          title="Doctor Appointments"
          extra={<Button>Add Appointments</Button>}
          className="w-[500px]  !cursor-default"
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
