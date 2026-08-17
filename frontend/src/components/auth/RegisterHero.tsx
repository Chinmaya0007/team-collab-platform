const RegisterHero = () => {
  return (
    <section className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-[#e2dfff] px-[64px] lg:flex">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-white/40 blur-[120px]" />

        <div className="absolute bottom-[-80px] right-[-100px] h-[260px] w-[260px] rounded-full bg-[#c3c0ff]/60 blur-[120px]" />

        <div className="absolute left-[15%] top-[45%] h-[180px] w-[180px] rounded-full bg-[#ffffff]/20 blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-[520px] text-center">
        {/* Badge */}
        <div className="mb-[32px] inline-flex items-center gap-[10px] rounded-full border border-white/30 bg-white/20 px-[18px] py-[8px] backdrop-blur-[12px]">
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white/20">
            ✨
          </div>

          <span className="text-[13px] font-medium tracking-[0.02em] text-[#1d1972]">
            Next-Gen Workspace Architecture
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-[#001269]">
          Join the future of high-velocity teams.
        </h1>

        <p className="mt-[20px] text-[18px] leading-[28px] text-[#3323cc]">
          Nexus provides the enterprise-grade foundation your organization
          needs to move faster, communicate clearly, and scale without
          friction.
        </p>

        {/* Floating Card */}
        <div className="relative mx-auto mt-[64px] max-w-[360px]">
          <div className="rounded-[18px] border border-white/30 bg-white/70 p-[24px] shadow-[0_30px_60px_rgba(53,37,205,0.15)] backdrop-blur-[12px] transition duration-500 hover:rotate-0 hover:scale-[1.02] rotate-[2deg]">
            <div className="mb-[20px] flex items-center gap-[16px]">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#4f46e5] text-[20px] text-white">
                🚀
              </div>

              <div className="text-left">
                <h3 className="text-[16px] font-semibold text-[#1a1b22]">
                  New Project Setup
                </h3>

                <p className="mt-[2px] text-[12px] text-[#464555]">
                  Estimated completion: 2 mins
                </p>
              </div>
            </div>

            <div className="h-[8px] overflow-hidden rounded-full bg-[#e8e7f1]">
              <div className="h-full w-[75%] rounded-full bg-[#3525cd]" />
            </div>

            <div className="mt-[10px] flex items-center justify-between text-[12px] text-[#464555]">
              <span>Configuring nodes...</span>

              <span>75%</span>
            </div>
          </div>

          {/* Floating Decorations */}
          <div className="absolute right-[-30px] top-[-20px] h-[80px] w-[80px] rounded-full bg-white/40 blur-[8px]" />

          <div className="absolute bottom-[-30px] left-[-30px] h-[110px] w-[110px] rounded-full bg-[#c3c0ff]/60 blur-[20px]" />
        </div>
      </div>
    </section>
  );
};

export default RegisterHero;