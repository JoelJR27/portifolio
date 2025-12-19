'use client';
import { Loader } from 'lucide-react';
import { useLinkStatus } from 'next/link';

export default function LoadingIcon() {
  const { pending } = useLinkStatus();
  return (
    <>{pending && <Loader className="animate-spin" color="currentColor" />}</>
  );
}
