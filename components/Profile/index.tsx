import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Actions from "./Actions";

const list = [
    {
        title: "New tasks",
        value: 296,
        counter: -8,
    },
    {
        title: "Followers",
        value: 18,
        counter: 5,
    },
    {
        title: "Hourly rate",
        value: "$36",
    },
];

type ProfileProps = {
    actions?: boolean;
};

const Profile = ({ actions }: ProfileProps) => (
    <div className="">
        <div className="mb-8 lg:text-center md:mb-6">
            <div className="relative self-center w-21 h-21 mb-2.5 lg:mx-auto">
                <Image
                    className="object-cover rounded-full"
                    src="/images/avatar.jpg"
                    fill
                    alt="Avatar"
                />
            </div>
            <div className="text-h4">Laquita Elliott</div>
            <div className="mb-4 text-sm">elliott.laquita@gmail.com</div>
            <div className="mb-3 text-xs">
                Happiness is not something readymade. It comes from your own
                actions.
            </div>
            <div className="label-stroke min-w-[5.125rem]">Designer</div>
        </div>
        <div>
            {list.map((item: any, index: number) => (
                <div
                    className="mb-4 pb-4 border-b border-dashed border-n-1 last:mb-0 last:pb-0 last:border-none dark:border-white"
                    key={index}
                >
                    <div className="flex items-center mb-0.5">
                        <div className="font-bold">{item.value}</div>
                        {item.counter && (
                            <div
                                className={`min-w-[1.5rem] ml-1.5 py-0.25 px-1 text-center text-xs font-bold text-n-1 ${
                                    item.counter > 0
                                        ? "bg-green-1"
                                        : "bg-pink-1"
                                }`}
                            >
                                {item.counter}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm">{item.title}</div>
                        {item.counter && (
                            <Icon
                                className="dark:fill-white"
                                name={
                                    item.counter > 0
                                        ? "arrow-up-right"
                                        : "arrow-down-left"
                                }
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
        {actions && <Actions />}
    </div>
);

export default Profile;
