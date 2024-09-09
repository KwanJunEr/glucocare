"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import TablePagination from "@/components/TablePagination";
import Post from "./Post";

import { searchResults } from "@/mocks/help";

const SearchResultPage = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <Layout title="Help Center" background>
            <div className="max-w-[41.25rem] w-full mx-auto mb-18 pt-12 md:mb-10 md:pt-6">
                <div className="mb-6 text-center text-h1 md:text-h3">
                    How can we help you?
                </div>
                <Search
                    className="mb-3.5"
                    placeholder="Search help articles"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    onSubmit={() => console.log("Submit")}
                    large
                />
                <div className="text-center">
                    For example <strong>How to create an account</strong>
                </div>
            </div>
            <div className="mb-5 text-sm font-bold">Search results</div>
            <div className="">
                {searchResults.map((post) => (
                    <Post item={post} key={post.id} />
                ))}
            </div>
            <TablePagination />
        </Layout>
    );
};

export default SearchResultPage;
