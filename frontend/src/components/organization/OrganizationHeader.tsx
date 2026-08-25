import {
  UserPlus,
  Users,
} from "lucide-react";

import type { Organization } from "../../services/organization.service";

interface OrganizationHeaderProps {
  organization: Organization;
}

export default function OrganizationHeader({
  organization,
}: OrganizationHeaderProps) {
  return (
    <section className="mb-8 overflow-hidden rounded-xl border border-[#c7c4d8] bg-white p-6 shadow-sm">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-[#c7c4d8] bg-[#edeeef]">
            <span className="text-3xl font-bold text-[#3525cd]">
              {organization.name.charAt(0).toUpperCase()}
            </span>
          </div>

          <div>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-[#191c1d]">
                {organization.name}
              </h1>

              <span className="rounded-full border border-[#dbe2fa] bg-[#dbe2fa] px-2 py-0.5 text-xs font-medium text-[#5d6478]">
                {organization.slug}
              </span>
            </div>

            <p className="mb-4 max-w-xl text-sm leading-6 text-[#464555]">
              {organization.description || "No description provided."}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#464555]">
              <div className="flex items-center gap-1.5">
                <Users size={18} />
                <span>{organization.memberships?.length ?? 0} Members</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-3 md:w-auto">
          <button className="flex-1 rounded-lg border border-[#c7c4d8] bg-white px-4 py-2 text-sm font-medium text-[#191c1d] shadow-sm transition hover:bg-[#f3f4f5] md:flex-none">
            Edit Organization
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#3525cd] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#1e00a9] md:flex-none">
            <UserPlus size={18} />
            Invite Member
          </button>
        </div>
      </div>
    </section>
  );
}