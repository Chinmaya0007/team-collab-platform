import { useState } from "react";
import { login } from "../../services/auth.service";
import { ArrowRight, Eye, EyeOff, Mail } from "lucide-react";
import { setAuth } from "../../store/auth.store";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      setIsLoading(true);

      const response = await login({
        email,
        password,
      });

      setAuth(
        response.user,
        response.accessToken,
        response.refreshToken,
      );

      window.location.href = "/dashboard";
    } catch (error: any) {
      setError(
        error?.response?.data?.message ||
        "Invalid email or password.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Mobile Logo */}
      <div className="mb-[32px] flex items-center gap-[12px] lg:hidden">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#3525cd] text-[18px] font-bold text-white">
          N
        </div>

        <h2 className="text-[22px] font-bold text-[#3525cd]">
          Nexus
        </h2>
      </div>

      {/* Heading */}
      <header className="mb-[32px]">
        <h1 className="text-[32px] font-bold leading-[40px] text-[#1a1b22]">
          Welcome back
        </h1>

        <p className="mt-[8px] text-[14px] leading-[20px] text-[#464555]">
          Please enter your details to access your workspace.
        </p>
      </header>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-[24px]"
      >
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-[8px] block text-[14px] font-medium text-[#464555]"
          >
            Email Address
          </label>

          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              className="h-[48px] w-full rounded-[12px] border border-[#c7c4d8] bg-white px-[16px] pr-[48px] text-[14px] text-[#1a1b22] placeholder:text-[#777587] outline-none transition focus:border-[#3525cd] focus:shadow-[0_0_0_3px_rgba(79,70,229,0.2)]"
            />
            <Mail
              size={18}
              className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#777587]"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="mb-[8px] flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-[14px] font-medium text-[#464555]"
            >
              Password
            </label>

            <button
              type="button"
              className="text-[13px] font-medium text-[#3525cd] transition hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-[48px] w-full rounded-[12px] border border-[#c7c4d8] bg-white px-[16px] pr-[48px] text-[14px] text-[#1a1b22] placeholder:text-[#777587] outline-none transition focus:border-[#3525cd] focus:shadow-[0_0_0_3px_rgba(79,70,229,0.2)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#777587] transition hover:text-[#3525cd]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember */}
        <label className="flex cursor-pointer items-center gap-[12px]">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-[18px] w-[18px] accent-[#3525cd]"
          />

          <span className="text-[14px] text-[#464555]">
            Remember me for 30 days
          </span>
        </label>
        {error && (
          <div className="rounded-[12px] border border-red-200 bg-red-50 px-[14px] py-[12px] text-[13px] text-red-600">
            {error}
          </div>
        )}
        {/* Sign In */}
        <button
          type="submit"
          disabled={isLoading}
          className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#3525cd] text-[16px] font-semibold text-white transition hover:bg-[#2f20b8] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <span className="h-[18px] w-[18px] animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight size={18} />
            </>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-[16px]">
          <div className="h-px flex-1 bg-[#c7c4d8]" />

          <span className="text-[13px] font-medium text-[#777587]">
            OR
          </span>

          <div className="h-px flex-1 bg-[#c7c4d8]" />
        </div>

        {/* Google */}
        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center gap-[12px] rounded-[12px] border border-[#c7c4d8] bg-white text-[15px] font-medium text-[#1a1b22] transition hover:bg-[#f4f2fd]"
        >
          <img
            src="/google.svg"
            alt="Google"
            className="h-[20px] w-[20px]"
          />

          Continue with Google
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-[32px] text-center">
        <p className="text-[14px] text-[#464555]">
          Don't have an account?{" "}
          <button
            type="button"
            className="font-semibold text-[#3525cd] transition hover:underline"
          >
            Register now
          </button>
        </p>
      </footer>
    </>
  );
};

export default LoginForm;