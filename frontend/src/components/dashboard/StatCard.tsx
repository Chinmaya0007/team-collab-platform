import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-lg border border-[#c7c4d8] bg-white p-6 transition hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-md bg-[#dbe2fa]/60 p-2 text-[#3525cd]">
          <Icon size={22} />
        </div>
      </div>

      <div className="mb-1 text-4xl font-semibold text-[#191c1d]">
        {value}
      </div>

      <p className="text-sm font-medium uppercase tracking-wider text-[#464555]">
        {title}
      </p>
    </div>
  );
}