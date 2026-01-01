import Loading from "@/app/loading";
import { Suspense } from "react";

export default function AdminExperiencesPage() {
  return <Suspense fallback={<Loading />}>AdminExperiencesPage</Suspense>;
}
