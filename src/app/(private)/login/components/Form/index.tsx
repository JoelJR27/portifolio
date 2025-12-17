'use client';

import { useState } from 'react';
import { authenticate } from '../../../../../utils/authenticate';

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  const [error, setError] = useState<string | null>(null);

  const handle = async (formData: FormData) => {
    const response = await authenticate(formData);

    if (response?.error) {
      setError(response.error);
      setTimeout(() => setError(null), 10000);
      return;
    }
    window.location.href = '/admin';
  };

  return (
    <form
      id="login-form"
      action={handle}
      className="flex w-full flex-col gap-4 md:w-1/2 md:p-8"
    >
      {children}
      {error && <p style={{ color: 'var(--color-alert)' }}>{error}</p>}
    </form>
  );
}
