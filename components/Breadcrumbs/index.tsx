import Link from "next/link";
import Icon from "@/components/Icon";

type BreadcrumbsProps = {
    items: any;
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
    <div className="mb-2 text-xs">
        {items.map((item: any, index: number) =>
            item.url ? (
                <span key={index}>
                    <Link
                        className="font-bold transition-colors hover:text-blue-1"
                        href={item.url}
                    >
                        {item.title}
                    </Link>
                    <Icon
                        className="-mt-0.5 mx-2.5 fill-n-3 dark:fill-white/75"
                        name="arrow-next"
                    />
                </span>
            ) : (
                <span
                    className="font-medium text-n-3 dark:text-white/75"
                    key={index}
                >
                    {item.title}
                </span>
            )
        )}
    </div>
);

export default Breadcrumbs;
