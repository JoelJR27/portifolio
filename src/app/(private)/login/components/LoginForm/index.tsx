'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema, loginSchema } from '@/lib/schemas';
import { Checkbox } from '@/components/ui/checkbox';
import ErrorMessage from '@/components/ErrorMessage';
import { authenticate } from '@/app/actions/authenticate';
import { Loader } from 'lucide-react';

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorOnAuth, setErrorOnAuth] = useState<string | undefined>(undefined);
  const { reset, register, handleSubmit, formState } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const { errors } = formState;

  async function onSubmit(data: LoginSchema) {
    const parsedData = loginSchema.safeParse(data);
    if (!parsedData.success) return;

    setIsSubmitting(true);
    setErrorOnAuth(undefined);

    try {
      const response = await authenticate(parsedData);
      if (!response?.success) return setErrorOnAuth(response?.message);
      window.location.href = '/admin';
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-5 md:w-1/2 lg:w-1/4 xl:w-1/3 2xl:w-[20%]"
    >
      <div className="flex flex-col gap-2 py-2">
        <Label
          htmlFor="email"
          className="text-lg text-gray/80 dark:text-white/80"
        >
          E-mail:
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="exemplo@exemplo.com"
          className="text-gray/80 shadow-2xl dark:text-white"
          {...register('email')}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex justify-between">
          <Label
            htmlFor="password"
            className="text-lg text-gray/80 dark:text-white/80"
          >
            Senha
          </Label>
          <span className="flex items-center gap-1">
            <Checkbox
              onCheckedChange={() => setIsChecked(!isChecked)}
              id="showPassword"
              aria-checked={isChecked}
              className="shadow-2xl"
            />
            <Label
              htmlFor="showPassword"
              className="text-gray/80 dark:text-white/80"
            >
              Mostrar senha
            </Label>
          </span>
        </div>
        <Input
          id="password"
          type={isChecked ? 'text' : 'password'}
          placeholder="**********"
          className="text-gray/80 shadow-2xl dark:text-white"
          {...register('password')}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>
      {errorOnAuth && <ErrorMessage>{errorOnAuth}</ErrorMessage>}
      <footer className="flex justify-between py-1">
        <Button
          variant={'ghost'}
          className="bg-alert"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            setErrorOnAuth(undefined);
            reset();
          }}
        >
          Cancelar
        </Button>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <Loader className="animate-spin" /> : 'Enviar'}
        </Button>
      </footer>
    </form>
  );
}
