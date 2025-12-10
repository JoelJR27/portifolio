import BackToMainPageButton from '@/components/BackToMainPageButton';
import { ModeToggle } from '@/components/ModeToggle';

export default function LoginLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='flex items-center justify-between p-8 md:justify-evenly'>
        <nav>
          <BackToMainPageButton />
        </nav>
        <ModeToggle />
      </header>
      <main className="bg-background h-screen">{children}</main>
    </>
  );
}
