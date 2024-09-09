import { useState } from "react";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Article from "@/components/Article";
import Category from "./Category";

import { productCategories, topCommunityPosts } from "@/mocks/help";

const CategoriesPage = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <Layout title="Help Center  /  Categories  /  …" background back>
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
            <div className="mb-5 text-sm font-bold">Product categories</div>
            <div className="flex flex-wrap -mt-2.5 -mx-2.5 mb-8 lg:block lg:mx-0">
                {productCategories.map((category) => (
                    <Category item={category} key={category.id} />
                ))}
            </div>
            <div className="mb-5 text-sm font-bold">Top community posts</div>
            <div className="">
                {topCommunityPosts.map((article) => (
                    <Article
                        className="-mt-0.25 !border-n-1 dark:!border-white"
                        classIcon="lg:hidden"
                        item={article}
                        key={article.id}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default CategoriesPage;
