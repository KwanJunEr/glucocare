import Link from "next/link";
import Image from "@/components/Image";

type ResourceProps = {
    item: any;
};

const Resource = ({ item }: ResourceProps) => (
    <Link
        className="group flex flex-col w-[calc(33.333%-1.25rem)] mt-5 mx-2.5 border border-n-1 bg-white lg:w-[calc(50%-1.25rem)] md:w-[calc(100%-1.25rem)] dark:bg-n-1 dark:border-white"
        href="/resources/resources-details"
    >
        <div className="relative h-40 overflow-hidden 4xl:h-30">
            <Image
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src={item.image}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                alt=""
            />
        </div>
        <div className="flex flex-col grow px-5 pb-5">
            <div className="relative flex justify-center items-center z-1 w-13 h-13 -mt-6.5 mb-4 rounded border border-n-1 bg-white text-0">
                <Image src={item.logo} width={18} height={18} alt="" />
            </div>
            <div className="mb-1 text-h6">{item.title}</div>
            <div className="mb-3.5 text-sm text-n-3 dark:text-white/75">
                {item.school}
            </div>
            <div className="flex items-center mt-auto">
                <div className="label-stroke">{item.category}</div>
                <div className="ml-4 text-xs font-bold">{item.duration}</div>
            </div>
        </div>
    </Link>
);

export default Resource;
