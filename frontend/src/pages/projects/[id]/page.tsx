import QuickActions from "../../../components/dashboard/QuickActions";
import TopNavbar from "../../../components/layout/TopNavbar";
import ProjectActivity from "../../../components/project/ProjectActivity";
import ProjectBreadcrumb from "../../../components/project/ProjectBreadcrumbs";
import ProjectHeader from "../../../components/project/ProjectHeaker";
import ProjectProgress from "../../../components/project/ProjectProgress";
import ProjectStats from "../../../components/project/ProjectStats";
import ProjectTabs from "../../../components/project/ProjectTabs";
import RecentTasks from "../../../components/project/ProjectTasks";


export default function ProjectDetailsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <TopNavbar />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-8 lg:px-10">
        <ProjectBreadcrumb />

        <ProjectHeader />

        <ProjectTabs />

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            <ProjectStats />

            <ProjectProgress />

            <RecentTasks />
          </div>

          <div className="space-y-8">
            <QuickActions />

            <ProjectActivity />
          </div>
        </div>
      </div>
    </main>
  );
}