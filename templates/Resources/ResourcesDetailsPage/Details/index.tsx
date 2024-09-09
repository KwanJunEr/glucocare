'use client'
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { useState } from "react";


const details = [
    {
        title: "Resource Type",
        content: "Educational Guide",
        icon: "book",
    },
    {
        title: "Time to Read",
        content: "Approx. 2 hours",
        icon: "clock",
    },
    {
        title: "Language",
        content: "Available in English, French, German",
        icon: "earth",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) =>{
    const [data, setData] = useState();
    const fetchData = async () => {
        const response = await (await fetch("../../../../resource.json")).json()

        setData(response)
            
    }
    return (
    <>
    {console.log(data)}
        <div className="flex justify-center items-center w-21 h-21 mb-2.5 p-4 border border-n-1 rounded-full dark:bg-white dark:border-white">
            <Image
                className="w-full"
                src="/images/diabetes-logo.svg"
                width={48}
                height={48}
                alt="Diabetes Resource Logo"
                />
        </div>
        <div className="mb-1.5 text-h4">
            Managing Blood Glucose with Technology
        </div>
        <div className="mb-6 text-sm">
            Learn how to monitor and control blood glucose levels using modern technology and devices.
        </div>
        <div className="flex items-center text-xs">
            <div className="shrink-0 w-4 -mt-0.5 mr-1.5">
                <Image
                    className="w-full"
                    src="/images/star.svg"
                    width={16}
                    height={16}
                    alt="Rating Star"
                    />
            </div>
            <div className="mr-1.5 font-bold">4.8</div>
            <div className="">(3,000) 50K users</div>
        </div>
        <div className="mt-5 pt-5 border-t border-dashed border-n-1 dark:border-white">
            <div className="mb-1.5 font-bold">Resource Details</div>
            <div className="mb-4 text-sm">
                This resource is designed for individuals who want to learn effective blood glucose management using available health technologies.
            </div>
            <div className="">
                {details.map((item, index) => (
                    <div
                    className="flex items-center mb-4 text-sm last:mb-0"
                    key={index}
                    >
                        <div className="flex justify-center items-center w-10 h-10 mr-4 border border-n-1 dark:border-white dark:bg-white">
                            <Icon name={item.icon} />
                        </div>
                        <div className="grow">
                            <div className="font-bold">{item.title}</div>
                            <div>{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex mt-5 pt-5 border-t border-dashed border-n-1 dark:border-white">
            <button className="btn-blue btn-medium grow dark:border-transparent">
                <Icon name="bookmark" />
                <span>Add to Library</span>
            </button>
            <button className="btn-stroke btn-medium btn-square shrink-0 ml-1.5">
                <Icon name="email" />
            </button>
            <button className="btn-stroke btn-medium btn-square shrink-0 ml-1.5">
                <Icon name="share" />
            </button>
        </div>
    </>
)};

export default Details;
