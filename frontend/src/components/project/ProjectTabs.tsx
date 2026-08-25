"use client";

import { useState } from "react";

const tabs = [
  "Overview",
  "Board",
  "Tasks",
  "Activity",
  "Settings",
];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="mb-8 overflow-x-auto border-b border-[#c7c4d8]">
      <div className="flex min-w-max gap-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 px-1 pb-3 text-sm font-medium transition ${
                isActive
                  ? "border-[#3525cd] text-[#3525cd]"
                  : "border-transparent text-[#464555] hover:text-[#191c1d]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}