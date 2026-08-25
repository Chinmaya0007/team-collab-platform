"use client";

import { useEffect, useState } from "react";
import {
  X,
  Loader2,
} from "lucide-react";


interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (project: {
    name: string;
    slug: string;
    description: string;
  }) => void;
}


export default function CreateProjectModal({
  isOpen,
  onClose,
  onCreate,
}: CreateProjectModalProps) {
  const [projectName, setProjectName] = useState("New Project");
  const [projectSlug, setProjectSlug] = useState("new-project");
  const [description, setDescription] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const handleNameChange = (value: string) => {
    setProjectName(value);

    setProjectSlug(
      value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    );
  };

  const handleSubmit = async () => {
    if (!projectName.trim() || !projectSlug.trim()) {
      return;
    }

    setIsCreating(true);

    try {
      await onCreate?.({
        name: projectName.trim(),
        slug: projectSlug,
        description: description.trim(),
      });

      onClose();
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm md:items-center md:p-6"
      onMouseDown={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-t-2xl border border-outline-variant bg-surface-container-lowest shadow-2xl md:w-[800px] md:max-w-[90vw] md:flex-row md:rounded-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Mobile Close Button */}
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-surface-container p-1 text-on-surface-variant transition-colors hover:text-on-surface md:hidden"
        >
          <X size={20} />
        </button>

        {/* Left Form Section */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-on-surface md:text-[24px]">
                Create Project
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                Set up a new workspace for your team.
              </p>
            </div>

            {/* Desktop Close */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="hidden rounded-full bg-surface-container p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface md:flex"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <div className="flex-1 space-y-6">
            {/* Project Name */}
            <div className="space-y-1">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-on-surface"
              >
                Project Name <span className="text-error">*</span>
              </label>

              <input
                id="projectName"
                type="text"
                value={projectName}
                onChange={(event) => handleNameChange(event.target.value)}
                placeholder="e.g. Website Redesign"
                className="w-full rounded-lg border border-outline-variant bg-surface-bright px-3 py-2 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
              />
            </div>

            {/* Project Slug */}
            <div className="space-y-1">
              <label
                htmlFor="projectSlug"
                className="flex items-center justify-between text-sm font-medium text-on-surface"
              >
                <span>
                  Project Slug <span className="text-error">*</span>
                </span>

                <span className="text-xs font-normal text-on-surface-variant">
                  Used in the project URL
                </span>
              </label>

              <input
                id="projectSlug"
                type="text"
                value={projectSlug}
                onChange={(event) =>
                  setProjectSlug(
                    event.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9-]/g, "")
                  )
                }
                placeholder="e.g. website-redesign"
                className="w-full rounded-lg border border-outline-variant bg-surface-bright px-3 py-2 text-sm text-on-surface outline-none transition-colors focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
              />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-on-surface"
              >
                Description{" "}
                <span className="ml-1 text-xs font-normal text-on-surface-variant">
                  (Optional)
                </span>
              </label>

              <textarea
                id="projectDescription"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={3}
                placeholder="Briefly describe the goals of this project..."
                className="w-full resize-none rounded-lg border border-outline-variant bg-surface-bright px-3 py-2 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/50 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex justify-end gap-4 border-t border-outline-variant pt-6">
            <button
              type="button"
              onClick={onClose}
              disabled={isCreating}
              className="rounded-lg border border-outline-variant px-5 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={
                isCreating ||
                !projectName.trim() ||
                !projectSlug.trim()
              }
              className="flex items-center gap-2 rounded-lg bg-primary-container px-5 py-2 text-sm font-medium text-on-primary shadow-sm transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isCreating && (
                <Loader2 size={18} className="animate-spin" />
              )}

              {isCreating ? "Creating..." : "Create Project"}
            </button>
          </div>
        </div>

        {/* Right Live Preview */}
        <div className="relative hidden w-[320px] flex-col items-center justify-center overflow-hidden border-l border-outline-variant bg-secondary-fixed/30 p-8 md:flex">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary-container/5 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/3 rounded-full bg-tertiary-container/5 blur-2xl" />

          <div className="relative z-10 mb-6 w-full text-center">
            <h3 className="text-sm font-medium uppercase tracking-wider text-on-surface-variant">
              Live Preview
            </h3>

            <div className="mx-auto mb-6 mt-2 h-px w-12 bg-outline-variant" />
          </div>

          {/* Preview Card */}
          {/* Preview Card */}
          <div className="relative z-10 w-full rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-lg font-semibold text-on-primary shadow-sm">
                {projectName?.[0]?.toUpperCase() || "N"}
              </div>

              <div className="min-w-0">
                <h4 className="truncate text-lg font-semibold text-on-surface">
                  {projectName || "Untitled Project"}
                </h4>

                <p className="mt-0.5 text-xs text-on-surface-variant">
                  Slug: {projectSlug || "---"}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-surface-container" />
              <div className="h-2 w-4/5 rounded-full bg-surface-container" />
              <div className="h-2 w-3/5 rounded-full bg-surface-container" />
            </div>

            <div className="mt-4 border-t border-outline-variant pt-4">
              <p className="text-xs text-on-surface-variant">
                {description || "No description provided."}
              </p>
            </div>
          </div>

          <p className="relative z-10 mt-8 text-center text-[13px] text-on-surface-variant/80">
            This is how your project card will appear on the main dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}