import Icon from "@/components/Icon";

import { detailsSecurity, securityCredentials } from "@/mocks/profile";

type SecurityProps = {};

const Security = ({}: SecurityProps) => (
    <div className="card">
        <div className="card-title">Login details</div>
        <div className="p-5">
            <div className="flex flex-wrap -mt-4 -mx-2.5">
                {detailsSecurity.map((item) => (
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
            <div className="mt-9">
                <div className="mb-8 text-h6">Security credentials</div>
                <div>
                    {securityCredentials.map((item) => (
                        <div
                            className="flex items-center mb-4 pb-4 border-b border-n-3 pl-3.5 md:pl-0 dark:border-white"
                            key={item.id}
                        >
                            <Icon
                                className="shrink-0 icon-18 mr-8 md:mr-4 dark:fill-white"
                                name={item.icon}
                            />
                            <div className="mr-auto">
                                <div className="mb-1.5 text-xs font-medium text-n-3 dark:text-white/75">
                                    {item.date}
                                </div>
                                <div className="text-sm font-bold">
                                    {item.title}
                                </div>
                            </div>
                            {item.currentSession && (
                                <div className="label-black h-9 px-5 md:px-2">
                                    Current session
                                </div>
                            )}
                        </div>
                    ))}
                </div>
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

export default Security;
