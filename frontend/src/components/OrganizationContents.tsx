import {
    Filter,
    Grid2X2,
    List,
    Plus,
    Settings,
    ShieldCheck,
} from "lucide-react";
import {
    useOrganizations,
    useCreateOrganization,
} from "../hooks/useOrganizations";
import { useState } from "react";
import CreateOrganizationModal from "./organization/CreateOrganization";
import { useNavigate } from "react-router-dom";

const OrganizationsContent = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const createOrganizationMutation = useCreateOrganization();
    const {
        data: organizations = [],
        isLoading,
        isError,
    } = useOrganizations();

    console.log("Organizations from API:", organizations); 4
    const storedUser = localStorage.getItem("user");
    const navigate = useNavigate();

    const currentUser = storedUser
        ? JSON.parse(storedUser)
        : null;

    if (isLoading) {
        return (
            <section className="flex min-h-screen w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3525cd]/30 border-t-[#3525cd]" />
            </section>
        );
    }

    if (isError) {
        return (
            <section className="flex min-h-screen w-full items-center justify-center">
                <div className="rounded-[12px] border border-red-200 bg-red-50 px-[20px] py-[16px] text-[14px] text-red-600">
                    Failed to load organizations.
                </div>
            </section>
        );
    }

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

                        <button
                            onClick={() => setIsCreateModalOpen(true)}
                            className="flex items-center gap-[8px] rounded-[10px] bg-[#3525cd] px-[18px] py-[10px] text-[14px] font-semibold text-white shadow-lg shadow-[#3525cd]/20 transition hover:brightness-110"
                        >
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
                        const Icon = ShieldCheck;

                        return (
                            <div
                                key={organization.id}
                                onClick={() =>
                                    navigate(`/organizations/${organization.id}`)
                                }
                                className="group flex flex-col cursor-pointer rounded-[18px] border border-[#e5e7eb] bg-white p-[24px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-[24px] flex items-start justify-between">
                                    <div
                                        className="flex h-[58px] w-[58px] items-center justify-center rounded-[16px]"
                                        style={{
                                            backgroundColor: "#eeedf7",
                                            color: "#3525cd",
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
                                    </div>

                                    <div className="mt-[10px] flex items-center gap-[6px] text-[14px] text-[#6b7280]">
                                        <ShieldCheck size={15} />
                                        <span>
                                            {organization.ownerId === currentUser?.id
                                                ? "Owner"
                                                : "Member"}
                                        </span>
                                    </div>
                                </div>

                                <div className="my-[24px] grid grid-cols-2 gap-[20px] border-y border-[#ececf5] py-[20px]">
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-[#777587]">
                                            Members
                                        </p>

                                        <h4 className="mt-[6px] text-[28px] font-bold text-[#1a1b22]">
                                            {organization.memberships?.length ?? 0}
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-[#777587]">
                                            Projects
                                        </p>

                                        <h4 className="mt-[6px] text-[28px] font-bold text-[#1a1b22]">
                                            0
                                        </h4>
                                    </div>
                                </div>

                                <button className="mt-auto rounded-[12px] cursor-pointer border border-[#3525cd] py-[12px] text-[14px] font-semibold text-[#3525cd] transition-all group-hover:bg-[#3525cd] group-hover:text-white">
                                    Switch to Organization
                                </button>
                            </div>
                        );
                    })}

                    {/* Add Organization Card */}
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="group flex min-h-[360px] flex-col items-center justify-center rounded-[18px] border-2 border-dashed border-[#d6d6df] bg-[#fafbff] p-[32px] transition-all hover:border-[#3525cd] hover:bg-[#f8f7ff]"
                    >
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
            <CreateOrganizationModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreate={async (data) => {
                    try {
                        await createOrganizationMutation.mutateAsync(data);

                        setIsCreateModalOpen(false);
                    } catch (error) {
                        console.error(
                            "Failed to create organization:",
                            error,
                        );
                    }
                }}
            />
        </section>
    );
};

export default OrganizationsContent;