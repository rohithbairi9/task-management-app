"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { logoutUser } from "@/services/api/auth-api";

import { useAuthStore } from "@/store/auth-store";

export default function Navbar() {
  const router = useRouter();

  const user = useAuthStore(
    (state) => state.user
  );

  const setUser = useAuthStore(
    (state) => state.setUser
  );

  const handleLogout = async () => {
    try {
      await logoutUser();

      setUser(null);

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex items-center justify-between border-b bg-white px-6 py-4">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        TaskApp
      </Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <p>{user.name}</p>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              Login
            </Link>

            <Link href="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}