import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear() || 2026;
  // TODO: criar um modal com formulário de envio de email
  return (
    <footer className="mt-20 flex flex-col items-center gap-1 p-8 lg:mt-0">
      <p className="text-small">Envie-me uma mensagem!</p>
      <Link
        className="p-2 text-h2 hover:underline dark:text-white"
        href={'mailto:devjoeljunior@gmail.com'}
      >
        devjoeljunior@gmail.com
      </Link>
      <p className="text-small text-wrap">
        Imaginado e desenvolvido por Joel Júnior {'</>'}
      </p>
      <p className="text-sm">
        {' '}
        <Link
          href="/admin"
          style={{ cursor: 'default', color: 'rgba(222, 229, 229, 0.7)' }}
        >
          <span className="text-gray/70 dark:text-white/70">&copy;</span>
        </Link>{' '}
        {currentYear}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
