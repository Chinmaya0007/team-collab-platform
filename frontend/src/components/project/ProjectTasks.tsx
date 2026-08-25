import {
  ArrowDown,
  ArrowUp,
  ChevronsUp,
  User,
} from "lucide-react";

type Priority = "High" | "Medium" | "Low";
type Status = "In Progress" | "Done" | "Todo";

interface Task {
  name: string;
  status: Status;
  priority: Priority;
  assignee: string | null;
  dueDate: string;
}

const tasks: Task[] = [
  {
    name: "Implement Auth Middleware",
    status: "In Progress",
    priority: "High",
    assignee: "A",
    dueDate: "Sep 28",
  },
  {
    name: "GraphQL Schema Definition",
    status: "Done",
    priority: "Medium",
    assignee: "J",
    dueDate: "Sep 25",
  },
  {
    name: "Database Migration Scripts",
    status: "Todo",
    priority: "High",
    assignee: null,
    dueDate: "Oct 02",
  },
  {
    name: "Update API Documentation",
    status: "Todo",
    priority: "Low",
    assignee: "S",
    dueDate: "Oct 10",
  },
];

const statusStyles: Record<Status, string> = {
  "In Progress": "bg-[#dbe2fa] text-[#5d6478]",
  Done: "bg-[#e7e8e9] text-[#191c1d]",
  Todo: "border border-[#c7c4d8] bg-[#edeeef] text-[#464555]",
};

function PriorityIcon({
  priority,
}: {
  priority: Priority;
}) {
  if (priority === "High") {
    return <ChevronsUp size={15} />;
  }

  if (priority === "Medium") {
    return <ArrowUp size={15} />;
  }

  return <ArrowDown size={15} />;
}

function priorityColor(priority: Priority) {
  if (priority === "High") return "text-red-600";

  if (priority === "Medium") return "text-[#3525cd]";

  return "text-[#777587]";
}

export default function RecentTasks() {
  return (
    <section className="overflow-hidden rounded-xl border border-[#c7c4d8] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#c7c4d8] px-6 py-4">
        <h3 className="text-lg font-semibold text-[#191c1d]">
          Recent Tasks
        </h3>

        <button className="text-sm font-medium text-[#3525cd] hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-[#c7c4d8] bg-[#f8f9fa] text-xs text-[#464555]">
            <tr>
              <th className="p-3 pl-6 font-medium">
                Task
              </th>

              <th className="p-3 font-medium">
                Status
              </th>

              <th className="p-3 font-medium">
                Priority
              </th>

              <th className="p-3 font-medium">
                Assignee
              </th>

              <th className="p-3 pr-6 font-medium">
                Due Date
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.name}
                className="border-b border-[#c7c4d8]/60 transition last:border-0 hover:bg-[#f3f4f5]"
              >
                <td className="p-3 pl-6 font-medium text-[#191c1d]">
                  {task.name}
                </td>

                <td className="p-3">
                  <span
                    className={`inline-flex rounded px-2 py-1 text-xs font-medium ${statusStyles[task.status]}`}
                  >
                    {task.status}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`flex items-center gap-1 ${priorityColor(
                      task.priority
                    )}`}
                  >
                    <PriorityIcon priority={task.priority} />

                    {task.priority}
                  </span>
                </td>

                <td className="p-3">
                  {task.assignee ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dbe2fa] text-xs font-semibold text-[#3525cd]">
                      {task.assignee}
                    </div>
                  ) : (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-[#c7c4d8] bg-[#e7e8e9] text-[#777587]">
                      <User size={14} />
                    </div>
                  )}
                </td>

                <td className="p-3 pr-6 text-[#464555]">
                  {task.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}