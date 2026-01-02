import Loading from '@/app/loading';
import { Suspense } from 'react';

export default function AdminProjectsPage() {
  return <Suspense fallback={<Loading />}>AdminProjectsPage</Suspense>;
}
