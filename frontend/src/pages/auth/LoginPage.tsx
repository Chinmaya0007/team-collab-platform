import LoginForm from "../../components/auth/LoginForm";
import AuthHero from "../../components/auth/AuthHero";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen w-full bg-[#fbf8ff]">
      {/* Left Side */}
      <AuthHero />

      {/* Right Side */}
      <section className="flex w-full items-center justify-center bg-[#fbf8ff] px-6 py-10 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-[440px]">
          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;