import Loading from "@/app/loading";
import { Suspense } from "react";

export default function AdminTechnologiesPage() {
  return <Suspense fallback={<Loading />}>AdminTechnologiesPage</Suspense>;
}
