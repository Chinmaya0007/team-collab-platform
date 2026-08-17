import {
  ArrowDown,
  CalendarDays,
  ChevronDown,
  Grid2X2,
  List,
  MoreVertical,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Phoenix",
    description:
      "Re-architecting the core cloud infrastructure for 2025 scalability requirements.",
    status: "Active",
    priority: "High",
    progress: 75,
    color: "#3525cd",
    due: "Dec 12, 2024",
  },
  {
    id: 2,
    title: "Global Expansion Kit",
    description:
      "Standardized assets and localization strategies for the upcoming Q3 European launch.",
    status: "On Hold",
    priority: "Medium",
    progress: 32,
    color: "#0ea5e9",
    due: "Jan 15, 2025",
  },
  {
    id: 3,
    title: "Q3 Security Audit",
    description:
      "Comprehensive internal penetration testing and compliance documentation.",
    status: "Completed",
    priority: "Low",
    progress: 100,
    color: "#16a34a",
    due: "Nov 02, 2024",
  },
  {
    id: 4,
    title: "Nexus Design System",
    description:
      "Developing a unified visual language and component library for all internal tools.",
    status: "Active",
    priority: "High",
    progress: 54,
    color: "#6366f1",
    due: "Feb 20, 2025",
  },
  {
    id: 5,
    title: "API Marketplace",
    description:
      "Building a public-facing portal for third-party developer integrations.",
    status: "Active",
    priority: "Medium",
    progress: 12,
    color: "#14b8a6",
    due: "Mar 10, 2025",
  },
];

const ProjectsContent = () => {
  return (
    <section className="flex w-full flex-col p-[32px]">
      {/* Header */}
      <div className="mb-[32px] flex flex-wrap items-end justify-between gap-[20px]">
        <div>
          <h1 className="text-[32px] font-bold text-[#1a1b22]">
            Projects
          </h1>

          <p className="mt-[6px] text-[15px] text-[#666]">
            Manage and track your organization's initiative progress.
          </p>
        </div>

        <div className="flex rounded-[12px] bg-[#eeedf7] p-[4px]">
          <button className="rounded-[8px] bg-white p-[8px] shadow-sm">
            <Grid2X2 size={18} />
          </button>

          <button className="rounded-[8px] p-[8px] text-[#777587]">
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-[32px] flex flex-wrap items-center justify-between gap-[20px] border-b border-[#e4e4ec] pb-[20px]">
        <div className="flex flex-wrap gap-[12px]">
          {["Status: All", "Priority: High", "Team: Digital"].map((item) => (
            <button
              key={item}
              className="flex items-center gap-[8px] rounded-full border border-[#d7d5e7] px-[16px] py-[8px] text-[14px]"
            >
              {item}
              <ChevronDown size={16} />
            </button>
          ))}
        </div>

        <button className="flex items-center gap-[6px] text-[14px] font-semibold text-[#3525cd]">
          Last Modified
          <ArrowDown size={16} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-[18px] border border-[#e4e4ec] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="h-[5px]"
              style={{ background: project.color }}
            />

            <div className="flex flex-col p-[22px]">
              <div className="mb-[18px] flex items-start justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-[8px] text-[14px] leading-[24px] text-[#666]">
                    {project.description}
                  </p>
                </div>

                <button>
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="mb-[24px] flex flex-wrap gap-[8px]">
                <span className="rounded-full bg-[#eef2ff] px-[12px] py-[4px] text-[11px] font-semibold text-[#3525cd]">
                  {project.status}
                </span>

                <span className="rounded-full bg-[#fee2e2] px-[12px] py-[4px] text-[11px] font-semibold text-[#dc2626]">
                  {project.priority}
                </span>
              </div>

              <div>
                <div className="mb-[8px] flex justify-between text-[13px]">
                  <span>Progress</span>

                  <span>{project.progress}%</span>
                </div>

                <div className="h-[8px] rounded-full bg-[#ececf5]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${project.progress}%`,
                      background: project.color,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#ececf5] bg-[#fafafe] px-[22px] py-[18px]">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-[34px] w-[34px] rounded-full border-2 border-white bg-[#d7d5e7]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-[6px] text-[13px] text-[#666]">
                <CalendarDays size={15} />
                {project.due}
              </div>
            </div>
          </div>
        ))}

        {/* Add Project Card */}
        <button className="flex min-h-[320px] flex-col items-center justify-center gap-[18px] rounded-[18px] border-2 border-dashed border-[#d7d5e7] transition hover:border-[#3525cd] hover:bg-[#f8f7ff]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#eef2ff] text-[28px] font-bold text-[#3525cd]">
            +
          </div>

          <div className="text-center">
            <h3 className="text-[18px] font-semibold">
              Start New Project
            </h3>

            <p className="mt-[6px] text-[14px] text-[#666]">
              Bring your vision to life
            </p>
          </div>
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-[48px] flex flex-wrap items-center justify-between gap-[16px] border-t border-[#e4e4ec] pt-[24px] text-[13px] text-[#777587]">
        <span>© 2026 Nexus Technologies</span>

        <div className="flex flex-wrap gap-[20px]">
          <button>Privacy</button>
          <button>Terms</button>
          <button>Security</button>
          <button>Status</button>
        </div>
      </footer>
    </section>
  );
};

export default ProjectsContent;