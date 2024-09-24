import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Details from "./Details";

const responsibilities = [
    "Provide educational resources on managing diabetes and monitoring blood glucose levels",
    "Offer up-to-date information on technology and tools for diabetes management",
    "Promote lifestyle adjustments including diet and exercise for effective diabetes control",
];

const skills = ["Diabetes Care", "Glucose Monitoring", "Nutrition", "Exercise Management", "Digital Health Tools"];

const list = [
    "Understand the role of continuous glucose monitoring in diabetes care",
    "Leverage mobile apps and devices for real-time blood sugar tracking",
    "Implement lifestyle changes to improve overall health outcomes for diabetic patients",
];

const career = [
    {
        content: "Improved knowledge in diabetes management using digital tools and resources",
        progressValue: 50,
    },
    {
        content: "Enhanced ability to provide patient-centric care for individuals with diabetes",
        progressValue: 70,
        progressColor: "#98E9AB",
    },
];

const ResourcesDetailsPage = () => {
    return (
        <Layout title="Resource details" background back>
            <div className="flex pt-4 lg:block">
                <div className="shrink-0 w-[21rem] mr-20 4xl:w-[16.5rem] xl:mr-10 lg:w-full lg:mb-10">
                    <Details />
                </div>
                <div className="card grow">
                    <div className="card-title">About this resource</div>
                    <div className="pt-6 px-5 pb-8">
                        <div className="mb-2 font-bold">Overview:</div>
                        <div className="text-sm">
                            This resource provides valuable insights into managing diabetes effectively using technology, nutritional advice, and lifestyle adjustments. It includes information on continuous glucose monitoring, digital tools for diabetes management, and ways to support better health outcomes.
                        </div>
                        <div className="mt-6 pt-6 border-t border-dashed border-n-1 dark:border-white">
                            <div className="mb-2 font-bold">
                                Responsibilities:
                            </div>
                            <div>
                                {responsibilities.map((item, index) => (
                                    <div
                                        className="relative pl-4 text-sm before:absolute before:top-2 before:left-0 before:w-1 before:h-1 before:bg-n-1 dark:before:bg-white"
                                        key={index}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <button className="group inline-flex items-center mt-3 text-xs font-bold transition-colors hover:text-blue-1">
                                <Icon
                                    className="mr-1.5 transition-colors dark:fill-white group-hover:fill-blue-1"
                                    name="dots"
                                />
                                See more
                            </button>
                        </div>
                        <div className="mt-6 pt-6 border-t border-dashed border-n-1 dark:border-white">
                            <div className="mb-2 font-bold">
                                Key topics covered:
                            </div>
                            <div className="text-sm">
                                This library offers comprehensive resources that cover topics such as blood glucose monitoring, digital health solutions, and dietary adjustments to help manage diabetes effectively.
                            </div>
                            <div className="flex flex-wrap mt-2 -ml-1">
                                {skills.map((skill, index) => (
                                    <div
                                        className="label-black mt-1 ml-1"
                                        key={index}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-dashed border-n-1 dark:border-white">
                            <div className="mb-5 font-bold">
                                What you will find:
                            </div>
                            <div>
                                {list.map((item, index) => (
                                    <div
                                        className="flex items-start mb-3 pb-3 border-b border-n-1/40 text-sm last:mb-0 last:pb-0 last:border-none dark:border-white/40"
                                        key={index}
                                    >
                                        <div className="flex justify-center items-center shrink-0 w-5 h-5 mr-2.5 bg-green-1">
                                            <Icon
                                                className="fill-white"
                                                name="check"
                                            />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-dashed border-n-1 dark:border-white">
                            <div className="mb-2 font-bold">
                                Resource outcomes:
                            </div>
                            <div className="mb-6 text-sm">
                                These resources aim to equip you with the latest knowledge in diabetes management, helping both healthcare providers and patients make informed decisions for better diabetes care.
                            </div>
                            <div className="flex flex-wrap -mt-10 -mx-5 md:-mt-6">
                                {career.map((item, index) => (
                                    <div
                                        className="w-[calc(50%-2.5rem)] mt-10 mx-5 md:w-[calc(100%-2.5rem)] md:mt-6"
                                        key={index}
                                    >
                                        <div
                                            className="relative h-1.5 mb-4 bg-yellow-1"
                                            style={{
                                                backgroundColor:
                                                    item.progressColor,
                                            }}
                                        >
                                            <div
                                                className="absolute top-0 left-0 bottom-0 bg-n-1/30"
                                                style={{
                                                    width:
                                                        item.progressValue +
                                                        "%",
                                                }}
                                            ></div>
                                        </div>
                                        <div className="flex">
                                            <div className="grow text-sm font-medium">
                                                {item.content}
                                            </div>
                                            <div className="shrink-0 ml-10 font-bold">
                                                {item.progressValue}%
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ResourcesDetailsPage;
