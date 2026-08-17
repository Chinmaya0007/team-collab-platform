import {
    Building2,
    Filter,
    Grid2X2,
    List,
    Plus,
    Settings,
    ShieldCheck,
    User,
    UserCog,
    Workflow,
    Palette,
    FlaskConical,
} from "lucide-react";

const organizations = [
    {
        id: 1,
        name: "Acme Corp",
        role: "Owner",
        members: 124,
        projects: 18,
        badge: "Primary",
        icon: Building2,
        iconBg: "#dad7ff",
        iconColor: "#3525cd",
    },
    {
        id: 2,
        name: "Global Tech",
        role: "Admin",
        members: 3490,
        projects: 42,
        icon: Workflow,
        iconBg: "#dff8ff",
        iconColor: "#00687a",
    },
    {
        id: 3,
        name: "Nebula Research",
        role: "Member",
        members: 52,
        projects: 7,
        icon: FlaskConical,
        iconBg: "#dcfce7",
        iconColor: "#15803d",
    },
    {
        id: 4,
        name: "Creative Labs",
        role: "Owner",
        members: 8,
        projects: 31,
        icon: Palette,
        iconBg: "#fee2e2",
        iconColor: "#dc2626",
    },
];

const roleIcon = (role: string) => {
    switch (role) {
        case "Owner":
            return <ShieldCheck size={15} />;
        case "Admin":
            return <UserCog size={15} />;
        default:
            return <User size={15} />;
    }
};

const OrganizationsContent = () => {
    return (
        <section className="flex w-full flex-1 flex-col overflow-y-auto">
            {/* Header */}
            <div className="border-b border-[#e5e7eb] bg-white px-[32px] py-[32px]">
                <div className="flex flex-col gap-[24px] lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-[32px] font-bold text-[#1a1b22]">
                            Organizations
                        </h1>

                        <p className="mt-[6px] text-[15px] text-[#6b7280]">
                            Manage and switch between your workspace environments.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-[14px]">
                        <div className="flex rounded-[12px] bg-[#eeedf7] p-[4px]">
                            <button className="rounded-[8px] bg-white p-[8px] shadow-sm">
                                <Grid2X2 size={18} />
                            </button>

                            <button className="rounded-[8px] p-[8px] text-[#777587]">
                                <List size={18} />
                            </button>
                        </div>

                        <button className="flex items-center gap-[8px] rounded-[10px] border border-[#d6d6df] bg-white px-[16px] py-[10px] text-[14px] font-medium hover:bg-[#fafafa]">
                            <Filter size={18} />
                            Filter
                        </button>

                        <button className="flex items-center gap-[8px] rounded-[10px] bg-[#3525cd] px-[18px] py-[10px] text-[14px] font-semibold text-white shadow-lg shadow-[#3525cd]/20 transition hover:brightness-110">
                            <Plus size={18} />
                            Create Organization
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-[32px]">
                <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
                    {organizations.map((organization) => {
                        const Icon = organization.icon;

                        return (
                            <div
                                key={organization.id}
                                className="group flex flex-col rounded-[18px] border border-[#e5e7eb] bg-white p-[24px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-[24px] flex items-start justify-between">
                                    <div
                                        className="flex h-[58px] w-[58px] items-center justify-center rounded-[16px]"
                                        style={{
                                            backgroundColor: organization.iconBg,
                                            color: organization.iconColor,
                                        }}
                                    >
                                        <Icon size={30} />
                                    </div>

                                    <button className="rounded-full p-[6px] text-[#6b7280] transition hover:bg-[#f5f5f8] hover:text-[#3525cd]">
                                        <Settings size={18} />
                                    </button>
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-[8px]">
                                        <h3 className="text-[20px] font-semibold text-[#1a1b22]">
                                            {organization.name}
                                        </h3>

                                        {organization.badge && (
                                            <span className="rounded-full border border-[#bbf7d0] bg-[#dcfce7] px-[10px] py-[2px] text-[11px] font-semibold text-[#15803d]">
                                                {organization.badge}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-[10px] flex items-center gap-[6px] text-[14px] text-[#6b7280]">
                                        {roleIcon(organization.role)}
                                        <span>{organization.role}</span>
                                    </div>
                                </div>

                                <div className="my-[24px] grid grid-cols-2 gap-[20px] border-y border-[#ececf5] py-[20px]">
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-[#777587]">
                                            Members
                                        </p>

                                        <h4 className="mt-[6px] text-[28px] font-bold text-[#1a1b22]">
                                            {organization.members.toLocaleString()}
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-[#777587]">
                                            Projects
                                        </p>

                                        <h4 className="mt-[6px] text-[28px] font-bold text-[#1a1b22]">
                                            {organization.projects}
                                        </h4>
                                    </div>
                                </div>

                                <button className="mt-auto rounded-[12px] border border-[#3525cd] py-[12px] text-[14px] font-semibold text-[#3525cd] transition-all group-hover:bg-[#3525cd] group-hover:text-white">
                                    Switch to Organization
                                </button>
                            </div>
                        );
                    })}

                    {/* Add Organization Card */}
                    <button className="group flex min-h-[360px] flex-col items-center justify-center rounded-[18px] border-2 border-dashed border-[#d6d6df] bg-[#fafbff] p-[32px] transition-all hover:border-[#3525cd] hover:bg-[#f8f7ff]">
                        <div className="mb-[18px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#eeedf7] transition-all group-hover:bg-[#dad7ff]">
                            <Plus
                                size={32}
                                className="text-[#3525cd]"
                            />
                        </div>

                        <h3 className="text-[20px] font-semibold text-[#1a1b22]">
                            Add New Organization
                        </h3>

                        <p className="mt-[8px] text-center text-[14px] leading-[24px] text-[#777587]">
                            Expand your workspace by creating
                            <br />
                            another organization.
                        </p>
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-auto border-t border-[#e5e7eb] bg-white px-[32px] py-[24px]">
                <div className="flex flex-col items-center justify-between gap-[18px] text-[13px] text-[#777587] md:flex-row">
                    <p>© 2026 Nexus Technologies. All rights reserved.</p>

                    <div className="flex flex-wrap gap-[20px]">
                        <button className="hover:text-[#3525cd]">
                            Privacy Policy
                        </button>

                        <button className="hover:text-[#3525cd]">
                            Terms of Service
                        </button>

                        <button className="hover:text-[#3525cd]">
                            Security
                        </button>

                        <button className="hover:text-[#3525cd]">
                            Status
                        </button>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default OrganizationsContent;