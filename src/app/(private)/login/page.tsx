import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <section className="flex h-screen flex-col items-center justify-center text-white p-2">
      <h1 className="py-4 text-center text-h1 text-gray dark:text-white">
        Login administrador
      </h1>
      <LoginForm />
    </section>
  );
}
