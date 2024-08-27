'use client';
import { motion } from "framer-motion";

import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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
    <div>
      <div className="py-4 mb-4">
        <TypewriterEffectSmooth words = {words}/>
        <TextGenerateEffect words ={words1}/>
      </div>
      <div className="py-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
        <ProfilePictureCard/>
        <ProfileInfo/>
      </div>
      <div className="py-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
        <div>
          
        </div>
        <div>

        </div>
      </div>
    </div>

  );
}
