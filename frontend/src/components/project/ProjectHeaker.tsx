import { Edit3, UserPlus } from "lucide-react";

const members = [
  "A",
  "J",
  "S",
  "E",
  "R",
];

export default function ProjectHeader() {
  return (
    <section className="mb-8 rounded-xl border border-[#c7c4d8] bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-[#191c1d]">
              API V2 Migration
            </h1>

            <span className="rounded-full border border-[#3525cd]/20 bg-[#dbe2fa] px-2.5 py-1 text-xs font-semibold text-[#3525cd]">
              In Progress
            </span>
          </div>

          <p className="max-w-2xl text-base leading-6 text-[#464555]">
            Modernizing the core infrastructure to support GraphQL
            and real-time synchronization.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex -space-x-2">
            {members.map((member) => (
              <div
                key={member}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#dbe2fa] text-xs font-semibold text-[#3525cd]"
              >
                {member}
              </div>
            ))}

            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#e7e8e9] text-xs font-medium text-[#191c1d]">
              +8
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#777587] px-4 py-2 text-sm font-medium text-[#191c1d] transition hover:bg-[#f3f4f5] sm:flex-none">
              <Edit3 size={16} />
              Edit Project
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#3525cd] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1e00a9] sm:flex-none">
              <UserPlus size={16} />
              Invite Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}