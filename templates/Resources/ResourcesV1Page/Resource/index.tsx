import Link from "next/link";
import Image from "@/components/Image";

type ResourceProps = {
    item: any;
};

const Resource = ({ item }: ResourceProps) => (
    <Link
        className="group flex flex-col w-[calc(33.333%-1.25rem)] mt-5 mx-2.5 border border-n-1 bg-white md:w-[calc(100%-1.25rem)] dark:border-white dark:bg-n-1"
        href="/resources/resources-details"
    >
        <div className="relative h-[13.375rem] overflow-hidden">
            <Image
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src={item.image}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                alt=""
            />
        </div>
        <div className="flex flex-col grow pt-4 px-5 pb-5">
            <div className="mb-1 text-h6">{item.title}</div>
            <div className="mb-3.5 text-sm text-n-3 dark:text-white/75">
                {item.school}
            </div>
            <div className="flex justify-between items-center mt-auto">
                <div className="label-stroke">{item.category}</div>
                <div className="w-5 p-0.25 text-0 dark:bg-white">
                    <Image
                        className="w-full"
                        src={item.logo}
                        width={20}
                        height={20}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </Link>
);

export default Resource;
