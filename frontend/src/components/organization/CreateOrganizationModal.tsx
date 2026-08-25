"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

interface OrganizationFormData {
    name: string;
    slug: string;
    description: string;
}

interface CreateOrganizationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: OrganizationFormData) => void | Promise<void>;
    isLoading?: boolean;
}

const slugify = (value: string) => {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
};

export default function CreateOrganizationModal({
    isOpen,
    onClose,
    onSubmit,
    isLoading = false,
}: CreateOrganizationModalProps) {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!isOpen) {
            setName("");
            setSlug("");
            setDescription("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleNameChange = (value: string) => {
        setName(value);
        setSlug(slugify(value));
    };

    const handleSlugChange = (value: string) => {
        setSlug(slugify(value));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !slug.trim()) return;

        await onSubmit({
            name: name.trim(),
            slug: slug.trim(),
            description: description.trim(),
        });
    };

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        if (e.target === e.currentTarget && !isLoading) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm"
            onClick={handleOverlayClick}
        >
            <div
                className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[#c7c4d8] bg-white shadow-lg"
                role="dialog"
                aria-modal="true"
                aria-labelledby="create-org-title"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#c7c4d8]/50 px-6 py-5">
                    <h2
                        id="create-org-title"
                        className="font-geist text-lg font-semibold text-[#191c1d]"
                    >
                        Create Organization
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isLoading}
                        aria-label="Close modal"
                        className="rounded-full p-1 text-[#464555] transition-colors hover:bg-[#f3f4f5] hover:text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#3525cd]/20 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Body */}
                    <div className="space-y-6 px-6 py-6">
                        {/* Organization Name */}
                        <div className="space-y-2">
                            <label
                                htmlFor="orgName"
                                className="block text-sm font-medium text-[#191c1d]"
                            >
                                Organization Name
                            </label>

                            <input
                                id="orgName"
                                type="text"
                                value={name}
                                onChange={(e) => handleNameChange(e.target.value)}
                                placeholder="Acme Inc."
                                disabled={isLoading}
                                className="w-full rounded-lg border border-[#c7c4d8] bg-transparent px-3 py-2 text-sm text-[#191c1d] outline-none placeholder:text-[#464555]/50 focus:border-[#3525cd] focus:ring-1 focus:ring-[#3525cd] disabled:cursor-not-allowed disabled:opacity-60"
                            />
                        </div>

                        {/* Organization Slug */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between gap-4">
                                <label
                                    htmlFor="orgSlug"
                                    className="block text-sm font-medium text-[#191c1d]"
                                >
                                    Organization Slug
                                </label>

                                <span className="hidden text-xs text-[#464555]/70 sm:block">
                                    nexus.app/organizations/
                                    <span className="font-medium text-[#191c1d]">
                                        {slug || "your-slug"}
                                    </span>
                                </span>
                            </div>

                            <div className="relative">
                                <input
                                    id="orgSlug"
                                    type="text"
                                    value={slug}
                                    onChange={(e) => handleSlugChange(e.target.value)}
                                    placeholder="acme-inc"
                                    disabled={isLoading}
                                    className="w-full rounded-lg border border-[#c7c4d8] bg-transparent py-2 pl-3 pr-10 text-sm text-[#191c1d] outline-none placeholder:text-[#464555]/50 focus:border-[#3525cd] focus:ring-1 focus:ring-[#3525cd] disabled:cursor-not-allowed disabled:opacity-60"
                                />

                                {slug && (
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <CheckCircle2
                                            size={20}
                                            className="text-emerald-500"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Mobile preview */}
                            <div className="text-xs text-[#464555]/70 sm:hidden">
                                nexus.app/organizations/
                                <span className="font-medium text-[#191c1d]">
                                    {slug || "your-slug"}
                                </span>
                            </div>

                            <p className="text-[13px] text-[#464555]">
                                This will be your workspace&apos;s unique identifier.
                            </p>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label
                                htmlFor="orgDescription"
                                className="block text-sm font-medium text-[#191c1d]"
                            >
                                Description{" "}
                                <span className="font-normal text-[#464555]">
                                    (optional)
                                </span>
                            </label>

                            <textarea
                                id="orgDescription"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="What is this organization about?"
                                rows={3}
                                disabled={isLoading}
                                className="w-full resize-none rounded-lg border border-[#c7c4d8] bg-transparent px-3 py-2 text-sm text-[#191c1d] outline-none placeholder:text-[#464555]/50 focus:border-[#3525cd] focus:ring-1 focus:ring-[#3525cd] disabled:cursor-not-allowed disabled:opacity-60"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 border-t border-[#c7c4d8]/50 bg-[#f3f4f5]/30 px-6 py-5">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isLoading}
                            className="rounded-lg border border-[#c7c4d8] px-4 py-2 text-sm font-medium text-[#191c1d] transition-colors hover:bg-[#f3f4f5] focus:outline-none focus:ring-2 focus:ring-[#3525cd]/20 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={!name.trim() || !slug.trim() || isLoading}
                            className="rounded-lg bg-[#3525cd] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3525cd]/90 focus:outline-none focus:ring-2 focus:ring-[#3525cd]/20 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading ? "Creating..." : "Create Organization"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}