import {
    Building2,
    CheckCircle2,
    Edit3,
    ExternalLink,
    Link,
    Mail,
    MessageSquare,
    Star,
    Users,
} from "lucide-react";
import { ReactNode } from "react";

type Stat = {
    icon: ReactNode;
    title: string;
    value: string;
    color: string;
};

type Activity = {
    id: number;
    title: string;
    time: string;
    description: string;
    type: "task" | "comment" | "milestone";
    attachment?: string;
    quote?: string;
};

type Organization = {
    name: string;
    initials: string;
    color: string;
};

const stats: Stat[] = [
    {
        icon: <CheckCircle2 size={22} />,
        value: "1,284",
        title: "Tasks Completed",
        color: "text-[#3525cd]",
    },
    {
        icon: <Building2 size={22} />,
        value: "42",
        title: "Projects Contributed",
        color: "text-cyan-600",
    },
    {
        icon: <Star size={22} />,
        value: "315",
        title: "Reviews Done",
        color: "text-green-600",
    },
];

const teams = [
    "Design",
    "Frontend",
    "Accessibility Guild",
];

const organizations: Organization[] = [
    {
        initials: "AC",
        name: "Acme Corp",
        color: "text-[#3525cd]",
    },
    {
        initials: "CL",
        name: "Creative Labs",
        color: "text-cyan-600",
    },
];

const activities: Activity[] = [
    {
        id: 1,
        title: "Task Completed",
        time: "2 hours ago",
        type: "task",
        description:
            'Completed "Final UI Polish for Design System 2.0" in the Nexus Project.',
        attachment: "style-guide-v2.fig",
    },
    {
        id: 2,
        title: "New Comment",
        time: "5 hours ago",
        type: "comment",
        description:
            'Replied to "Navigation logic update" thread on the Boards interface task.',
        quote:
            "The proposed flow looks great, but let's ensure the mobile transition handles the bottom bar correctly.",
    },
    {
        id: 3,
        title: "Project Milestone",
        time: "Yesterday",
        type: "milestone",
        description:
            'Successfully launched the "Nexus Beta" portal with 100% test coverage.',
    },
];

const TeamBadge = ({
    label,
}: {
    label: string;
}) => (
    <span className="rounded-full bg-[#ece8ff] px-4 py-2 text-sm font-medium text-[#3525cd]">
        {label}
    </span>
);

