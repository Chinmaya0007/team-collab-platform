import { useMemo, useState } from "react";
import {
    ArrowRight,
    Eye,
    EyeOff,
    Mail,
    User,
} from "lucide-react";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const strength = useMemo(() => {
        const password = form.password;

        let score = 0;

        if (password.length > 6) score++;
        if (password.length > 10) score++;
        if (/[A-Z]/.test(password) && /\d/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        return score;
    }, [form.password]);

    const strengthLabel = [
        "Too short",
        "Weak",
        "Good",
        "Strong",
        "Excellent",
    ];

    const strengthColor = [
        "bg-[#ba1a1a]",
        "bg-[#00687a]",
        "bg-[#4ae176]",
        "bg-[#007030]",
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(form);
    };

    return (
        <>
            {/* Mobile Logo */}
            <div className="mb-[32px] flex items-center gap-[12px] lg:hidden">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#3525cd] text-[18px] font-bold text-white">
                    N
                </div>

                <h2 className="text-[24px] font-bold text-[#3525cd]">
                    Nexus
                </h2>
            </div>
            <div className="w-full max-w-[420px]">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-[4px]"
                >
                    {/* Header */}
                    <div className="mb-[32px]">
                        <h1 className="text-[32px] font-bold text-[#1a1b22]">
                            Create your account
                        </h1>

                        <p className="mt-[8px] text-[14px] text-[#464555]">
                            Get started with the workspace that scales with your
                            growth.
                        </p>
                    </div>
                    {/* Row */}
                    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
                        {/* Full Name */}
                        <div>
                            <label className="mb-[8px] block text-[14px] font-medium text-[#464555]">
                                Full Name
                            </label>

                            <div className="relative">
                                <input
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="h-[48px] w-full rounded-[12px] border border-[#c7c4d8] bg-white px-[16px] pr-[44px] outline-none transition focus:border-[#3525cd] focus:shadow-[0_0_0_3px_rgba(53,37,205,.2)]"
                                />

                                <User
                                    size={18}
                                    className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#777587]"
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <div>
                            <label className="mb-[8px] block text-[14px] font-medium text-[#464555]">
                                Username
                            </label>

                            <input
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="johndoe"
                                className="h-[48px] w-full rounded-[12px] border border-[#c7c4d8] bg-white px-[16px] outline-none transition focus:border-[#3525cd] focus:shadow-[0_0_0_3px_rgba(53,37,205,.2)]"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-[8px] block text-[14px] font-medium text-[#464555]">
                            Work Email
                        </label>

                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="name@company.com"
                                className="h-[48px] w-full rounded-[12px] border border-[#c7c4d8] bg-white px-[16px] pr-[44px] outline-none transition focus:border-[#3525cd] focus:shadow-[0_0_0_3px_rgba(53,37,205,.2)]"
                            />

                            <Mail
                                size={18}
                                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#777587]"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-[8px] block text-[14px] font-medium text-[#464555]">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="h-[48px] w-full rounded-[12px] border border-[#c7c4d8] bg-white px-[16px] pr-[48px] outline-none transition focus:border-[#3525cd] focus:shadow-[0_0_0_3px_rgba(53,37,205,.2)]"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#777587]"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {/* Strength */}
                        <div className="mt-[12px]">
                            <div className="flex gap-[4px]">
                                {[0, 1, 2, 3].map((item) => (
                                    <div
                                        key={item}
                                        className={`h-[4px] flex-1 rounded-full ${item < strength
                                                ? strengthColor[
                                                Math.max(strength - 1, 0)
                                                ]
                                                : "bg-[#e8e7f1]"
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="mt-[8px] text-[12px] text-[#777587]">
                                Password strength:{" "}
                                {strengthLabel[strength]}
                            </p>
                        </div>
                    </div>

                    {/* Confirm */}
                    <div>
                        <label className="mb-[8px] block text-[14px] font-medium text-[#464555]">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="h-[48px] w-full rounded-[12px] border border-[#c7c4d8] bg-white px-[16px] outline-none transition focus:border-[#3525cd] focus:shadow-[0_0_0_3px_rgba(53,37,205,.2)]"
                        />
                    </div>

                    {/* Terms */}
                    <label className="flex cursor-pointer items-start gap-[12px] mt-2">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={form.terms}
                            onChange={handleChange}
                            className="mt-[2px] h-[18px] w-[18px] accent-[#3525cd]"
                        />

                        <span className="text-[14px] leading-[22px] text-[#464555]">
                            I agree to the{" "}
                            <button
                                type="button"
                                className="font-semibold text-[#3525cd]"
                            >
                                Terms of Service
                            </button>{" "}
                            and{" "}
                            <button
                                type="button"
                                className="font-semibold text-[#3525cd]"
                            >
                                Privacy Policy
                            </button>
                            .
                        </span>
                    </label>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="flex h-[50px] mt-2 w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#3525cd] text-[16px] font-semibold text-white transition hover:bg-[#2f20b8]"
                    >
                        Create Account

                        <ArrowRight size={18} />
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-[16px]">
                        <div className="h-px flex-1 bg-[#c7c4d8]" />

                        <span className="text-[12px] uppercase tracking-[0.18em] text-[#777587]">
                            Or sign up with
                        </span>

                        <div className="h-px flex-1 bg-[#c7c4d8]" />
                    </div>

                    {/* Social */}
                    <div className="grid grid-cols-2 gap-[16px]">
                        <button
                            type="button"
                            className="flex h-[48px] items-center justify-center gap-[10px] rounded-[12px] border border-[#c7c4d8] hover:bg-[#f4f2fd]"
                        >
                            <img
                                src="/google.svg"
                                alt="Google"
                                className="h-[20px] w-[20px]"
                            />

                            Google
                        </button>

                        <button
                            type="button"
                            className="flex h-[48px] items-center justify-center gap-[10px] rounded-[12px] border border-[#c7c4d8] hover:bg-[#f4f2fd]"
                        >
                            {/* <Github size={18} /> */}

                            GitHub
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="pt-[16px] text-center text-[14px] text-[#464555]">
                        Already have an account?{" "}
                        <button
                            type="button"
                            className="font-semibold text-[#3525cd]"
                        >
                            Login here
                        </button>
                    </p>
                </form>
            </div>
        </>
    );
};
export default RegisterForm;