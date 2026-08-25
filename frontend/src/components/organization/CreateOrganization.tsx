"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Link as LinkIcon,
  X,
} from "lucide-react";

interface CreateOrganizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (data: {
    name: string;
    slug: string;
    description: string;
  }) => void;
}

export default function CreateOrganizationModal({
  isOpen,
  onClose,
  onCreate,
}: CreateOrganizationModalProps) {
  const [name, setName] = useState("Skyline Systems");
  const [slug, setSlug] = useState("skyline");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCreate = () => {
    onCreate?.({
      name,
      slug,
      description,
    });
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 w-full cursor-default bg-[#191c1d]/40 backdrop-blur-sm"
      />

      {/* Modal wrapper */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center md:items-center md:p-4">
        <div className="pointer-events-auto flex max-h-[90vh] w-full animate-in slide-in-from-bottom duration-300 md:w-[500px] md:slide-in-from-bottom-0 md:zoom-in-95">
          <div className="flex w-full flex-col overflow-hidden rounded-t-[24px] border-t border-[#c7c4d8]/30 bg-white shadow-xl md:rounded-xl md:border">
            {/* Mobile Handle */}
            <div className="flex justify-center pb-1 pt-3 md:hidden">
              <div className="h-1.5 w-12 rounded-full bg-[#c7c4d8]/50" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#edeeef] px-6 pb-4 pt-6 md:py-6">
              <div>
                <h2 className="text-lg font-medium text-[#191c1d]">
                  Create New Organization
                </h2>

                <p className="mt-1 text-sm text-[#464555]">
                  Set up a workspace for your team.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#464555] transition-colors hover:bg-[#f3f4f5] hover:text-[#191c1d]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
              {/* Organization Name */}
              <div className="space-y-2">
                <label
                  htmlFor="org-name"
                  className="block text-sm font-medium text-[#191c1d]"
                >
                  Organization Name
                </label>

                <input
                  id="org-name"
                  name="org-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="h-11 w-full rounded-lg border border-[#c7c4d8] bg-white px-3 text-sm text-[#191c1d] outline-none transition-all placeholder:text-[#464555]/50 focus:border-[#3525cd] focus:ring-2 focus:ring-[#3525cd]/20"
                />
              </div>

              {/* Workspace Slug */}
              <div className="space-y-2">
                <label
                  htmlFor="org-slug"
                  className="block text-sm font-medium text-[#191c1d]"
                >
                  Workspace Slug
                </label>

                <div className="relative">
                  <input
                    id="org-slug"
                    name="org-slug"
                    type="text"
                    value={slug}
                    onChange={(e) =>
                      setSlug(
                        e.target.value
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                      )
                    }
                    placeholder="your-slug"
                    className="h-11 w-full rounded-lg border border-[#3525cd]/40 bg-[#3525cd]/5 pl-3 pr-10 text-sm text-[#191c1d] outline-none transition-all focus:border-[#3525cd] focus:ring-2 focus:ring-[#3525cd]/20"
                  />

                  {slug && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500">
                      <CheckCircle2 size={20} fill="currentColor" />
                    </div>
                  )}
                </div>

                {/* Live Preview */}
                <div className="mt-2 flex items-center gap-2 rounded-lg border border-[#edeeef] bg-[#f3f4f5] p-3 font-mono text-[13px] text-[#464555]">
                  <LinkIcon size={16} />

                  <span>
                    nexus.app/organizations/
                    <span className="font-semibold text-[#3525cd]">
                      {slug || "your-slug"}
                    </span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="org-description"
                  className="block text-sm font-medium text-[#191c1d]"
                >
                  Description{" "}
                  <span className="font-normal text-[#464555]">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="org-description"
                  name="org-description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about your organization..."
                  className="w-full resize-none rounded-lg border border-[#c7c4d8] bg-white p-3 text-sm text-[#191c1d] outline-none transition-all placeholder:text-[#464555]/50 focus:border-[#3525cd] focus:ring-2 focus:ring-[#3525cd]/20"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto flex flex-col-reverse items-center justify-end gap-3 border-t border-[#edeeef] bg-white p-6 md:flex-row">
              <button
                type="button"
                onClick={onClose}
                className="h-11 w-full rounded-xl border border-[#c7c4d8] bg-white px-6 text-sm font-semibold text-[#191c1d] transition-colors hover:bg-[#f3f4f5] md:w-auto"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleCreate}
                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#3525cd] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3525cd]/90 md:w-auto"
              >
                <span>Create Organization</span>

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}