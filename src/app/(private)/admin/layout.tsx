import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AdminSidebar from '@/app/(private)/admin/components/AdminSidebar';
import { cookies } from 'next/headers';
import { ModeToggle } from '@/components/ModeToggle';

export default async function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AdminSidebar />
        <main className="min-h-screen w-full bg-white p-4 dark:bg-gray">
          <header className="flex justify-between">
            <SidebarTrigger />
            <ModeToggle />
          </header>
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
