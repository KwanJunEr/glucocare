"use client"; 
import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import TablePagination from "@/components/TablePagination";
import Resource from "./Resource";

import { variantsResource, resources3 } from "@/mocks/resources";

const ResourcesV2Page = () => {
    const [search, setSearch] = useState<string>("");
    const [activeId, setActiveId] = useState<string>("1");

    return (
        <Layout title="Courses" background>
            <div className="max-w-[41.25rem] mx-auto mb-[6.57rem] pt-12 2xl:mb-16 md:mb-10 md:pt-6">
                <div className="mb-8 text-center text-h1 md:mb-5 md:text-h2">
                    Software Development
                </div>
                <Search
                    className="mb-8"
                    placeholder="Mobile and Web Design"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    onSubmit={() => console.log("Submit")}
                    large
                />
                <div className="mb-5 text-center text-sm font-bold">
                    Suggested course searches
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
                <div className="mb-5 text-sm font-bold">Earn Your Degree</div>
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
