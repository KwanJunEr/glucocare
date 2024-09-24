"use client"; 
import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import TablePagination from "@/components/TablePagination";
import Resource from "./Resource";

import { variantsResource, resources3 } from "@/mocks/resources";
import Link from "next/link";

const ResourcesV2Page = () => {
    const [search, setSearch] = useState<string>("");
    const [activeId, setActiveId] = useState<string>("1");

    return (
        <Layout title="Resources" background>
            <div className="w-full flex justify-end h-[2rem]">
                <button className="bg-blue-1 border border-n-1 transition-colors hover:bg-blue-1/90">
                    <Link className="px-4 py-2" href={'/resources/resources-category'}>Go to resources categories</Link>
                </button>

            </div>
            <div className="max-w-[41.25rem] mx-auto mb-[6.57rem] pt-12 2xl:mb-16 md:mb-10 md:pt-6">
                <div className="mb-8 text-center text-h1 md:mb-5 md:text-h2">
                    Diabetes and Blood Glucose Management
                </div>
                <Search
                    className="mb-8"
                    placeholder="Search diabetes tips or resources"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    onSubmit={() => console.log("Submit")}
                    large
                />
                <div className="mb-5 text-center text-sm font-bold">
                    Suggested searches
                </div>
                <div className="flex flex-wrap justify-center -mt-1.5 -ml-0.75">
                    {variantsResource.map((variant) => (
                        <button
                            className={`label-black mt-1.5 ml-0.75 dark:border-transparent ${
                                activeId === variant.id
                                    ? "bg-purple-1 border-purple-1 dark:bg-purple-1"
                                    : ""
                            }`}
                            key={variant.id}
                            onClick={() => setActiveId(variant.id)}
                        >
                            {variant.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="">
                <div className="mb-5 text-sm font-bold">Popular Resources</div>
                <div className="flex flex-wrap -mt-5 -mx-2.5">
                    {resources3.map((resource) => (
                        <Resource item={resource} key={resource.id} />
                    ))}
                </div>
            </div>
            <TablePagination />
        </Layout>
    );
};

export default ResourcesV2Page;
