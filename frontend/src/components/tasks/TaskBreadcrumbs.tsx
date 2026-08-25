import {
  ChevronRight,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import { useParams } from "react-router-dom";

import type { Task } from "../../services/task.service";

interface TaskBreadcrumbProps {
  task: Task;
}

export default function TaskBreadcrumb({
  task,
}: TaskBreadcrumbProps) {
  const { projectId } = useParams();

  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <nav className="flex flex-wrap items-center gap-y-2 text-sm text-[#464555]">
        <BreadcrumbItem label="Organizations" />

        <BreadcrumbItem
          label="Organization"
        />

        <BreadcrumbItem label="Projects" />

        <BreadcrumbItem
          label={`Project ${projectId ?? task.projectId}`}
        />

        <BreadcrumbItem label="Board" />

        <span className="rounded border border-[#c7c4d8]/50 bg-[#f3f4f5] px-2 py-0.5 font-semibold text-[#191c1d]">
          {task.id}
        </span>
      </nav>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-9 items-center gap-1.5 rounded-md border border-[#c7c4d8] px-3 text-sm font-medium transition hover:bg-[#f3f4f5]"
        >
          <Share2 size={17} />
          Share
        </button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#c7c4d8] transition hover:bg-[#f3f4f5]"
          aria-label="More options"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>
    </div>
  );
}

interface BreadcrumbItemProps {
  label: string;
}

function BreadcrumbItem({
  label,
}: BreadcrumbItemProps) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="transition hover:text-[#3525cd]"
      >
        {label}
      </button>

      <ChevronRight
        size={16}
        className="mx-1 text-[#777587]"
      />
    </div>
  );
}