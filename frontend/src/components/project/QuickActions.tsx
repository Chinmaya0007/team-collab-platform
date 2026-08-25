import {
  Kanban,
  ListPlus,
  Settings2,
} from "lucide-react";

const actions = [
  {
    label: "Create Task",
    icon: ListPlus,
  },
  {
    label: "Open Board",
    icon: Kanban,
  },
  {
    label: "Project Settings",
    icon: Settings2,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-xl border border-[#c7c4d8] bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-[#191c1d]">
        Quick Actions
      </h3>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              className="flex w-full items-center gap-3 rounded-md border border-[#c7c4d8] bg-[#f3f4f5] px-4 py-3 text-left text-sm font-medium text-[#191c1d] transition hover:bg-[#e7e8e9]"
            >
              <Icon
                size={18}
                className="text-[#3525cd]"
              />

              {action.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}