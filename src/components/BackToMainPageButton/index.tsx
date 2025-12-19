'use client';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import LoadingIcon from '../LoadingIcon';

export default function BackToMainPageButton() {
  return (
    <Link
      className="group mt-2 flex items-center gap-1 text-lg text-gray underline-offset-4 hover:underline dark:text-white"
      href="/"
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = '/';
      }}
    >
      <ChevronLeft size={24} />
      Início
      <LoadingIcon />
    </Link>
  );
}
