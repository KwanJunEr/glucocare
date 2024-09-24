import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type CategoryProps = {
    item: any;
};

const Category = ({ item }: CategoryProps) => (
    <div className="block w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 px-5 py-6 card">
        <div className="flex justify-center items-center w-12 h-12 mb-5 border border-n-1">
            <Image
                className="w-4.5"
                src={item.icon}
                width={18}
                height={18}
                alt=""
            />
        </div>
        <div className="mb-3 text-h6">{item.title}</div>
        <div className="flex flex-col items-start mb-4">
            {item.links.map((link: any, index: number) => (
                <Link
                    className="mb-2.5 text-sm font-bold text-blue-1 transition-colors hover:text-blue-2 last:mb-0"
                    href="/help/article"
                    key={index}
                >
                    {link}
                </Link>
            ))}
        </div>
        <Link
            className="group flex items-center text-xs font-bold text-n-1 transition-colors hover:text-blue-1"
            href="/help/categories"
        >
            <Icon
                className="mr-1.5 transition-colors group-hover:fill-blue-1"
                name="arrow-next"
            />
            See more articles
        </Link>
    </div>
);

export default Category;
