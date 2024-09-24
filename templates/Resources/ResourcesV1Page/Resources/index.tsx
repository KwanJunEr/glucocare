import Link from "next/link";
import Image from "@/components/Image";

type CoursesProps = {
    items: any;
};

const Courses = ({ items }: CoursesProps) => (
    <div className="-mt-[1.25rem] -ml-[1.25rem] clear-both md:ml-0">
        {items.map((item: any) => (
            <Link
                className="group relative flex flex-col w-[calc(33.333%-1.25rem)] h-[10.625rem] float-left mt-[1.25rem] ml-[1.25rem] p-4 border border-n-1 overflow-hidden text-white first:h-[22.5rem] 4xl:h-[8.625rem] 4xl:first:h-[18.5rem] md:w-full md:ml-0 md:first:h-[8.625rem] dark:border-white"
                key={item.id}
                href="/education/course-details"
            >
                <Image
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                    alt=""
                />
                <div className="absolute left-0 right-0 bottom-0 h-[6.25rem] bg-gradient-to-b from-n-1/0 to-n-1/60 pointer-events-none"></div>
                <div className="relative z-2 label-black ml-auto mb-auto dark:bg-n-1">
                    {item.counter} Courses
                </div>
                <div className="relative z-2 text-h5 lg:text-h6">
                    {item.title}
                </div>
                <div className="relative z-2 text-xs font-medium">
                    {item.duration}
                </div>
            </Link>
        ))}
    </div>
);

export default Courses;
