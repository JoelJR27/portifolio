import Asidemenu from '@/components/Asidemenu';
import AsidemenuProvider from '@/components/Asidemenu/AsidemenuProvider';
import OpenMenuButton from '@/components/Asidemenu/OpenMenuButton';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AsidemenuProvider>
        <OpenMenuButton />
        <Asidemenu />
        <main className="bg-background min-h-screen lg:px-25">
          {children}
          <Footer />
        </main>
      </AsidemenuProvider>
    </>
  );
}
