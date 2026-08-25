import {
  ClipboardList,
  SquareCheckBig,
  TrendingUp,
  Users,
  FolderOpen
} from "lucide-react";

import OrganizationStatCard from "./OrganizationStatCard";

import type { Organization } from "../../services/organization.service";
import type { Project } from "../../services/project.service";

interface OrganizationStatsProps {
  organization: Organization;
  projects: Project[];
}

export default function OrganizationStats({
  organization,
  projects,
}: OrganizationStatsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative">
        <OrganizationStatCard
          title="Team Members"
          value={String(organization.memberships?.length ?? 0)}
          description="Current organization members"
          icon={Users}
        />

      </div>
      <OrganizationStatCard
        title="Active Projects"
        value={String(projects.length)}
        description="Current organization projects"
        icon={FolderOpen}
      />

      <div className="relative">
        <OrganizationStatCard
          title="Total Tasks"
          value="450"
          description="+45 this week"
          icon={ClipboardList}
        />

        <TrendingUp
          size={14}
          className="absolute bottom-5 left-5 text-green-600"
        />
      </div>

      <OrganizationStatCard
        title="Completed Tasks"
        value="380"
        progress={84}
        icon={SquareCheckBig}
      />

      <div className="relative">
        <OrganizationStatCard
          title="Team Members"
          value="124"
          description="+5 new this month"
          icon={Users}
        />

        <TrendingUp
          size={14}
          className="absolute bottom-5 left-5 text-green-600"
        />
      </div>
    </section>
  );
}