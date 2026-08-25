"use client";

import { useState } from "react";
import {
  GitCommitHorizontal,
  History,
} from "lucide-react";

export default function TaskActivity() {
  const [activeTab, setActiveTab] = useState<
    "activity" | "commits"
  >("activity");

  return (
    <section>
      {/* Tabs */}
      <div className="flex border-b border-[#c7c4d8]/40">
        <button
          type="button"
          onClick={() => setActiveTab("activity")}
          className={`border-b-2 px-4 py-2 text-sm font-medium transition ${
            activeTab === "activity"
              ? "border-[#3525cd] text-[#3525cd]"
              : "border-transparent text-[#464555] hover:text-[#191c1d]"
          }`}
        >
          Activity & Comments
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("commits")}
          className={`border-b-2 px-4 py-2 text-sm font-medium transition ${
            activeTab === "commits"
              ? "border-[#3525cd] text-[#3525cd]"
              : "border-transparent text-[#464555] hover:text-[#191c1d]"
          }`}
        >
          Commits
        </button>
      </div>

      {/* Activity */}
      {activeTab === "activity" && (
        <div className="mt-6">
          <div className="flex min-h-[140px] items-center justify-center rounded-xl border border-dashed border-[#c7c4d8]/50 bg-[#f8f9fa] p-6">
            <div className="text-center">
              <History
                size={30}
                className="mx-auto mb-3 text-[#9ca3af]"
              />

              <p className="text-sm font-medium text-[#464555]">
                No activity yet
              </p>

              <p className="mt-1 text-xs text-[#777587]">
                Task activity and comments will appear here.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Commits */}
      {activeTab === "commits" && (
        <div className="mt-6">
          <div className="flex min-h-[140px] items-center justify-center rounded-xl border border-dashed border-[#c7c4d8]/50 bg-[#f8f9fa] p-6">
            <div className="text-center">
              <GitCommitHorizontal
                size={30}
                className="mx-auto mb-3 text-[#9ca3af]"
              />

              <p className="text-sm font-medium text-[#464555]">
                No commits linked
              </p>

              <p className="mt-1 text-xs text-[#777587]">
                Git commits associated with this task will appear here.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}