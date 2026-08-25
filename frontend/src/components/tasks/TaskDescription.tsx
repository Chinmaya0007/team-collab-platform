import { FileText } from "lucide-react";

import type { Task } from "../../services/task.service";

interface TaskDescriptionProps {
  task: Task;
}

export default function TaskDescription({
  task,
}: TaskDescriptionProps) {
  return (
    <section className="rounded-xl border border-[#c7c4d8]/40 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-medium text-[#191c1d]">
        <FileText
          size={20}
          className="text-[#464555]"
        />

        Description
      </h2>

      <div className="text-sm leading-6 text-[#464555]">
        {task.description ? (
          <p className="whitespace-pre-wrap">
            {task.description}
          </p>
        ) : (
          <p className="italic text-[#777587]">
            No description has been added to this task.
          </p>
        )}
      </div>
    </section>
  );
}