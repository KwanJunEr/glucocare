import Icon from "@/components/Icon";
import { twMerge } from "tailwind-merge";

type PaginationProps = {};

const Pagination = ({}: PaginationProps) => {
    const active = true;

    return (
        <div className="flex items-center mt-6">
            <button
                className={twMerge(
                    `w-8 h-8 mr-1 border border-transparent text-xs font-bold transition-colors hover:text-blue-1 ${
                        active ? "bg-blue-1 border-n-1 !text-n-1" : ""
                    }`
                )}
            >
                1
            </button>
            <button
                className={twMerge(
                    `w-8 h-8 mr-1 border border-transparent text-xs font-bold transition-colors hover:text-blue-1`
                )}
            >
                2
            </button>
            <button
                className={twMerge(
                    `w-8 h-8 mr-1 border border-transparent text-xs font-bold transition-colors hover:text-blue-1`
                )}
            >
                3
            </button>
            <button
                className={twMerge(
                    `w-8 h-8 mr-1 border border-transparent text-xs font-bold transition-colors hover:text-blue-1`
                )}
            >
                4
            </button>
            <button
                className={twMerge(
                    `w-8 h-8 mr-1 border border-transparent text-xs font-bold transition-colors hover:text-blue-1`
                )}
            >
                5
            </button>
            <button className="btn-stroke btn-small ml-12">
                <span>Next</span>
                <Icon name="arrow-next" />
            </button>
        </div>
    );
};

export default Pagination;
