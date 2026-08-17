import {
    AlertTriangle,
    ArrowUp,
    Calendar,
    CheckCircle2,
    CheckSquare,
    ChevronDown,
    Filter,
    GripVertical,
    MessageSquare,
    MoreHorizontal,
    Paperclip,
    Plus,
    Search,
} from "lucide-react";
import { ReactNode } from "react";

type Priority = "Low" | "Medium" | "High" | "Urgent";

type Task = {
    id: number;
    label: string;
    title: string;
    priority?: Priority;
    due?: string;
    checklist?: string;
    comments: number;
    attachments?: number;
    assignee?: string;
    completed?: boolean;
    active?: boolean;
};

type ColumnProps = {
    title: string;
    count: number;
    children: ReactNode;
    addButton?: boolean;
};

const backlogTasks: Task[] = [
    {
        id: 1,
        label: "Bug",
        title: "API endpoint returning 500 on large payload exports",
        priority: "High",
        due: "Oct 24",
        comments: 2,
        attachments: 1,
        assignee: "JD",
    },
    {
        id: 2,
        label: "Design",
        title: "Refactor component library for Material 3 alignment",
        priority: "Low",
        checklist: "0/8",
        comments: 0,
    },
];

const todoTasks: Task[] = [
    {
        id: 3,
        label: "Feature",
        title: "Implement real-time collaboration on Kanban columns",
        priority: "Medium",
        checklist: "2/5",
        comments: 12,
        assignee: "AS",
    },
];

const progressTasks: Task[] = [
    {
        id: 4,
        label: "Feature",
        title: "OAuth2 integration with Azure AD",
        priority: "Urgent",
        comments: 6,
        assignee: "JD",
        active: true,
    },
];

const reviewTasks: Task[] = [
    {
        id: 5,
        label: "DevOps",
        title: "Configure AWS Lambda auto-scaling triggers",
        comments: 4,
        due: "3 days ago",
        assignee: "MK",
    },
];

const doneTasks: Task[] = [
    {
        id: 6,
        label: "Feature",
        title: "Dark mode theme engine implementation",
        completed: true,
        comments: 28,
        assignee: "AS",
    },
];

const Avatar = ({ initials }: { initials: string }) => (
    <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#dad7ff] text-[11px] font-semibold text-[#3525cd]">
        {initials}
    </div>
);

const PriorityBadge = ({
    priority,
}: {
    priority?: Priority;
}) => {
    if (!priority) return null;

    if (priority === "High") {
        return (
            <div className="flex items-center gap-[4px] text-[12px] text-red-500">
                <AlertTriangle size={14} />
                High
            </div>
        );
    }

    if (priority === "Urgent") {
        return (
            <div className="flex items-center gap-[4px] text-[12px] font-semibold text-red-600">
                <AlertTriangle size={14} />
                Urgent
            </div>
        );
    }

    if (priority === "Medium") {
        return (
            <div className="flex items-center gap-[4px] text-[12px] text-orange-500">
                <ArrowUp size={14} />
                Medium
            </div>
        );
    }

    return (
        <div className="flex items-center gap-[4px] text-[12px] text-[#3525cd]">
            <ArrowUp size={14} />
            Low
        </div>
    );
};

const TaskCard = ({ task }: { task: Task }) => (
    <div
        className={`group relative rounded-[18px] border bg-white p-[18px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${task.active
            ? "border-[#3525cd] border-l-[5px]"
            : "border-[#e5e7eb]"
            } ${task.completed ? "opacity-70" : ""}`}
    >
        <button className="absolute right-[12px] top-[12px] opacity-0 transition group-hover:opacity-100">
            <GripVertical
                size={16}
                className="text-[#9ca3af]"
            />
        </button>

        <span
            className={`rounded-full px-[10px] py-[4px] text-[10px] font-bold uppercase ${task.label === "Bug"
                ? "bg-red-100 text-red-700"
                : task.label === "Design"
                    ? "bg-cyan-100 text-cyan-700"
                    : task.label === "DevOps"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-green-100 text-green-700"
                }`}
        >
            {task.label}
        </span>

        <h4
            className={`mt-[14px] text-[15px] font-semibold leading-[24px] text-[#1a1b22] ${task.completed ? "line-through" : ""
                }`}
        >
            {task.title}
        </h4>

        <div className="mt-[18px] flex flex-wrap gap-[16px]">
            <PriorityBadge priority={task.priority} />

            {task.due && (
                <div className="flex items-center gap-[4px] text-[12px] text-[#6b7280]">
                    <Calendar size={14} />
                    {task.due}
                </div>
            )}

            {task.checklist && (
                <div className="flex items-center gap-[4px] text-[12px] text-[#6b7280]">
                    <CheckSquare size={14} />
                    {task.checklist}
                </div>
            )}

            {task.completed && (
                <div className="flex items-center gap-[4px] text-[12px] font-semibold text-green-600">
                    <CheckCircle2 size={14} />
                    Completed
                </div>
            )}
        </div>

        <div className="mt-[18px] flex items-center justify-between border-t border-[#ececf5] pt-[16px]">
            <div className="flex items-center gap-[14px] text-[12px] text-[#6b7280]">
                <div className="flex items-center gap-[4px]">
                    <MessageSquare size={14} />
                    {task.comments}
                </div>

                {task.attachments && (
                    <div className="flex items-center gap-[4px]">
                        <Paperclip size={14} />
                        {task.attachments}
                    </div>
                )}
            </div>

            {task.assignee ? (
                <Avatar initials={task.assignee} />
            ) : (
                <button className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#ececec]">
                    <Plus size={14} />
                </button>
            )}
        </div>
    </div>
);

