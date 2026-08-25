import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Project Alpha Redesign",
    progress: 75,
    initials: "SM",
  },
  {
    name: "Q3 Marketing Campaign",
    progress: 40,
    initials: "JD",
  },
  {
    name: "API V2 Migration",
    progress: 90,
    initials: "AR",
  },
];

export default function RecentProjects() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#191c1d]">
          Recent Projects
        </h3>

        <button className="text-sm font-medium text-[#3525cd] hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            progress={project.progress}
            initials={project.initials}
          />
        ))}
      </div>
    </section>
  );
}