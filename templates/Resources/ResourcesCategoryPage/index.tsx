"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Tabs from "@/components/Tabs";
import Icon from "@/components/Icon";
import Pagination from "@/components/Pagination";
import Resource from "./Resources";

import { resources4 } from "@/mocks/resources";

const ResourcesCategoryPage = () => {
    const [search, setSearch] = useState<string>("");
    const [type, setType] = useState<string>("language");

    const typeTasks = [
        {
            title: "Language",
            value: "language",
        },
        {
            title: "Level",
            value: "level",
        },
        {
            title: "Duration",
            value: "duration",
        },
        {
            title: "Subject",
            value: "subject",
        },
        {
            title: "Skills",
            value: "skills",
        },
        {
            title: "Partner",
            value: "partner",
        },
    ];

    return (
        <Layout title="Resources">
            <Search
                className="mb-3.5 md:mb-6"
                placeholder="Mobile and Web Development"
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
                onSubmit={() => console.log("Submit")}
                large
            />
            <div className="flex justify-between mb-8 md:block">
                <Tabs
                    className="lg:ml-0 md:flex-nowrap md:overflow-auto md:-mx-5 md:scrollbar-none md:scroll-smooth md:before:w-5 md:before:shrink-0 md:after:w-5 md:after:shrink-0"
                    classButton="lg:ml-0"
                    items={typeTasks}
                    value={type}
                    setValue={setType}
                />
                <button className="btn-stroke btn-small md:hidden">
                    <Icon name="reset" />
                    <span>Reset all</span>
                </button>
            </div>
            <div className="">
                {resources4.map((resource) => (
                    <Resource item={resource} key={resource.id} />
                ))}
            </div>
            <Pagination />
        </Layout>
    );
};

export default ResourcesCategoryPage;
