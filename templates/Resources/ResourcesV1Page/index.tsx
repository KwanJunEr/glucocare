"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import TablePagination from "@/components/TablePagination";
import Resources from "./Resources";
import Resource from "./Resource";

import { resources1, resources2 } from "@/mocks/resources";

const ResourcesV1Page = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <Layout title="Diabetes Resources" background>
            <div className="pt-12 md:pt-6">
                <div className="mb-6 text-center text-h1 md:text-h2">
                    Learn About Diabetes Management
                </div>
                <Search
                    className="max-w-[41.25rem] mx-auto mb-6"
                    placeholder="Search diabetes tips or resources"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    onSubmit={() => console.log("Search submitted")}
                    large
                />
                <div className="mb-18 text-center text-sm md:mb-10">
                    For example <strong>Blood Glucose Control Tips</strong>
                </div>
            </div>
            <div className="mb-8">
                <div className="mb-5 text-sm font-bold md:mb-4">
                    Doctor-Approved Resources
                </div>
                <Resources items={resources1} />
            </div>
            <div className="">
                <div className="mb-5 text-sm font-bold md:mb-4">
                    Popular Today
                </div>
                <div className="flex flex-wrap -mt-5 -mx-2.5">
                    {resources2.map((resource) => (
                        <Resource item={resource} key={resource.id} />
                    ))}
                </div>
            </div>
            <TablePagination />
        </Layout>
    );
};

export default ResourcesV1Page;
