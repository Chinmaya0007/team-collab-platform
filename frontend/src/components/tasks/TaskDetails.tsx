"use client";

import {
  CalendarDays,
  ChevronDown,
  Edit3,
  PlayCircle,
  TrendingUp,
} from "lucide-react";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "../../services/task.service";

interface TaskDetailsProps {
  task: Task;
}

const statusLabels: Record<TaskStatus, string> = {
  TODO: "Todo",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  DONE: "Done",
};

const priorityLabels: Record<TaskPriority, string> = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  URGENT: "Urgent",
};



const getPriorityColor = (
  priority: TaskPriority,
) => {
  switch (priority) {
    case "URGENT":
      return "text-red-600";

    case "HIGH":
      return "text-[#ba1a1a]";

    case "MEDIUM":
      return "text-orange-500";

    case "LOW":
      return "text-[#3525cd]";

    default:
      return "text-[#464555]";
  }
};


const formatDateTime = (
  value?: string,
) => {
  if (!value) {
    return "Not available";
  }

  return new Date(value).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  );
};

const getInitials = (
  assigneeId?: string | null,
) => {
  if (!assigneeId) {
    return "—";
  }

  return assigneeId
    .slice(0, 2)
    .toUpperCase();
};

export default function TaskDetails({
  task,
}: TaskDetailsProps) {
  return (
    <section className="rounded-xl border border-[#c7c4d8]/40 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="mb-5 text-base font-semibold text-[#191c1d]">
        Details
      </h3>

      <div className="space-y-4">
        {/* Status */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="w-24 text-xs font-medium text-[#464555]">
            Status
          </span>

          <div className="flex flex-1 items-center justify-between rounded-md border border-[#3525cd]/20 bg-[#3525cd]/10 px-3 py-1.5 text-sm font-medium text-[#3525cd]">
            <span className="flex items-center gap-2">
              <PlayCircle size={16} />

              {statusLabels[task.status]}
            </span>

            <ChevronDown size={18} />
          </div>
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="w-24 text-xs font-medium text-[#464555]">
            Priority
          </span>

          <div className="flex flex-1 items-center justify-between rounded-md border border-[#c7c4d8]/50 bg-[#f3f4f5] px-3 py-1.5 text-sm font-medium">
            <span className="flex items-center gap-2">
              <TrendingUp
                size={16}
                className={getPriorityColor(
                  task.priority,
                )}
              />

              {priorityLabels[task.priority]}
            </span>

            <ChevronDown size={18} />
          </div>
        </div>

        <hr className="border-[#c7c4d8]/30" />

        {/* Assignee */}
        <PersonDetail
          label="Assignee"
          initials={getInitials(
            task.assigneeId,
          )}
          name={
            task.assigneeId
              ? task.assigneeId
              : "Unassigned"
          }
        />

        {/* Reporter */}
        <PersonDetail
          label="Reporter"
          initials="—"
          name="Not available"
        />

        <hr className="border-[#c7c4d8]/30" />

        {/* Labels */}
        <div>
          <span className="text-xs font-medium text-[#464555]">
            Labels
          </span>

          <div className="mt-2">
            <span className="rounded-md border border-[#dbe2fa] bg-[#dbe2fa]/50 px-2.5 py-1 text-xs font-medium">
              {task.status}
            </span>
          </div>
        </div>

        {/* Due Date */}
        <div className="flex flex-col gap-2 border-t border-[#c7c4d8]/30 pt-4 sm:flex-row sm:items-center">
          <span className="w-24 text-xs font-medium text-[#464555]">
            Due Date
          </span>

          <div className="flex flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-sm">
            <CalendarDays
              size={16}
              className="text-[#464555]"
            />

            Not set
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-8 space-y-2 border-t border-[#c7c4d8]/30 pt-4 text-xs text-[#777587]">
        <div className="flex justify-between gap-4">
          <span>Created</span>

          <span className="text-right">
            {formatDateTime(
              task.createdAt,
            )}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span>Updated</span>

          <span className="text-right">
            {formatDateTime(
              task.updatedAt,
            )}
          </span>
        </div>
      </div>
    </section>
  );
}

interface PersonDetailProps {
  label: string;
  initials: string;
  name: string;
}

function PersonDetail({
  label,
  initials,
  name,
}: PersonDetailProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="w-24 text-xs font-medium text-[#464555]">
        {label}
      </span>

      <div className="group flex flex-1 items-center justify-between rounded-md px-2 py-1.5">
        <span className="flex items-center gap-2 text-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dbe2fa] text-[10px] font-semibold text-[#3525cd]">
            {initials}
          </span>

          <span className="max-w-[180px] truncate">
            {name}
          </span>
        </span>

        <Edit3
          size={16}
          className="opacity-0 transition group-hover:opacity-100"
        />
      </div>
    </div>
  );
}