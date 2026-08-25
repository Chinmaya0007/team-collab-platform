import {
    Plus,
    SquareCheckBig,
    UserPlus,
} from "lucide-react";

const actions = [
    {
        label: "Create Project",
        icon: Plus,
        primary: true,
    },
    {
        label: "Create Task",
        icon: SquareCheckBig,
        primary: false,
    },
    {
        label: "Invite Member",
        icon: UserPlus,
        primary: false,
    },
];

export default function QuickActions() {
    return (
        <section className="rounded-lg border border-[#c7c4d8] bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#191c1d]">
                Quick Actions
            </h3>

            <div className="flex flex-col gap-3">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <button
                            key={action.label}
                            className={`flex items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition ${action.primary
                                    ? "bg-[#3525cd] text-white hover:bg-[#1e00a9]"
                                    : "border border-[#c7c4d8] bg-white text-[#191c1d] hover:bg-[#f8f9fa]"
                                }`}
                        >
                            <Icon size={16} />
                            {action.label}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}