const KanbanColumn = ({
    title,
    count,
    children,
    addButton,
}: ColumnProps) => (
    <div className="flex w-[320px] shrink-0 flex-col">
        <div className="mb-[18px] flex items-center justify-between px-[4px]">
            <div className="flex items-center gap-[10px]">
                <h3 className="text-[13px] font-bold uppercase tracking-[2px] text-[#6b7280]">
                    {title}
                </h3>

                <span className="rounded-full bg-[#ececf5] px-[8px] py-[2px] text-[11px] font-semibold">
                    {count}
                </span>
            </div>

            <button>
                {addButton ? (
                    <Plus size={18} />
                ) : (
                    <MoreHorizontal size={18} />
                )}
            </button>
        </div>

        <div className="space-y-[18px]">{children}</div>
    </div>
);

const BoardContent = () => {
    return (
        <section className="flex h-full w-full flex-col overflow-hidden bg-[#fbf8ff]">
            {/* Header */}

            <div className="sticky top-0 z-20 border-b border-[#e5e7eb] bg-white">
                <div className="flex flex-wrap items-center justify-between gap-[24px] px-[32px] py-[18px]">
                    <div className="flex items-center gap-[20px]">
                        <h1 className="text-[28px] font-bold text-[#1a1b22]">
                            Engineering Sprint
                        </h1>

                        <div className="h-[28px] w-[1px] bg-[#e5e7eb]" />

                        <div className="flex -space-x-2">
                            <Avatar initials="JD" />
                            <Avatar initials="AS" />
                            <Avatar initials="MK" />

                            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-2 border-white bg-[#ececf5] text-[10px] font-semibold">
                                +4
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-[14px]">
                        <div className="relative hidden lg:block">
                            <Search
                                size={18}
                                className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#6b7280]"
                            />

                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className="w-[260px] rounded-full border border-[#e5e7eb] bg-[#f8f8fb] py-[10px] pl-[42px] pr-[18px] text-[14px] outline-none transition focus:border-[#3525cd]"
                            />
                        </div>

                        <button className="rounded-full p-[10px] transition hover:bg-[#f5f5f7]">
                            <Filter size={18} />
                        </button>

                        <button className="rounded-full p-[10px] transition hover:bg-[#f5f5f7]">
                            <MessageSquare size={18} />
                        </button>

                        <button className="flex items-center gap-[8px] rounded-[12px] bg-[#3525cd] px-[18px] py-[10px] text-[14px] font-semibold text-white transition hover:brightness-110">
                            <Plus size={18} />
                            Create Task
                        </button>
                    </div>
                </div>

                {/* Filters */}

                <div className="flex flex-wrap items-center justify-between gap-[18px] border-t border-[#ececf5] bg-[#fafbff] px-[32px] py-[14px]">
                    <div className="flex flex-wrap gap-[12px]">
                        {["Assignee: All", "Label: Any", "Priority: All"].map((filter) => (
                            <button
                                key={filter}
                                className="flex items-center gap-[8px] rounded-[10px] border border-[#e5e7eb] bg-white px-[14px] py-[8px] text-[13px] font-medium text-[#555]"
                            >
                                {filter}

                                <ChevronDown size={15} />
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-[22px] text-[13px] text-[#6b7280]">
                        <div className="flex items-center gap-[6px]">
                            <span className="h-[8px] w-[8px] rounded-full bg-[#3525cd]" />
                            12 Active Tasks
                        </div>

                        <div className="flex items-center gap-[6px]">
                            <span className="h-[8px] w-[8px] rounded-full bg-[#16a34a]" />
                            4 Completed
                        </div>
                    </div>
                </div>
            </div>

            {/* Board */}

            <div className="flex-1 overflow-x-auto overflow-y-hidden bg-[#f7f8fc] p-[32px]">
                <div className="flex h-full gap-[24px]">
                    <KanbanColumn
                        title="Backlog"
                        count={5}
                    >
                        {backlogTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}
                    </KanbanColumn>

                    <KanbanColumn
                        title="Todo"
                        count={3}
                        addButton
                    >
                        {todoTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}
                    </KanbanColumn>

                    <KanbanColumn
                        title="In Progress"
                        count={2}
                    >
                        {progressTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}
                    </KanbanColumn>
                    <KanbanColumn
                        title="Review"
                        count={1}
                    >
                        {reviewTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}
                    </KanbanColumn>

                    <KanbanColumn
                        title="Testing"
                        count={0}
                    >
                        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[18px] border-2 border-dashed border-[#d6d6df] bg-[#fafbff] p-[24px]">
                            <CheckSquare
                                size={34}
                                className="mb-[12px] text-[#9ca3af]"
                            />

                            <p className="text-center text-[14px] font-medium text-[#6b7280]">
                                No tasks currently
                                <br />
                                in testing
                            </p>
                        </div>
                    </KanbanColumn>

                    <KanbanColumn
                        title="Done"
                        count={14}
                    >
                        {doneTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}
                    </KanbanColumn>
                </div>
            </div>

            {/* Footer */}

            <footer className="border-t border-[#e5e7eb] bg-white px-[32px] py-[22px]">
                <div className="flex flex-col items-center justify-between gap-[18px] text-[13px] text-[#6b7280] md:flex-row">
                    <p>© 2026 Nexus Technologies. All rights reserved.</p>

                    <div className="flex flex-wrap gap-[20px]">
                        <button className="transition hover:text-[#3525cd]">
                            Privacy Policy
                        </button>

                        <button className="transition hover:text-[#3525cd]">
                            Terms of Service
                        </button>

                        <button className="transition hover:text-[#3525cd]">
                            Security
                        </button>

                        <button className="transition hover:text-[#3525cd]">
                            Status
                        </button>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default BoardContent;