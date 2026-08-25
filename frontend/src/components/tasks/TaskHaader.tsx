import type { Task } from "../../services/task.service";

interface TaskHeaderProps {
  task: Task;
}

export default function TaskHeader({
  task,
}: TaskHeaderProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded border border-[#dbe2fa] bg-[#dbe2fa]/30 px-2 py-1 text-xs font-medium text-[#1e00a9]">
          TASK
        </span>

        <span className="text-sm font-medium text-[#464555]">
          {task.id}
        </span>

        <span className="rounded-full bg-[#f3f4f5] px-2.5 py-1 text-xs font-medium text-[#464555]">
          {formatStatus(task.status)}
        </span>
      </div>

      <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-[#191c1d] md:text-[32px]">
        {task.title}
      </h1>
    </section>
  );
}

function formatStatus(
  status: Task["status"],
) {
  switch (status) {
    case "TODO":
      return "Todo";

    case "IN_PROGRESS":
      return "In Progress";

    case "IN_REVIEW":
      return "In Review";

    case "DONE":
      return "Done";

    default:
      return status;
  }
}