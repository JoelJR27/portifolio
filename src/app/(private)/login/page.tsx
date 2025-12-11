import Form from './components/Form';
import Input from './components/Input';
import InputPassword from './components/InputPassword';
import Label from './components/Label';
import SubmitButton from './components/SubmitButton';

export default function LoginPage() {
  return (
    <section className="flex h-screen flex-col items-center justify-center text-white">
      <h1 className="py-4 text-center text-h1 text-gray dark:text-white">
        Login administrador
      </h1>
      <Form>
        <Label htmlFor="email">Email:</Label>
        <Input
          name="email"
          type="email"
          autoComplete="email"
          autoFocus={true}
          placeholder="exemplo@email.com"
        />
        <Label htmlFor="password">Senha:</Label>
        <InputPassword />
        <SubmitButton>Entrar</SubmitButton>
      </Form>
    </section>
  );
}
