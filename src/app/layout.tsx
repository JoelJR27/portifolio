import type { Metadata } from 'next';
import './globals.css';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';

const anton = Anton({
  subsets: ['latin'],
  weight: '400'
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900']
});

export const metadata: Metadata = {
  title: 'Portifólio | Joel Júnior',
  description: 'Portifólio profissional do desenvolvedor Joel Júnior.',
  keywords: [
    'Portifólio',
    'Desenvolvedor Web',
    'Frontend',
    'Backend',
    'Fullstack',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'TypeScript'
  ],
  authors: [
    { name: 'Joel Júnior', url: 'https://linkedin.com/in/joeljunior27' }
  ],
  creator: 'Joel Júnior',
  publisher: 'Joel Júnior',
  category: 'Technology',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${anton.className} ${robotoFlex.className}`}
    >
      <body className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
