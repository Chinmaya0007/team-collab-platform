import VerifyEmailCard from "../../components/auth/VerifyEmailcard";
const VerifyEmailPage = () => {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#fbf8ff] px-[16px] py-[48px]">
            {/* Background Blobs */}
            <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-white/40 blur-[120px]" />

            <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#c3c0ff]/50 blur-[120px]" />

            <div className="relative z-10 w-full">
                {/* Logo */}
                <div className="mb-[32px] text-center">
                    <h1 className="text-[28px] font-bold tracking-[-0.02em] text-[#3525cd]">
                        Nexus
                    </h1>
                </div>

                <VerifyEmailCard />

                <footer className="mt-[64px] text-center text-[12px] text-[#777587]">
                    © 2026 Nexus Technologies. All rights reserved.
                </footer>
            </div>
        </main>
    );
};

export default VerifyEmailPage;