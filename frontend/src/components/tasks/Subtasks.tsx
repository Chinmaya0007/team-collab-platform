"use client";

import {
  CheckSquare,
  Plus,
} from "lucide-react";

export default function Subtasks() {
  return (
    <section className="rounded-xl border border-[#c7c4d8]/40 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-medium text-[#191c1d]">
          <CheckSquare
            size={20}
            className="text-[#464555]"
          />

          Subtasks
        </h2>

        <span className="rounded bg-[#f3f4f5] px-2 py-1 text-xs text-[#464555]">
          0/0 completed
        </span>
      </div>

      <div className="flex min-h-[120px] items-center justify-center rounded-lg border border-dashed border-[#c7c4d8]/50 bg-[#f8f9fa]">
        <div className="text-center">
          <CheckSquare
            size={28}
            className="mx-auto mb-2 text-[#9ca3af]"
          />

          <p className="text-sm font-medium text-[#464555]">
            No subtasks yet
          </p>

          <p className="mt-1 text-xs text-[#777587]">
            Break this task into smaller pieces when needed.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-dashed border-[#3525cd]/30 p-2 text-sm font-medium text-[#3525cd] transition hover:bg-[#3525cd]/5"
      >
        <Plus size={18} />
        Add subtask
      </button>
    </section>
  );
}