import { Suspense } from 'react';
import Loading from '@/app/loading';

export default async function AdminPage() {

  return (
    <Suspense fallback={<Loading />}>
      <section className="relative flex min-h-screen flex-col items-center px-0 py-10 text-white lg:px-16 lg:py-20"></section>
    </Suspense>
  );
}
