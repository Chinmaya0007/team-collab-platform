const AuthHero = () => {
  return (
    <section className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-[#3525cd] px-[64px] lg:flex">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[320px] w-[320px] rounded-full bg-[#4f46e5]/40 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[288px] w-[288px] rounded-full bg-[#57dffe]/30 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[520px] text-white">
        {/* Logo */}
        <div className="mb-[48px] flex items-center gap-[16px]">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <span className="text-[24px] font-bold text-[#3525cd]">
              N
            </span>
          </div>

          <h2 className="text-[28px] font-bold tracking-[-0.02em]">
            Nexus
          </h2>
        </div>

        {/* Heading */}
        <div className="space-y-[20px]">
          <h1 className="text-[48px] font-bold leading-[56px] tracking-[-0.02em]">
            Scale your productivity with enterprise precision.
          </h1>

          <p className="text-[18px] leading-[28px] text-[#dad7ff]">
            Manage complex workflows, team collaborations, and organizational
            insights through our unified nexus platform.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mt-[64px]">
          <div className="relative overflow-hidden rounded-[16px] border border-white/20 bg-white/10 p-[24px] backdrop-blur-[12px] shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
            {/* Shimmer */}
            <div className="absolute left-0 top-0 h-[4px] w-full shimmer" />

            <div className="mb-[20px] flex items-center justify-between">
              <div className="h-[8px] w-[96px] rounded-full bg-white/30" />

              <div className="h-[24px] w-[24px] rounded-full bg-white/20" />
            </div>

            <div className="grid grid-cols-3 gap-[12px]">
              <div className="h-[64px] rounded-[12px] border border-white/10 bg-white/10" />

              <div className="h-[64px] rounded-[12px] border border-white/10 bg-white/20" />

              <div className="h-[64px] rounded-[12px] border border-white/10 bg-white/10" />
            </div>

            <div className="mt-[12px] flex h-[144px] items-center justify-center rounded-[12px] border border-white/10 bg-white/5">
              <svg
                className="h-[64px] w-[64px] text-white/20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16v10H4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M8 19h8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Floating Decorations */}
          <div className="absolute right-[-32px] top-[-32px] h-[96px] w-[96px] rotate-[12deg] rounded-[24px] bg-[#57dffe]/30 blur-[4px]" />

          <div className="absolute bottom-[-40px] left-[-40px] h-[128px] w-[128px] rounded-full bg-[#4f46e5]/30 blur-[12px]" />
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-[32px] left-[40px] text-[14px] text-white/60">
        © 2026 Nexus Technologies Inc.
      </p>
    </section>
  );
};

export default AuthHero;