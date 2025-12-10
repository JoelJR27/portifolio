import BackToMainPageButton from '@/components/BackToMainPageButton';
import { ModeToggle } from '@/components/ModeToggle';
import LogoutButton from './components/LogoutButton';

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-dark-gray border-b border-b-primary/10 px-6 py-4">
        <nav>
          <ul className="flex items-center justify-between">
            <li className="flex items-center">
              <BackToMainPageButton />
            </li>
            <li className="flex items-center gap-4">
              <ModeToggle />
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </header>
      <main className="min-h-screen w-full bg-white dark:bg-gray">{children}</main>
    </>
  );
}
