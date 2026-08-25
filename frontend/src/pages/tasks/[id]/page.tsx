import { useParams } from "react-router-dom";

import TopNavbar from "../../../components/layout/TopNavbar";
import CommentInput from "../../../components/tasks/CommentInput";
import Subtasks from "../../../components/tasks/Subtasks";
import TaskActivity from "../../../components/tasks/TaskActivity";
import TaskBreadcrumb from "../../../components/tasks/TaskBreadcrumbs";
import TaskDescription from "../../../components/tasks/TaskDescription";
import TaskDetails from "../../../components/tasks/TaskDetails";
import TaskHeader from "../../../components/tasks/TaskHaader";

import { useTask } from "../../../hooks/useTasks";

export default function TaskDetailsPage() {
  const { taskId } = useParams();

  const {
    data: task,
    isLoading,
    isError,
  } = useTask(taskId ?? "");

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f8f9fa] text-[#191c1d]">
        <TopNavbar />

        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3525cd]/30 border-t-[#3525cd]" />
        </div>
      </main>
    );
  }

  if (isError || !task) {
    return (
      <main className="min-h-screen bg-[#f8f9fa] text-[#191c1d]">
        <TopNavbar />

        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-5 text-center">
            <h2 className="text-lg font-semibold text-red-700">
              Task not found
            </h2>

            <p className="mt-1 text-sm text-red-600">
              We couldn't load this task.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <TopNavbar />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-10 md:py-10">
        <TaskBreadcrumb task={task} />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 xl:gap-12">
          <div className="flex flex-col gap-8 lg:col-span-8">
            <TaskHeader task={task} />

            <TaskDescription task={task} />

            <Subtasks />

            <TaskActivity />

            <CommentInput />
          </div>
          <aside className="lg:col-span-4">
            <TaskDetails task={task} />
          </aside>
        </div>
      </div>
    </main>
  );
}