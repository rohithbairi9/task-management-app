import { ReactNode } from "react";

import Sidebar from "./sidebar";
import MobileSidebar from "./mobile-sidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        {children}
      </div>

      <MobileSidebar />
    </div>
  );
}