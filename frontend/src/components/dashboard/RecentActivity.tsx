import {
    CircleCheck,
    Pencil,
    Upload,
    UserPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Activity {
    name: string;
    action: string;
    target: string;
    time: string;
    icon: LucideIcon;
}

const activities: Activity[] = [
    {
        name: "Sarah",
        action: "completed",
        target: "Task X",
        time: "10 mins ago",
        icon: CircleCheck,
    },
    {
        name: "John",
        action: "joined",
        target: "Project Y",
        time: "2 hours ago",
        icon: UserPlus,
    },
    {
        name: "Alex",
        action: "updated",
        target: "Design System",
        time: "4 hours ago",
        icon: Pencil,
    },
    {
        name: "Emma",
        action: "uploaded",
        target: "Q3_Report.pdf",
        time: "Yesterday",
        icon: Upload,
    },
];

export default function RecentActivity() {
    return (
        <section className="rounded-lg border border-[#c7c4d8] bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#191c1d]">
                Recent Activity
            </h3>

            <div>
                {activities.map((activity, index) => {
                    const Icon = activity.icon;

                    return (
                        <div
                            key={`${activity.name}-${activity.target}`}
                            className={`flex gap-3 py-4 first:pt-0 ${index !== activities.length - 1
                                    ? "border-b border-[#c7c4d8]/40"
                                    : "pb-0"
                                }`}
                        >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dbe2fa] text-[#3525cd]">
                                <Icon size={15} />
                            </div>

                            <div>
                                <p className="text-sm leading-5 text-[#191c1d]">
                                    <span className="font-semibold">
                                        {activity.name}
                                    </span>{" "}
                                    {activity.action}{" "}
                                    <span className="font-semibold">
                                        {activity.target}
                                    </span>
                                </p>

                                <p className="mt-1 text-xs text-[#777587]">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}