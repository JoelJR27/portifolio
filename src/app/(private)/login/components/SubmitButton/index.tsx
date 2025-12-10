'use client';
import { useFormStatus } from 'react-dom';
import { type ComponentProps } from 'react';
import { LoaderCircle } from 'lucide-react';

type Props = ComponentProps<'button'> & {
  children: React.ReactNode;
};

export default function SubmitButton({ children, ...props }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-4 flex cursor-pointer justify-center rounded-md bg-primary p-2 font-anton text-shadow-2xs hover:bg-primary/70"
      {...props}
      type="submit"
      aria-disabled={pending}
      onSubmit={(event: React.FormEvent) => event.preventDefault()}
    >
      {pending ? <LoaderCircle size={32} className="animate-spin" /> : children}
    </button>
  );
}
