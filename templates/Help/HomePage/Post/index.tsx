import Link from "next/link";
import Icon from "@/components/Icon";

type PostProps = {
    item: any;
};

const Post = ({ item }: PostProps) => (
    <Link
        className="flex flex-col items-start w-[calc(33.333%-1.25rem)] mt-2.5 mx-2.5 p-5 card transition-colors hover:border-blue-1 hover:text-blue-1 lg:w-full lg:mx-0"
        href="/help/article"
    >
        <div className="min-w-[7.25rem] mb-3.5 label-stroke text-center text-n-1">
            {item.category}
        </div>
        <div className="mb-1 text-h6">{item.title}</div>
        <div className="mb-3 text-sm text-n-3 dark:text-white/75">
            {item.content}
        </div>
        <div className="flex items-center mt-auto text-xs font-bold text-n-1 dark:text-white">
            <Icon className="mr-1.5 dark:fill-white" name="arrow-next" />
            Read more
        </div>
    </Link>
);

export default Post;
