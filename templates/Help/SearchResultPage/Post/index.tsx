import Link from "next/link";
import Icon from "@/components/Icon";

type PostProps = {
    item: any;
};

const Post = ({ item }: PostProps) => (
    <Link
        className="block mb-2.5 px-7 py-5 card transition-colors hover:border-blue-1 hover:text-blue-1 last:mb-0 md:p-5"
        href="/help/article"
    >
        <div className="mb-1.5 text-h6">{item.title}</div>
        <div className="mb-3 text-sm text-n-3 dark:text-white/75">
            {item.content}
        </div>
        <div className="flex items-center text-xs font-bold text-n-1 dark:text-white">
            <Icon className="mr-1.5 dark:fill-white" name="arrow-next" />
            See more articles
        </div>
    </Link>
);

export default Post;
