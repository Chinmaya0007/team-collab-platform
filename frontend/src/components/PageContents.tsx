import {
  ArrowDown,
  Grid2X2,
  List,
  MoreVertical,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  useProjects,
  useCreateProject,
} from "../hooks/useProjects";

import { useState } from "react";
import CreateProjectModal from "./project/CreateProject";

const ProjectsContent = () => {
  const { organizationId } = useParams();
  const navigate = useNavigate();

  const [isCreateModalOpen, setIsCreateModalOpen] =
    useState(false);

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useProjects(organizationId ?? "");

  const createProjectMutation = useCreateProject();

  const handleCreateProject = async (data: {
    name: string;
    slug: string;
    description: string;
  }) => {
    if (!organizationId) {
      console.error("Organization ID is missing");
      return;
    }

    try {
      await createProjectMutation.mutateAsync({
        organizationId,
        name: data.name,
        slug: data.slug,
        description: data.description,
      });

      setIsCreateModalOpen(false);
    } catch (error) {
      console.error("Failed to create project:", error);
    }
  };

  return (
    <section className="flex w-full flex-col p-[32px]">
      {/* Header */}
      <div className="mb-[32px] flex flex-wrap items-end justify-between gap-[20px]">
        <div>
          <h1 className="text-[32px] font-bold text-[#1a1b22]">
            Projects
          </h1>

          <p className="mt-[6px] text-[15px] text-[#666]">
            Manage and track your organization's initiative progress.
          </p>
        </div>

        <div className="flex rounded-[12px] bg-[#eeedf7] p-[4px]">
          <button
            type="button"
            className="rounded-[8px] bg-white p-[8px] shadow-sm"
          >
            <Grid2X2 size={18} />
          </button>

          <button
            type="button"
            className="rounded-[8px] p-[8px] text-[#777587]"
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-[32px] flex flex-wrap items-center justify-between gap-[20px] border-b border-[#e4e4ec] pb-[20px]">
        <div className="flex flex-wrap gap-[12px]">
          <button
            type="button"
            className="flex items-center gap-[8px] rounded-full border border-[#d7d5e7] px-[16px] py-[8px] text-[14px]"
          >
            Status: All
            <ArrowDown size={16} />
          </button>

          <button
            type="button"
            className="flex items-center gap-[8px] rounded-full border border-[#d7d5e7] px-[16px] py-[8px] text-[14px]"
          >
            All Projects
            <ArrowDown size={16} />
          </button>
        </div>

        <button
          type="button"
          className="flex items-center gap-[6px] text-[14px] font-semibold text-[#3525cd]"
        >
          Last Modified
          <ArrowDown size={16} />
        </button>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#3525cd]/30 border-t-[#3525cd]" />
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-600">
          Failed to load projects.
        </div>
      )}

      {/* Projects */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-[18px] border border-[#e4e4ec] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project accent */}
              <div className="h-[5px] bg-[#3525cd]" />

              <div className="flex flex-col p-[22px]">
                <div className="mb-[18px] flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/projects/${project.id}/board`)
                      }
                      className="truncate text-left text-[18px] font-semibold text-[#1a1b22] hover:text-[#3525cd]"
                    >
                      {project.name}
                    </button>

                    <p className="mt-[8px] text-[13px] text-[#777587]">
                      Slug: {project.slug}
                    </p>

                    <p className="mt-[8px] text-[14px] leading-[24px] text-[#666]">
                      {project.description ||
                        "No description provided."}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="shrink-0 rounded-lg p-1 text-[#777587] transition hover:bg-[#f3f4f5] hover:text-[#191c1d]"
                    aria-label={`More options for ${project.name}`}
                  >
                    <MoreVertical size={18} />
                  </button>
                </div>

                {/* Project information */}
                <div className="flex flex-wrap gap-[8px]">
                  <span className="rounded-full bg-[#eef2ff] px-[12px] py-[4px] text-[11px] font-semibold text-[#3525cd]">
                    Project
                  </span>

                  <span className="rounded-full bg-[#f3f4f5] px-[12px] py-[4px] text-[11px] font-medium text-[#464555]">
                    {project.organizationId}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-[#ececf5] bg-[#fafafe] px-[22px] py-[18px]">
                <div className="flex items-center gap-2">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#eef2ff] text-sm font-semibold text-[#3525cd]">
                    {project.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <span className="text-[13px] text-[#666]">
                    Project
                  </span>
                </div>

                <span className="text-[12px] text-[#777587]">
                  {project.createdAt
                    ? new Date(
                      project.createdAt,
                    ).toLocaleDateString()
                    : ""}
                </span>
              </div>
            </div>
          ))}

          {/* Empty state */}
          {projects.length === 0 && (
            <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center rounded-[18px] border border-dashed border-[#d7d5e7] bg-white">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#eef2ff] text-[28px] font-bold text-[#3525cd]">
                +
              </div>

              <h3 className="mt-[18px] text-[18px] font-semibold text-[#1a1b22]">
                No projects yet
              </h3>

              <p className="mt-[6px] text-[14px] text-[#666]">
                Create your first project for this organization.
              </p>

              <button
                type="button"
                onClick={() => setIsCreateModalOpen(true)}
                className="mt-[18px] rounded-lg bg-[#3525cd] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f20b8]"
              >
                Create Project
              </button>
            </div>
          )}

          {/* Add Project Card */}
          {projects.length > 0 && (
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(true)}
              className="flex min-h-[280px] flex-col items-center justify-center gap-[18px] rounded-[18px] border-2 border-dashed border-[#d7d5e7] transition hover:border-[#3525cd] hover:bg-[#f8f7ff]"
            >
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#eef2ff] text-[28px] font-bold text-[#3525cd]">
                +
              </div>

              <div className="text-center">
                <h3 className="text-[18px] font-semibold">
                  Start New Project
                </h3>

                <p className="mt-[6px] text-[14px] text-[#666]">
                  Bring your vision to life
                </p>
              </div>
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-[48px] flex flex-wrap items-center justify-between gap-[16px] border-t border-[#e4e4ec] pt-[24px] text-[13px] text-[#777587]">
        <span>© 2026 Nexus Technologies</span>

        <div className="flex flex-wrap gap-[20px]">
          <button type="button">Privacy</button>
          <button type="button">Terms</button>
          <button type="button">Security</button>
          <button type="button">Status</button>
        </div>
      </footer>

      {/* Create Project Modal */}
      {organizationId && (
        <CreateProjectModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onCreate={handleCreateProject}
        />
      )}
    </section>
  );
};

export default ProjectsContent;