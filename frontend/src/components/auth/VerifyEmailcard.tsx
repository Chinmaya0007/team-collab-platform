import { useEffect, useState } from "react";
import { ArrowLeft, Check, Mail, RefreshCw } from "lucide-react";

const VerifyEmailCard = () => {
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    if (timeLeft > 0) return;

    // TODO: Call resend email API
    console.log("Resend Email");

    setTimeLeft(59);
  };

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="mx-auto w-full max-w-[480px] rounded-[24px] border border-white/40 bg-white/70 p-[32px] text-center shadow-[0_20px_60px_rgba(53,37,205,0.08)] backdrop-blur-[16px]">
      {/* Illustration */}
      <div className="relative mx-auto mb-[28px] flex h-[128px] w-[128px] items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#4f46e5]/10 animate-pulse" />

        <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#3525cd] shadow-[0_12px_32px_rgba(53,37,205,.25)]">
          <Mail
            size={38}
            className="text-white"
          />
        </div>

        <div className="absolute right-[6px] top-[6px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#4ae176] shadow-md">
          <Check
            size={18}
            className="text-white"
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-[30px] font-bold text-[#1a1b22]">
        Verify your email
      </h1>

      <p className="mx-auto mt-[14px] max-w-[320px] text-[15px] leading-[24px] text-[#464555]">
        We've sent a verification link to
      </p>

      <p className="mt-[6px] font-semibold text-[#1a1b22]">
        alex.weaver@nexus.com
      </p>

      {/* Buttons */}
      <div className="mt-[32px] space-y-[16px]">
        <button
          onClick={handleResend}
          disabled={timeLeft > 0}
          className="flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[14px] bg-[#3525cd] px-[20px] text-[15px] font-semibold text-white transition hover:bg-[#2d20b3] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <RefreshCw size={18} />

          Resend Email

          <span className="ml-auto rounded-full bg-white/20 px-[10px] py-[2px] text-[12px]">
            {minutes}:{seconds}
          </span>
        </button>

        <button className="flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[14px] border border-[#d7d5e7] bg-white text-[15px] font-medium text-[#464555] transition hover:bg-[#f6f4ff]">
          <ArrowLeft size={18} />

          Back to Login
        </button>
      </div>

      {/* Support */}
      <div className="mt-[28px] border-t border-[#e7e6ef] pt-[24px]">
        <p className="text-[13px] leading-[22px] text-[#777587]">
          Didn't receive the email?
          <br />
          Check your spam folder or{" "}
          <button className="font-semibold text-[#3525cd] hover:underline">
            contact support
          </button>
          .
        </p>
      </div>

      {/* Features */}
      <div className="mt-[32px] grid grid-cols-3 gap-[12px]">
        <div className="rounded-[14px] bg-[#f7f5ff] p-[14px]">
          <div className="mb-[6px] text-[20px]">🛡️</div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#777587]">
            Secure
          </p>
        </div>

        <div className="rounded-[14px] bg-[#f7f5ff] p-[14px]">
          <div className="mb-[6px] text-[20px]">⚡</div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#777587]">
            Fast
          </p>
        </div>

        <div className="rounded-[14px] bg-[#f7f5ff] p-[14px]">
          <div className="mb-[6px] text-[20px]">✨</div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#777587]">
            Premium
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCard;