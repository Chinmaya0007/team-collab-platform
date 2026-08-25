import { EllipsisVertical } from "lucide-react";

type Priority = "High" | "Medium" | "Low";
type Status = "In Progress" | "Todo" | "Done";

interface Task {
    name: string;
    priority: Priority;
    status: Status;
}

const tasks: Task[] = [
    {
        name: "Update Design System",
        priority: "High",
        status: "In Progress",
    },
    {
        name: "API Integration",
        priority: "Medium",
        status: "Todo",
    },
    {
        name: "User Interviews",
        priority: "High",
        status: "In Progress",
    },
    {
        name: "Quarterly Report",
        priority: "Low",
        status: "Todo",
    },
    {
        name: "Bug Fixes",
        priority: "High",
        status: "Done",
    },
];

const priorityStyles: Record<Priority, string> = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-gray-100 text-gray-600",
    Low: "bg-gray-100 text-gray-500",
};

const statusStyles: Record<Status, string> = {
    "In Progress": "bg-[#dbe2fa] text-[#5d6478]",
    Todo: "bg-[#e1e3e4] text-[#464555]",
    Done: "bg-[#e7e8e9] text-[#464555]",
};

export default function TasksTable() {
    return (
        <section className="overflow-hidden rounded-lg border border-[#c7c4d8] bg-white">
            <div className="border-b border-[#c7c4d8] px-6 py-4">
                <h3 className="text-lg font-semibold text-[#191c1d]">
                    My Tasks
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left">
                    <thead>
                        <tr className="border-b border-[#c7c4d8]/60 bg-[#f8f9fa]">
                            <th className="px-6 py-3 text-xs font-medium text-[#464555]">
                                Task Name
                            </th>

                            <th className="px-6 py-3 text-xs font-medium text-[#464555]">
                                Priority
                            </th>

                            <th className="px-6 py-3 text-xs font-medium text-[#464555]">
                                Status
                            </th>

                            <th className="px-6 py-3 text-right text-xs font-medium text-[#464555]">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task) => (
                            <tr
                                key={task.name}
                                className="border-b border-[#c7c4d8]/50 transition last:border-0 hover:bg-[#f8f9fa]"
                            >
                                <td
                                    className={`px-6 py-4 text-sm ${task.status === "Done"
                                            ? "text-[#777587] line-through"
                                            : "text-[#191c1d]"
                                        }`}
                                >
                                    {task.name}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex rounded px-2 py-1 text-xs font-medium ${priorityStyles[task.priority]}`}
                                    >
                                        {task.priority}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex rounded px-2 py-1 text-xs font-medium ${statusStyles[task.status]}`}
                                    >
                                        {task.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-right">
                                    <button
                                        aria-label={`More options for ${task.name}`}
                                        className="text-[#464555] transition hover:text-[#3525cd]"
                                    >
                                        <EllipsisVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}