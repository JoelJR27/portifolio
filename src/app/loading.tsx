import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Loader2Icon className="animate-spin text-gray/50 dark:text-white/50" size={60} />
    </main>
  );
}
