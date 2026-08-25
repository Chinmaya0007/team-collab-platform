import RegisterForm from "../../components/auth/RegisterForm";
import RegisterHero from "../../components/auth/RegisterHero";
const RegisterPage = () => {
  return (
    <div className="min-h-screen w-full lg:flex">
      <RegisterHero />

      <main className="flex min-h-screen w-full items-center justify-center px-[24px] py-[40px] lg:w-1/2 lg:px-[64px]">
        <RegisterForm />
      </main>
    </div>
  );
};

export default RegisterPage;