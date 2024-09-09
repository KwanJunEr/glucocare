import { useState } from "react";
import Layout from "@/components/Layout";
import Article from "@/components/Article";
import Breadcrumbs from "@/components/Breadcrumbs";

import { topCommunityPosts, menuArticles } from "@/mocks/help";

const breadcrumbs = [
    {
        title: "Help Center",
        url: "/help",
    },
    {
        title: "Account",
        url: "/help/categories",
    },
    {
        title: "Funds reports",
    },
];

const ArticlePage = () => {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <Layout title="Help Center">
            <div className="flex lg:block">
                <div className="grow">
                    <Breadcrumbs items={breadcrumbs} />
                    <div className="mb-8 text-h1 lg:mb-5 lg:text-h2">
                        Getting started: funds reports
                    </div>
                    <div className="mb-6 pt-5 px-5 pb-7 card md:p-0 md:border-none md:bg-transparent dark:md:bg-transparent">
                        <p className="mb-5">
                            There is no better advertisement campaign that is
                            low cost and also successful at the same time. Great
                            business ideas when utilized effectively can save
                            lots of money. This is not only easy for those who
                            work full-time as an advertiser.
                        </p>
                        <ol className="list-decimal mb-5 pl-10 pr-5 py-4 border border-dashed border-n-1 text-sm font-bold dark:border-white">
                            <li>
                                Fliers and business cards can be tacked on such
                                bulletin boards.
                            </li>
                            <li>
                                But before doing so, check out with the human
                                resource department
                            </li>
                            <li>
                                Parents are required to be in regular touch with
                                the teachers to know
                            </li>
                            <li>
                                Do not miss this opportunity and spread the
                                word. Hand them the business card
                            </li>
                        </ol>
                        <p className="mb-5">
                            Get involved with fundraiser at schools, as it’s a
                            nice approach to market business. Prior to handing
                            out the order received, collect all necessary
                            information like business card pack, fliers, with
                            proper information. Information can be based on what
                            is the company about, what are the products and
                            services provided, or how to get information in
                            touch with the company. In each individual order,
                            carefully place all of them and seal the package
                            properly.{" "}
                        </p>
                        <p className="text-sm font-medium text-n-3 dark:text-white/50">
                            Note: Voice mails can be put to good use, other than
                            recording messages. They can help to deliver the
                            marketing message. Greet with a brief message,
                            following with website and email address.
                        </p>
                    </div>
                    <div className="mb-5 text-sm font-bold">
                        This also may help you
                    </div>
                    <div className="">
                        {topCommunityPosts.map((article) => (
                            <Article
                                className="-mt-0.25 !border-n-1 dark:!border-white"
                                classIcon="xl:hidden"
                                item={article}
                                key={article.id}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-start shrink-0 w-[19rem] ml-12 pt-10 4xl:w-[13rem] lg:hidden">
                    {menuArticles.map((button) => (
                        <button
                            className={`mb-5 text-sm font-bold transition-colors hover:text-blue-1 last:mb-0 ${
                                activeId === button.id ? "text-blue-1" : ""
                            }`}
                            key={button.id}
                            onClick={() => setActiveId(button.id)}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ArticlePage;
