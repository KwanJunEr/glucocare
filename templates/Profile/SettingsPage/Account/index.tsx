import { detailsAccount } from "@/mocks/profile";

type AccountProps = {};

const Account = ({}: AccountProps) => (
    <div className="card">
        <div className="card-title">Public account details</div>
        <div className="p-5">
            <div className="flex flex-wrap -mt-4 -mx-2.5">
                {detailsAccount.map((item) => (
                    <div
                        className={`mt-4 mx-2.5 pb-3 border-b border-n-1 dark:border-white ${
                            item.fullWide
                                ? "w-[calc(100%-1.25rem)]"
                                : "w-[calc(50%-1.25rem)] md:w-[calc(100%-1.25rem)]"
                        }`}
                        key={item.id}
                    >
                        <div className="mb-1.5 text-xs text-n-3 dark:text-white/75">
                            {item.label}
                        </div>
                        <div className="text-sm font-bold">{item.value}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-16 md:block md:mt-8">
                <button className="btn-stroke min-w-[11.7rem] md:w-full md:mb-3">
                    Reset Changes
                </button>
                <button className="btn-purple min-w-[11.7rem] md:w-full">
                    Update Settings
                </button>
            </div>
        </div>
    </div>
);

export default Account;
