"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Article from "@/components/Article";
import Post from "./Post";

import { products, popularArticles } from "@/mocks/help";

const HomePage = () => {
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
            <div className="mb-5 text-sm font-bold">Products</div>
            <div className="flex flex-wrap -mt-2.5 -mx-2.5 mb-8 md:block md:mx-0">
                {products.map((article) => (
                    <Article
                        className="w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 2xl:w-[calc(50%-1.25rem)] md:w-full md:mx-0"
                        item={article}
                        key={article.id}
                    />
                ))}
            </div>
            <div className="mb-5 text-sm font-bold">Popular help articles</div>
            <div className="flex flex-wrap -mt-2.5 -mx-2.5 lg:block lg:mx-0">
                {popularArticles.map((article) => (
                    <Post item={article} key={article.id} />
                ))}
            </div>
        </Layout>
    );
};

export default HomePage;
