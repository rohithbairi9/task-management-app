import type { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/navbar";

import "./globals.css";

import AuthProvider from "@/providers/auth-provider";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "Task Management App",
  description: "Production Task Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Toaster richColors position="top-right" />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}