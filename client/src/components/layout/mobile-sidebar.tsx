"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  CheckSquare,
  User,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function MobileSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white lg:hidden">
      <nav className="flex items-center justify-around p-3">
        {links.map((link) => {
          const Icon = link.icon;

          const isActive =
            pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center gap-1 text-xs ${
                isActive
                  ? "text-black"
                  : "text-slate-500"
              }`}
            >
              <Icon size={20} />

              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}