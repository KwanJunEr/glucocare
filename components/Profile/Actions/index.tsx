import Icon from "@/components/Icon";

type ActionsProps = {};

const Actions = ({}: ActionsProps) => (
    <div className="flex mt-8 md:mt-5">
        <button className="btn-stroke btn-medium grow">
            <Icon name="add-circle" />
            <span>Add new task</span>
        </button>
        <button className="btn-stroke btn-medium btn-square shrink-0 ml-1.5">
            <Icon name="email" />
        </button>
        <button className="btn-stroke btn-medium btn-square shrink-0 ml-1.5">
            <Icon name="arrow-up-right" />
        </button>
    </div>
);

export default Actions;
