"use client";

import { ReactNode, useEffect } from "react";

import { getCurrentUser } from "@/services/api/auth-api";

import { useAuthStore } from "@/store/auth-store";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  const setUser = useAuthStore(
    (state) => state.setUser
  );

  const setLoading = useAuthStore(
    (state) => state.setLoading
  );

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getCurrentUser();

        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [setUser, setLoading]);

  return <>{children}</>;
}