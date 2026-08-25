import DashboardHeader from "../components/dashboard/DashboardHeader";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";
import RecentProjects from "../components/dashboard/RecentProjects";
import StatsGrid from "../components/dashboard/StatsGrid";
import TasksTable from "../components/dashboard/TasksTable";
import TopNavbar from "../components/layout/TopNavbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <TopNavbar />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-8">
        <DashboardHeader />

        <StatsGrid />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <RecentProjects />
            <TasksTable />
          </div>

          <div className="space-y-8">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </div>
    </main>
  );
}