import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function BackToMainPageButton() {
  return (
    <Link
      className="group flex items-center gap-1 mt-2 text-lg text-gray underline-offset-4 hover:underline dark:text-white"
      href="/"
    >
      <ChevronLeft size={24} />
      Início
    </Link>
  );
}
