interface ProjectCardProps {
  name: string;
  progress: number;
  initials: string;
}

export default function ProjectCard({
  name,
  progress,
  initials,
}: ProjectCardProps) {
  return (
    <div className="flex min-h-[170px] flex-col rounded-lg border border-[#c7c4d8] bg-white p-5 transition hover:shadow-md">
      <div className="mb-6 flex items-start justify-between gap-3">
        <h4 className="truncate text-sm font-semibold text-[#191c1d]">
          {name}
        </h4>

        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dbe2fa] text-xs font-semibold text-[#3525cd]">
          {initials}
        </div>
      </div>

      <div className="mt-auto">
        <div className="mb-2 flex items-center justify-between text-xs text-[#464555]">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e1e3e4]">
          <div
            className="h-full rounded-full bg-[#3525cd]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}