import SubmitButton from '@/app/(private)/login/components/SubmitButton';

interface FormProps {
  children: React.ReactNode;
  action?: (formData: FormData) => Promise<void>;
  buttonText?: string;
}

export default function Form({ children, action, buttonText }: FormProps) {
  return (
    <form className="mb-6 flex flex-col gap-1 p-4" action={action}>
      {children}

      <SubmitButton>{buttonText ?? 'Cadastrar'}</SubmitButton>
    </form>
  );
}
