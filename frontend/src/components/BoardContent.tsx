import {
    AlertTriangle,
    ArrowUp,
    CheckCircle2,
    CheckSquare,
    ChevronDown,
    Filter,
    MessageSquare,
    MoreHorizontal,
    Plus,
    Search,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateTaskModal from "./tasks/CreateTaskModal";

import {
    useCreateTask,
    useDeleteTask,
    useTasks,
    useUpdateTask,
} from "../hooks/useTasks";

import type {
    Task,
    TaskPriority,
    TaskStatus,
} from "../services/task.service";

type ColumnProps = {
    title: string;
    count: number;
    children: React.ReactNode;
    addButton?: boolean;
};

const STATUS_COLUMNS: {
    status: TaskStatus;
    title: string;
}[] = [
        {
            status: "TODO",
            title: "Todo",
        },
        {
            status: "IN_PROGRESS",
            title: "In Progress",
        },
        {
            status: "IN_REVIEW",
            title: "Review",
        },
        {
            status: "DONE",
            title: "Done",
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
    priority?: TaskPriority;
}) => {
    if (!priority) return null;

    if (priority === "URGENT") {
        return (
            <div className="flex items-center gap-[4px] text-[12px] font-semibold text-red-600">
                <AlertTriangle size={14} />
                Urgent
            </div>
        );
    }

    if (priority === "HIGH") {
        return (
            <div className="flex items-center gap-[4px] text-[12px] text-red-500">
                <AlertTriangle size={14} />
                High
            </div>
        );
    }

    if (priority === "MEDIUM") {
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

const getInitials = (assigneeId?: string | null) => {
    if (!assigneeId) return null;

    return assigneeId.slice(0, 2).toUpperCase();
};

const TaskCard = ({
    task,
    onStatusChange,
    onDelete,
    isUpdating,
}: {
    task: Task;
    onStatusChange: (
        taskId: string,
        status: TaskStatus,
    ) => void;
    onDelete: (taskId: string) => void;
    isUpdating: boolean;
}) => {
    const initials = getInitials(task.assigneeId);
    const navigate = useNavigate();

    return (
        <div
            className={`group relative rounded-[18px] border bg-white p-[18px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${task.status === "IN_PROGRESS"
                ? "border-[#3525cd] border-l-[5px]"
                : "border-[#e5e7eb]"
                } ${task.status === "DONE" ? "opacity-70" : ""}`}
        >
            <div className="absolute right-[12px] top-[12px] flex items-center gap-1">
                <button
                    type="button"
                    onClick={() => onDelete(task.id)}
                    disabled={isUpdating}
                    title="Delete task"
                    className="rounded-md p-1.5 text-[#9ca3af] transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <MoreHorizontal size={18} />
                </button>
            </div>

            <span className="rounded-full bg-[#eef2ff] px-[10px] py-[4px] text-[10px] font-bold uppercase text-[#3525cd]">
                Task
            </span>
            <button
                type="button"
                onClick={() =>
                    navigate(
                        `/projects/${task.projectId}/tasks/${task.id}`,
                    )
                }
                className={`mt-[14px] block w-full pr-[20px] text-left text-[15px] font-semibold leading-[24px] text-[#1a1b22] transition hover:text-[#3525cd] ${task.status === "DONE" ? "line-through" : ""
                    }`}
            >
                {task.title}
            </button>
            {task.description && (
                <p className="mt-[8px] line-clamp-2 text-[13px] leading-[20px] text-[#6b7280]">
                    {task.description}
                </p>
            )}

            <div className="mt-[18px] flex flex-wrap gap-[16px]">
                <PriorityBadge priority={task.priority} />

                {task.status === "DONE" && (
                    <div className="flex items-center gap-[4px] text-[12px] font-semibold text-green-600">
                        <CheckCircle2 size={14} />
                        Completed
                    </div>
                )}
            </div>

            <div className="mt-[18px] border-t border-[#ececf5] pt-[16px]">
                <div className="mb-[8px] text-[11px] font-medium uppercase tracking-wide text-[#9ca3af]">
                    Move task
                </div>

                <select
                    value={task.status}
                    disabled={isUpdating}
                    onChange={(event) =>
                        onStatusChange(
                            task.id,
                            event.target.value as TaskStatus,
                        )
                    }
                    className="w-full rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 text-xs text-[#464555] outline-none focus:border-[#3525cd]"
                >
                    <option value="TODO">Todo</option>
                    <option value="IN_PROGRESS">
                        In Progress
                    </option>
                    <option value="IN_REVIEW">Review</option>
                    <option value="DONE">Done</option>
                </select>
            </div>

            <div className="mt-[16px] flex items-center justify-between">
                <div className="flex items-center gap-[14px] text-[12px] text-[#6b7280]">
                    <div className="flex items-center gap-[4px]">
                        <MessageSquare size={14} />
                        0
                    </div>
                </div>

                {initials ? (
                    <Avatar initials={initials} />
                ) : (
                    <button
                        type="button"
                        className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#ececec]"
                    >
                        <Plus size={14} />
                    </button>
                )}
            </div>
        </div>
    );
};

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

            <button
                type="button"
                className="rounded-md p-1 transition hover:bg-[#ececf5]"
            >
                {addButton ? (
                    <Plus size={18} />
                ) : (
                    <MoreHorizontal size={18} />
                )}
            </button>
        </div>

        <div className="space-y-[18px]">
            {children}
        </div>
    </div>
);

const BoardContent = () => {
    const { projectId } = useParams();

    const [search, setSearch] = useState("");
    const [isCreateTaskOpen, setIsCreateTaskOpen] =
        useState(false);

    const {
        data: tasks = [],
        isLoading,
        isError,
    } = useTasks(projectId ?? "");

    const updateTaskMutation = useUpdateTask();
    const createTaskMutation = useCreateTask();
    const deleteTaskMutation = useDeleteTask();

    const handleStatusChange = (
        taskId: string,
        status: TaskStatus,
    ) => {
        updateTaskMutation.mutate({
            taskId,
            data: {
                status,
            },
        });
    };

    const handleDeleteTask = (taskId: string) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this task?",
        );

        if (!confirmed) return;

        deleteTaskMutation.mutate(taskId);
    };

    const handleCreateTask = async (data: {
        title: string;
        description: string;
        priority: TaskPriority;
        assigneeId?: string;
    }) => {
        if (!projectId) return;

        try {
            await createTaskMutation.mutateAsync({
                projectId,
                title: data.title,
                description: data.description,
                priority: data.priority,
                assigneeId: data.assigneeId,
            });

            setIsCreateTaskOpen(false);
        } catch (error) {
            console.error("Failed to create task:", error);
        }
    };

    const filteredTasks = tasks.filter((task) =>
        task.title
            .toLowerCase()
            .includes(search.toLowerCase()),
    );

    const getTasksForStatus = (status: TaskStatus) =>
        filteredTasks.filter(
            (task) => task.status === status,
        );

    const activeTasks = tasks.filter(
        (task) => task.status !== "DONE",
    ).length;

    const completedTasks = tasks.filter(
        (task) => task.status === "DONE",
    ).length;

    if (!projectId) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-[#fbf8ff]">
                <p className="text-sm text-red-600">
                    Project ID is missing from the URL.
                </p>
            </section>
        );
    }

    return (
        <section className="flex h-full w-full flex-col overflow-hidden bg-[#fbf8ff]">
            {/* Header */}
            <div className="sticky top-0 z-20 border-b border-[#e5e7eb] bg-white">
                <div className="flex flex-wrap items-center justify-between gap-[24px] px-[32px] py-[18px]">
                    <div className="flex items-center gap-[20px]">
                        <h1 className="text-[28px] font-bold text-[#1a1b22]">
                            Project Board
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-[14px]">
                        <div className="relative hidden lg:block">
                            <Search
                                size={18}
                                className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#6b7280]"
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search tasks..."
                                className="w-[260px] rounded-full border border-[#e5e7eb] bg-[#f8f8fb] py-[10px] pl-[42px] pr-[18px] text-[14px] outline-none transition focus:border-[#3525cd]"
                            />
                        </div>

                        <button
                            type="button"
                            className="rounded-full p-[10px] transition hover:bg-[#f5f5f7]"
                        >
                            <Filter size={18} />
                        </button>

                        <button
                            type="button"
                            className="rounded-full p-[10px] transition hover:bg-[#f5f5f7]"
                        >
                            <MessageSquare size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsCreateTaskOpen(true)}
                            className="flex items-center gap-[8px] rounded-[12px] bg-[#3525cd] px-[18px] py-[10px] text-[14px] font-semibold text-white transition hover:brightness-110"
                        >
                            <Plus size={18} />
                            Create Task
                        </button>
                    </div>
                </div>

                {/* Filters / Stats */}
                <div className="flex flex-wrap items-center justify-between gap-[18px] border-t border-[#ececf5] bg-[#fafbff] px-[32px] py-[14px]">
                    <div className="flex flex-wrap gap-[12px]">
                        {[
                            "Assignee: All",
                            "Priority: All",
                        ].map((filter) => (
                            <button
                                type="button"
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
                            {activeTasks} Active Tasks
                        </div>

                        <div className="flex items-center gap-[6px]">
                            <span className="h-[8px] w-[8px] rounded-full bg-[#16a34a]" />
                            {completedTasks} Completed
                        </div>
                    </div>
                </div>
            </div>

            {/* Loading */}
            {isLoading && (
                <div className="flex flex-1 items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3525cd]/30 border-t-[#3525cd]" />
                </div>
            )}

            {/* Error */}
            {isError && (
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-5 text-sm text-red-600">
                        Failed to load tasks.
                    </div>
                </div>
            )}

            {/* Board */}
            {!isLoading && !isError && (
                <div className="flex-1 overflow-x-auto overflow-y-hidden bg-[#f7f8fc] p-[32px]">
                    <div className="flex h-full gap-[24px]">
                        {STATUS_COLUMNS.map((column) => {
                            const columnTasks = getTasksForStatus(
                                column.status,
                            );

                            return (
                                <KanbanColumn
                                    key={column.status}
                                    title={column.title}
                                    count={columnTasks.length}
                                    addButton={column.status === "TODO"}
                                >
                                    {columnTasks.length === 0 ? (
                                        <div className="flex min-h-[180px] items-center justify-center rounded-[18px] border-2 border-dashed border-[#d6d6df] bg-[#fafbff] p-[24px]">
                                            <div className="text-center">
                                                <CheckSquare
                                                    size={30}
                                                    className="mx-auto mb-[10px] text-[#9ca3af]"
                                                />

                                                <p className="text-[13px] text-[#6b7280]">
                                                    No tasks
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        columnTasks.map((task) => (
                                            <TaskCard
                                                key={task.id}
                                                task={task}
                                                onStatusChange={handleStatusChange}
                                                onDelete={handleDeleteTask}
                                                isUpdating={
                                                    updateTaskMutation.isPending
                                                }
                                            />
                                        ))
                                    )}
                                </KanbanColumn>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="border-t border-[#e5e7eb] bg-white px-[32px] py-[22px]">
                <div className="flex flex-col items-center justify-between gap-[18px] text-[13px] text-[#6b7280] md:flex-row">
                    <p>
                        © 2026 Nexus Technologies. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-[20px]">
                        <button
                            type="button"
                            className="transition hover:text-[#3525cd]"
                        >
                            Privacy Policy
                        </button>

                        <button
                            type="button"
                            className="transition hover:text-[#3525cd]"
                        >
                            Terms of Service
                        </button>

                        <button
                            type="button"
                            className="transition hover:text-[#3525cd]"
                        >
                            Security
                        </button>

                        <button
                            type="button"
                            className="transition hover:text-[#3525cd]"
                        >
                            Status
                        </button>
                    </div>
                </div>
            </footer>
            <CreateTaskModal
                isOpen={isCreateTaskOpen}
                onClose={() => setIsCreateTaskOpen(false)}
                onCreate={handleCreateTask}
                isCreating={createTaskMutation.isPending}
            />
        </section>
    );
};

export default BoardContent;