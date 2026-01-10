import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center">
        <h1>404 - Página não encontrada!</h1>
        <Link href={'/'}>Voltar para página inicial</Link>
      </main>
    </>
  );
}
