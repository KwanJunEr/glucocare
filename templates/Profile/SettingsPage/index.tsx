"use client"; 
import { useState } from "react";
import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import Tabs from "@/components/Tabs";
import Icon from "@/components/Icon";
import Account from "./Account";
import Security from "./Security";
import SocialNetworks from "./SocialNetworks";
import Notifications from "./Notifications";

const SettingsPage = () => {
    const [type, setType] = useState<string>("account");

    const types = [
        {
            title: "Account",
            value: "account",
        },
        {
            title: "Security",
            value: "security",
        },
        {
            title: "Social Networks",
            value: "social-networks",
        },
        {
            title: "APIs",
            value: "apis",
        },
        {
            title: "Notifications",
            value: "notifications",
        },
    ];

    return (
        <Layout title="Profile Settings">
            <div className="flex pt-4 lg:block">
                <div className="shrink-0 w-[20rem] 4xl:w-[14.7rem] lg:w-full lg:mb-8">
                    <Profile />
                </div>
                <div className="w-[calc(100%-20rem)] pl-[6.625rem] 4xl:w-[calc(100%-14.7rem)] 2xl:pl-10 lg:w-full lg:pl-0">
                    <div className="flex justify-between mb-6 md:overflow-auto md:-mx-5 md:scrollbar-none md:before:w-5 md:before:shrink-0 md:after:w-5 md:after:shrink-0">
                        <Tabs
                            className="2xl:ml-0 md:flex-nowrap"
                            classButton="2xl:ml-0 md:whitespace-nowrap"
                            items={types}
                            value={type}
                            setValue={setType}
                        />
                        <button className="btn-stroke btn-small shrink-0 min-w-[6rem] ml-4 md:hidden">
                            <Icon name="dots" />
                            <span>Actions</span>
                        </button>
                    </div>
                    {type === "account" && <Account />}
                    {type === "security" && <Security />}
                    {type === "social-networks" && <SocialNetworks />}
                    {type === "notifications" && <Notifications />}
                </div>
            </div>
        </Layout>
    );
};

export default SettingsPage;
