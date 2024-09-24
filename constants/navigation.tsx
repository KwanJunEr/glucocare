export const navigation = [
    {
        title: "Dashboard",
        icon: "dashboard",
        counter: 16,
        url: "/dashboard/ecommerce",
    },
    {
        title: "Projects",
        icon: "projects",
        url: "/projects/projects-list-v1",
    },
    {
        title: "Tasks",
        icon: "tasks",
        url: "/projects/tasks-list-v1",
    },
    {
        title: "Kanban Desk",
        icon: "layers",
        counter: 28,
        url: "/projects/kanban-desc",
    },
    {
        title: "File Manager",
        icon: "file",
        counter: 14,
        counterColor: "#98E9AB",
        url: "/projects/file-manager-folders",
    },
    {
        title: "Calendar",
        icon: "calendar",
        url: "/projects/calendar",
    },
    {
        title: "Inbox",
        icon: "email",
        url: "/inbox/mail-list",
    },
];

export const navigationMobile = [
    {
        icon: "dashboard",
        url: "/dashboard/ecommerce",
    },
    {
        icon: "projects",
        url: "/projects/projects-list-v1",
    },
    {
        icon: "tasks",
        url: "/projects/tasks-list-v1",
    },
    {
        icon: "layers",
        url: "/projects/kanban-desc",
    },
    {
        icon: "dots",
        onClick: () => console.log("Click on dots"),
    },
];
