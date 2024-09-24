import Link from "next/link";
import Image from "@/components/Image";

type ArticleProps = {
    className?: string;
    classIcon?: string;
    item: any;
};

const Article = ({ className, classIcon, item }: ArticleProps) => (
    <Link
        className={`flex items-center p-5 card transition-colors hover:border-blue-1 hover:text-blue-1 md:p-4 ${className}`}
        href="/help/article"
    >
        <div
            className={`flex justify-center items-center shrink-0 w-12 h-12 mr-3 border border-n-1 dark:border-white dark:bg-white ${classIcon}`}
        >
            <Image
                className="w-4.5"
                src={item.icon}
                width={18}
                height={18}
                alt=""
            />
        </div>
        <div className="grow">
            <div className="text-h6">{item.title}</div>
            {item.content && (
                <div className="text-sm text-n-3 dark:text-white/75">
                    {item.content}
                </div>
            )}
            {item.date && (
                <div className="flex items-center mt-1 text-sm text-n-1 dark:text-white">
                    {item.date}
                    {item.category && (
                        <>
                            <div className="w-1 h-1 mx-2 bg-n-1 rounded-full dark:bg-white"></div>
                            {item.category}
                        </>
                    )}
                </div>
            )}
        </div>
    </Link>
);

export default Article;