const OrganizationItem = ({
    organization,
}: {
    organization: Organization;
}) => (
    <div className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-[#f5f5fb]">
        <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg bg-[#ececf5] font-bold ${organization.color}`}
        >
            {organization.initials}
        </div>

        <span className="font-medium text-[#1a1b22]">
            {organization.name}
        </span>
    </div>
);

const StatCard = ({
    stat,
}: {
    stat: Stat;
}) => (
    <div className="rounded-2xl border-l-4 border-[#3525cd] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className={stat.color}>
            {stat.icon}
        </div>

        <h3 className="mt-4 text-4xl font-bold text-[#1a1b22]">
            {stat.value}
        </h3>

        <p className="mt-2 text-sm text-[#6b7280]">
            {stat.title}
        </p>
    </div>
);

const ActivityItem = ({
    activity,
}: {
    activity: Activity;
}) => (
    <div className="flex gap-5">
        <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ece8ff] text-[#3525cd]">
                {activity.type === "task" && (
                    <CheckCircle2 size={20} />
                )}

                {activity.type === "comment" && (
                    <MessageSquare size={20} />
                )}

                {activity.type === "milestone" && (
                    <Star size={20} />
                )}
            </div>

            {activity.id !== activities.length && (
                <div className="mt-2 h-full w-[2px] bg-[#e5e7eb]" />
            )}
        </div>

        <div className="flex-1 pb-8">
            <div className="flex items-center gap-2">
                <h4 className="font-semibold text-[#1a1b22]">
                    {activity.title}
                </h4>

                <span className="text-sm text-[#9ca3af]">
                    • {activity.time}
                </span>
            </div>

            <p className="mt-2 leading-7 text-[#6b7280]">
                {activity.description}
            </p>

            {activity.attachment && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-[#fafbff] px-4 py-3">
                    <Link size={16} />
                    {activity.attachment}
                </div>
            )}

            {activity.quote && (
                <div className="mt-4 border-l-2 border-[#3525cd] pl-4 italic text-[#4b5563]">
                    "{activity.quote}"
                </div>
            )}
        </div>
    </div>
);
const ProfileContent = () => {
    return (
        <section className="flex h-full w-full flex-col overflow-y-auto bg-[#fbf8ff]">
            {/* Hero */}

            <div className="relative h-[280px] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80"
                    alt="Profile Cover"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Profile Header */}

            <div className="relative mx-auto -mt-28 w-full max-w-[1400px] px-8">
                <div className="grid grid-cols-12 items-end gap-8">
                    <div className="col-span-12 flex items-end gap-6 lg:col-span-6">
                        {/* Avatar */}

                        <div className="relative">
                            <div className="h-40 w-40 overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
                                    alt="Alex Weaver"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                                <div className="h-5 w-5 rounded-full border-2 border-white bg-green-500" />
                            </div>
                        </div>

                        {/* Name */}

                        <div className="pb-3">
                            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                                Alex Weaver
                            </h1>

                            <div className="mt-3 inline-flex rounded-xl bg-[#4f46e5]/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                                Senior Product Designer
                            </div>
                        </div>
                    </div>

                    {/* Action */}

                    <div className="col-span-12 flex justify-start pb-4 lg:col-span-6 lg:justify-end">
                        <button className="flex items-center gap-2 rounded-2xl bg-[#3525cd] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <Edit3 size={18} />
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Content */}

                <div className="mt-10 grid grid-cols-12 gap-8">
                    {/* Left Sidebar */}

                    <div className="col-span-12 flex flex-col gap-8 lg:col-span-4">
                        {/* About */}

                        <div className="rounded-2xl border border-[#e8e8ef] bg-white p-8 shadow-sm">
                            <h2 className="text-xl font-semibold text-[#1a1b22]">
                                About
                            </h2>

                            <p className="mt-5 leading-8 text-[#6b7280]">
                                Senior Product Designer at Nexus. Passionate about design
                                systems and accessibility. Crafting high-fidelity experiences
                                for complex enterprise environments.
                            </p>

                            <div className="mt-8 space-y-5 border-t border-[#ececf5] pt-6">
                                <div className="flex items-center gap-4 text-[#6b7280]">
                                    <Mail
                                        size={18}
                                        className="text-[#3525cd]"
                                    />

                                    <span>alex.weaver@nexus.com</span>
                                </div>

                                <div className="flex items-center gap-4 text-[#6b7280]">
                                    <MessageSquare
                                        size={18}
                                        className="text-[#3525cd]"
                                    />

                                    <span>@alexweaver on Slack</span>
                                </div>

                                <div className="flex items-center gap-4 text-[#6b7280]">
                                    <ExternalLink
                                        size={18}
                                        className="text-[#3525cd]"
                                    />

                                    <span>linkedin.com/in/alexweaver</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Network */}

                        <div className="rounded-2xl border border-[#e8e8ef] bg-white p-8 shadow-sm">
                            <h2 className="text-xl font-semibold text-[#1a1b22]">
                                Professional Network
                            </h2>

                            <div className="mt-8">
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#9ca3af]">
                                    Teams
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {teams.map((team) => (
                                        <TeamBadge
                                            key={team}
                                            label={team}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10">
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#9ca3af]">
                                    Organizations
                                </p>

                                <div className="space-y-3">
                                    {organizations.map((organization) => (
                                        <OrganizationItem
                                            key={organization.name}
                                            organization={organization}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}

                    <div className="col-span-12 flex flex-col gap-8 lg:col-span-8">            {/* Stats */}

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {stats.map((stat) => (
                                <StatCard
                                    key={stat.title}
                                    stat={stat}
                                />
                            ))}
                        </div>

                        {/* Activity Feed */}

                        <div className="overflow-hidden rounded-2xl border border-[#e8e8ef] bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-[#ececf5] px-8 py-6">
                                <h2 className="text-xl font-semibold text-[#1a1b22]">
                                    Recent Activity
                                </h2>

                                <button className="font-medium text-[#3525cd] transition hover:underline">
                                    View All History
                                </button>
                            </div>

                            <div className="p-8">
                                {activities.map((activity) => (
                                    <ActivityItem
                                        key={activity.id}
                                        activity={activity}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <footer className="mt-12 border-t border-[#e5e7eb] py-8">
                    <div className="flex flex-col items-center justify-between gap-5 text-sm text-[#6b7280] md:flex-row">
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-[#3525cd]">
                                Nexus
                            </span>

                            <span>
                                © 2026 Nexus Technologies. All rights reserved.
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <button className="transition hover:text-[#3525cd]">
                                Privacy Policy
                            </button>

                            <button className="transition hover:text-[#3525cd]">
                                Terms of Service
                            </button>

                            <button className="transition hover:text-[#3525cd]">
                                Security
                            </button>

                            <button className="transition hover:text-[#3525cd]">
                                Status
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default ProfileContent;