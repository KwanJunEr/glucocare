import Icon from "@/components/Icon";

import { socialProfiles } from "@/mocks/profile";

type SocialNetworksProps = {};

const SocialNetworks = ({}: SocialNetworksProps) => (
    <div className="card">
        <div className="card-title">Social profiles</div>
        <div className="p-5">
            <div>
                {socialProfiles.map((item) => (
                    <div
                        className="flex items-center mb-4 pb-4 border-b border-n-3 pl-3 md:pl-0 dark:border-white"
                        key={item.id}
                    >
                        <Icon
                            className="shrink-0 icon-20 mr-8 md:mr-4 dark:fill-white"
                            name={item.icon}
                        />
                        <div className="mr-auto">
                            <div className="mb-1.5 text-xs font-medium text-n-3 dark:text-white/75">
                                {item.label}
                            </div>
                            <div className="break-all text-sm font-bold">
                                {item.link ? item.link : "Not connected"}
                            </div>
                        </div>
                        {!item.link && (
                            <button className="group inline-flex items-center self-end pb-0.5 text-xs font-bold transition-colors hover:text-purple-1">
                                <Icon
                                    className="mr-1.5 transition-colors group-hover:fill-purple-1 dark:fill-white dark:group-hover:fill-purple-1"
                                    name="external-link"
                                />
                                Connect
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <button className="group inline-flex items-center mt-5 font-bold transition-colors hover:text-purple-1">
                <Icon
                    className="icon-18 mr-1.5 transition-colors group-hover:fill-purple-1 dark:fill-white dark:group-hover:fill-purple-1"
                    name="add-circle"
                />
                Add More
            </button>
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

export default SocialNetworks;
