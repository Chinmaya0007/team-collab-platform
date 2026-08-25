"use client";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const tabs = [
  "Overview",
  "Projects",
  "Members",
  "Settings",
];

import type { Organization } from "../../services/organization.service";

interface OrganizationTabsProps {
  organization: Organization;
}

export default function OrganizationTabs({
  organization,
}: OrganizationTabsProps) {
  const [activeTab, setActiveTab] = useState("Overview");
  const { organizationId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="mb-8 overflow-x-auto border-b border-[#c7c4d8]">
      <nav className="flex min-w-max gap-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => {
                if (tab === "Projects" && organizationId) {
                  navigate(`/organizations/${organizationId}/projects`);
                  return;
                }
                setActiveTab(tab);
              }}
              className={`relative border-b-2 px-1 py-3 text-sm font-medium transition ${isActive
                ? "border-[#3525cd] text-[#3525cd]"
                : "border-transparent text-[#464555] hover:border-[#c7c4d8] hover:text-[#191c1d]"
                }`}
            >
              {tab}

              {tab === "Members" && (
                <span className="ml-2 rounded-full bg-[#e7e8e9] px-2 py-0.5 text-xs text-[#464555]">
                  {organization.memberships?.length ?? 0}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}