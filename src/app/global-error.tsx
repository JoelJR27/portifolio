'use client';

import BackToMainPageButton from '@/components/BackToMainPageButton';
import { ThemeProvider } from '@/components/ThemeProvider';
interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <head>
        <title>Erro | Portifólio</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="p-6">
            <header>
              <BackToMainPageButton />
            </header>
            <section className="flex min-h-screen flex-col items-center justify-center bg-white p-4 dark:bg-gray">
              <h1 className="mb-4 text-center font-bold text-gray text-shadow-2xs dark:text-white">
                Oops! Algo deu errado.
              </h1>
              <p className="mb-4 text-center font-semibold text-wrap text-alert">
                <span className="text-xl font-black">Erro: </span>
                &#10092; {error.message} &#10093;
              </p>
              <button
                onClick={reset}
                className="cursor-pointer rounded bg-primary px-4 py-2 text-2xl text-white hover:bg-primary/70 dark:bg-primary dark:hover:bg-primary/70"
              >
                Tentar novamente
              </button>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
