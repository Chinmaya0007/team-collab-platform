import type { LucideIcon } from "lucide-react";

interface OrganizationStatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  progress?: number;
}

export default function OrganizationStatCard({
  title,
  value,
  description,
  icon: Icon,
  progress,
}: OrganizationStatCardProps) {
  return (
    <div className="rounded-xl border border-[#c7c4d8] bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-[#464555]">
          {title}
        </p>

        <div className="rounded-lg bg-[#3525cd]/10 p-1.5 text-[#3525cd]">
          <Icon size={20} />
        </div>
      </div>

      <p className="text-3xl font-bold text-[#191c1d]">
        {value}
      </p>

      {progress !== undefined ? (
        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e7e8e9]">
            <div
              className="h-full rounded-full bg-[#3525cd]"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <span className="text-xs font-medium text-[#575e72]">
            {progress}%
          </span>
        </div>
      ) : (
        <p className="mt-3 text-xs font-medium text-[#575e72]">
          {description}
        </p>
      )}
    </div>
  );
}