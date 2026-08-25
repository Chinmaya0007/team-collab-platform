import TopNavbar from "../components/layout/TopNavbar";
import OrganizationHeader from "../components/organization/OrganizationHeader";
import OrganizationStats from "../components/organization/OrganizationStats";
import OrganizationTabs from "../components/organization/OrganizationTabs";
import { useParams } from "react-router-dom";
import { useOrganization } from "../hooks/useOrganizations";
import { useProjects } from "../hooks/useProjects";

export default function OrganizationDetailsPage() {
    const { organizationId } = useParams();

    const {
        data: projects = [],
    } = useProjects(organizationId ?? "");

    console.log("Organization projects:", projects);

    const {
        data: organization,
        isLoading,
        isError,
    } = useOrganization(organizationId ?? "");
    if (isLoading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3525cd]/30 border-t-[#3525cd]" />
            </main>
        );
    }

    if (isError || !organization) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
                <p className="text-sm text-red-600">
                    Failed to load organization.
                </p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#f8f9fa]">
            <TopNavbar />

            <div className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-8 md:py-8 lg:px-10">
                <nav className="mb-6 flex items-center text-sm text-[#464555]">
                    <button className="transition hover:text-[#3525cd]">
                        Organizations
                    </button>

                    <span className="mx-2 text-[#777587]">/</span>

                    <span className="font-medium text-[#191c1d]">
                        Acme Corp
                    </span>
                </nav>

                <OrganizationHeader organization={organization} />

                <OrganizationTabs organization={organization} />

                <OrganizationStats
                    organization={organization}
                    projects={projects}
                />
            </div>
        </main>
    );
}