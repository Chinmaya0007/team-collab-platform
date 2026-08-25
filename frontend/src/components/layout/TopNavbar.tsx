"use client";

import { Search, Bell } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-[#c7c4d8] bg-white">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-4 md:px-8">
        <h1 className="text-xl font-semibold text-[#191c1d]">
          Nexus Workspace
        </h1>

        <div className="flex flex-1 items-center justify-end gap-5">
          <div className="relative hidden w-full max-w-md md:block">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777587]"
              size={18}
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-[#c7c4d8] bg-white py-2 pl-10 pr-4 text-sm outline-none transition focus:border-[#3525cd] focus:ring-2 focus:ring-[#3525cd]/20"
            />
          </div>

          <button
            aria-label="Notifications"
            className="relative text-[#464555] transition hover:text-[#3525cd]"
          >
            <Bell size={21} />

            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dbe2fa] font-semibold text-[#3525cd]">
            A
          </div>
        </div>
      </div>
    </header>
  );
}