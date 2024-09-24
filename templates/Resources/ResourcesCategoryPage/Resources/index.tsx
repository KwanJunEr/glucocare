import Link from "next/link";
import Image from "@/components/Image";

type ResourceProps = {
    item: any;
};

const Resource = ({ item }: ResourceProps) => (
    <Link
        className="group flex mb-5 pb-5 border-b border-n-1 last:mb-0 last:pb-0 last:border-none dark:border-white"
        href="/resources/resources-details"
    >
        <div className="relative shrink-0 w-21 h-21 border border-n-1 overflow-hidden md:hidden">
            <Image
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.image}
                fill
                alt=""
            />
        </div>
        <div className="w-[calc(100%-5.25rem)] pl-6 md:w-full md:pl-0">
            <div className="-mt-0.5 mb-1 truncate text-h6 transition-colors group-hover:text-blue-1 md:whitespace-normal">
                {item.title}
            </div>
            <div className="mb-3 text-sm text-n-3 dark:text-white/75">
                {item.school}
            </div>
            <div className="flex items-center mt-auto">
                <div className="label-stroke">{item.category}</div>
                <div className="ml-4 text-xs font-bold">{item.duration}</div>
                <div className="flex items-center ml-auto text-xs">
                    <div className="w-4 -mt-0.5 mr-1.5">
                        <Image
                            className="w-full"
                            src="/images/star.svg"
                            width={16}
                            height={16}
                            alt=""
                        />
                    </div>
                    <div className="mr-1.5 font-bold">{item.ratingValue}</div>
                    <div className="md:hidden">
                        ({item.ratingCounter}) {item.students} users
                    </div>
                </div>
            </div>
        </div>
    </Link>
);

export default Resource;
