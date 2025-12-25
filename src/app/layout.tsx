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
  description: 'Portifólio profissional do desenvolvedor joel júnior.',
  keywords: [
    'portifolio',
    'joel junior',
    'joel',
    'junior',
    'dev',
    'desenvolvedor web',
    'frontend',
    'backend',
    'fullstack',
    'react',
    'next.js',
    'node.js',
    'javascript',
    'typescript'
  ],
  authors: [
    { name: 'joel júnior', url: 'https://linkedin.com/in/joeljunior27' }
  ],
  creator: 'joel júnior',
  publisher: 'joel júnior',
  category: 'technology',
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
