import {
    AlertTriangle,
    Bell,
    Brush,
    CreditCard,
    KeyRound,
    Lock,
    Monitor,
    Palette,
    Save,
    Shield,
    Trash2,
    User,
    Users,
} from "lucide-react";
import type { ReactNode } from "react";

type SettingsTab = {
    id: string;
    label: string;
    icon: ReactNode;
    active?: boolean;
};

type Preference = {
    id: number;
    title: string;
    description: string;
    enabled: boolean;
};

type DangerAction = {
    title: string;
    description: string;
    button: string;
    destructive?: boolean;
};

const tabs: SettingsTab[] = [
    {
        id: "general",
        label: "General",
        icon: <User size={18} />,
        active: true,
    },
    {
        id: "account",
        label: "Account",
        icon: <Monitor size={18} />,
    },
    {
        id: "security",
        label: "Security",
        icon: <Shield size={18} />,
    },
    {
        id: "password",
        label: "Password",
        icon: <Lock size={18} />,
    },
    {
        id: "sessions",
        label: "Sessions",
        icon: <Monitor size={18} />,
    },
    {
        id: "notifications",
        label: "Notifications",
        icon: <Bell size={18} />,
    },
    {
        id: "appearance",
        label: "Appearance",
        icon: <Palette size={18} />,
    },
    {
        id: "members",
        label: "Members",
        icon: <Users size={18} />,
    },
    {
        id: "tokens",
        label: "API Tokens",
        icon: <KeyRound size={18} />,
    },
    {
        id: "billing",
        label: "Billing",
        icon: <CreditCard size={18} />,
    },
];

const preferences: Preference[] = [
    {
        id: 1,
        title: "Automatic Project Updates",
        description: "Receive live data stream for active boards.",
        enabled: true,
    },
    {
        id: 2,
        title: "Email Digest",
        description: "Weekly summary of workspace activity.",
        enabled: false,
    },
];

const dangerActions: DangerAction[] = [
    {
        title: "Transfer Ownership",
        description:
            "Hand over this workspace to another member of your organization.",
        button: "Transfer",
    },
    {
        title: "Delete Account",
        description:
            "Permanently delete your account and all associated data. This cannot be undone.",
        button: "Delete Account",
        destructive: true,
    },
];

const SettingNavItem = ({
    item,
}: {
    item: SettingsTab;
}) => (
    <button
        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${item.active
                ? "bg-[#ece8ff] font-semibold text-[#3525cd]"
                : "text-[#6b7280] hover:bg-[#f5f5fb]"
            }`}
    >
        {item.icon}

        <span>{item.label}</span>
    </button>
);

const PreferenceToggle = ({
    preference,
}: {
    preference: Preference;
}) => (
    <div className="flex items-center justify-between border-b border-[#ececf5] py-5 last:border-none">
        <div>
            <h4 className="font-semibold text-[#1a1b22]">
                {preference.title}
            </h4>

            <p className="mt-1 text-sm text-[#6b7280]">
                {preference.description}
            </p>
        </div>

        <button
            className={`relative h-7 w-12 rounded-full transition ${preference.enabled
                    ? "bg-[#3525cd]"
                    : "bg-[#d1d5db]"
                }`}
        >
            <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${preference.enabled
                        ? "left-6"
                        : "left-1"
                    }`}
            />
        </button>
    </div>
);

