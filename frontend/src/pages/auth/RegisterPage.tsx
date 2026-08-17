import RegisterForm from "../../components/auth/RegisterForm";
import RegisterHero from "../../components/auth/RegisterHero";
const RegisterPage = () => {
  return (
    <main className="flex min-h-screen overflow-hidden bg-[#fbf8ff]">
      <RegisterHero />

      <section className="relative flex w-full items-center justify-center bg-white px-[16px] py-[48px] md:px-[48px] lg:w-1/2">
        <RegisterForm />
      </section>
    </main>
  );
};

export default RegisterPage;