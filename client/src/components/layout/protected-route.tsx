"use client";

import { ReactNode, useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth-store";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const router = useRouter();

  const user = useAuthStore(
    (state) => state.user
  );

  const loading = useAuthStore(
    (state) => state.loading
  );

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}