const DangerCard = ({
    action,
}: {
    action: DangerAction;
}) => (
    <div className="flex flex-col justify-between gap-5 rounded-2xl border border-red-200 bg-white p-6 md:flex-row md:items-center">
        <div>
            <h4 className="font-semibold text-[#1a1b22]">
                {action.title}
            </h4>

            <p className="mt-2 text-[#6b7280]">
                {action.description}
            </p>
        </div>

        <button
            className={`rounded-xl px-6 py-3 font-semibold transition ${action.destructive
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "border border-red-500 text-red-600 hover:bg-red-50"
                }`}
        >
            {action.destructive ? (
                <div className="flex items-center gap-2">
                    <Trash2 size={18} />
                    {action.button}
                </div>
            ) : (
                action.button
            )}
        </button>
    </div>
);
const SettingsContent = () => {
    return (
        <section className="flex h-full w-full flex-col overflow-y-auto bg-[#fbf8ff]">
            <div className="mx-auto w-full max-w-[1200px] px-8 py-10">
                {/* Header */}

                <div className="mb-10">
                    <h1 className="text-4xl font-bold tracking-tight text-[#1a1b22]">
                        System Settings
                    </h1>

                    <p className="mt-2 text-[#6b7280]">
                        Manage your personal workspace, security preferences, and team
                        configuration.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {/* Navigation */}

                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-6 rounded-2xl border border-[#e8e8ef] bg-white p-5 shadow-sm">
                            <div className="space-y-2">
                                {tabs.map((item) => (
                                    <SettingNavItem
                                        key={item.id}
                                        item={item}
                                    />
                                ))}
                            </div>

                            <div className="mt-8 border-t border-[#ececf5] pt-8">
                                <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-[2px] text-[#9ca3af]">
                                    System Health
                                </p>

                                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-semibold text-red-600 transition hover:bg-red-50">
                                    <AlertTriangle size={18} />

                                    <span>Danger Zone</span>
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}

                    <div className="col-span-12 flex flex-col gap-8 lg:col-span-9">
                        {/* General Settings */}

                        <div className="rounded-2xl border border-[#e8e8ef] bg-white p-8 shadow-sm">
                            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <h2 className="text-2xl font-semibold text-[#1a1b22]">
                                    General Settings
                                </h2>

                                <button className="flex items-center gap-2 rounded-xl bg-[#3525cd] px-6 py-3 font-semibold text-white shadow transition hover:bg-[#2f20b8]">
                                    <Save size={18} />
                                    Save Changes
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Profile Photo */}

                                <div className="col-span-full mb-2 flex items-center gap-8">
                                    <div className="group relative cursor-pointer">
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
                                            alt="Profile"
                                            className="h-24 w-24 rounded-full object-cover ring-4 ring-[#ececf5] transition-all group-hover:ring-[#3525cd]"
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition group-hover:opacity-100">
                                            <Brush
                                                size={22}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#1a1b22]">
                                            Profile Photo
                                        </h3>

                                        <p className="mt-1 text-sm text-[#6b7280]">
                                            Update your avatar. Recommended size: 400 × 400px.
                                        </p>

                                        <div className="mt-4 flex gap-4">
                                            <button className="font-semibold text-[#3525cd] transition hover:underline">
                                                Upload New
                                            </button>

                                            <button className="font-semibold text-red-600 transition hover:underline">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Display Name */}

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#6b7280]">
                                        Display Name
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue="Alex Rivera"
                                        className="h-11 rounded-xl border border-[#d9dbe8] bg-white px-4 outline-none transition focus:border-[#3525cd] focus:ring-4 focus:ring-[#3525cd]/15"
                                    />
                                </div>

                                {/* Email */}

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#6b7280]">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        defaultValue="alex.rivera@nexus.tech"
                                        className="h-11 rounded-xl border border-[#d9dbe8] bg-white px-4 outline-none transition focus:border-[#3525cd] focus:ring-4 focus:ring-[#3525cd]/15"
                                    />
                                </div>

                                {/* Timezone */}

                                <div className="col-span-full flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#6b7280]">
                                        Timezone
                                    </label>

                                    <select className="h-11 rounded-xl border border-[#d9dbe8] bg-white px-4 outline-none transition focus:border-[#3525cd] focus:ring-4 focus:ring-[#3525cd]/15">
                                        <option>
                                            (GMT-08:00) Pacific Time (US & Canada)
                                        </option>

                                        <option>
                                            (GMT-05:00) Eastern Time (US & Canada)
                                        </option>

                                        <option>
                                            (GMT+00:00) London, Lisbon
                                        </option>

                                        <option>
                                            (GMT+01:00) Paris, Berlin
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Workspace Preferences */}

                        <div className="rounded-2xl border border-[#e8e8ef] bg-white p-8 shadow-sm">
                            <h2 className="mb-8 text-2xl font-semibold text-[#1a1b22]">
                                Workspace Preferences
                            </h2>

                            <div>
                                {preferences.map((preference) => (
                                    <PreferenceToggle
                                        key={preference.id}
                                        preference={preference}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Danger Zone */}

                        <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-red-50/40 shadow-sm">
                            <div className="flex items-center gap-3 border-b border-red-200 bg-red-100/60 px-8 py-5">
                                <AlertTriangle
                                    size={22}
                                    className="text-red-600"
                                />

                                <h2 className="text-xl font-semibold text-red-600">
                                    Danger Zone
                                </h2>
                            </div>

                            <div className="space-y-5 p-8">
                                {dangerActions.map((action) => (
                                    <DangerCard
                                        key={action.title}
                                        action={action}
                                    />
                                ))}
                            </div>

                            <div className="border-t border-red-200 bg-red-100/40 px-8 py-4">
                                <p className="text-sm italic text-red-600">
                                    Note: These actions are destructive and might require
                                    multi-factor authentication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <footer className="mt-12 border-t border-[#e5e7eb] py-8">
                    <div className="flex flex-col items-center justify-between gap-5 text-sm text-[#6b7280] md:flex-row">
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-[#3525cd]">
                                Nexus Workspace
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

export default SettingsContent;