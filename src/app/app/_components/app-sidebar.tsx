"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Image,
  Compass,
  Users,
  Library,
  Heart,
  Trash2,
  CloudUpload,
  Cloud,
  Home,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app/inicio", icon: Home, label: "Início" },
  { href: "/app/fotos", icon: Image, label: "Fotos" },
  { href: "/app/explore", icon: Compass, label: "Explore" },
  { href: "/app/sharing", icon: Users, label: "Sharing" },
  { href: "/app/library", icon: Library, label: "Library" },
];

const smartAlbums = [
  { href: "/app/favorites", icon: Heart, label: "Favorites" },
  { href: "/app/trash", icon: Trash2, label: "Trash" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-[#15202b] z-20">
      <div className="flex items-center gap-3 p-6">
        <div className="flex size-8 items-center justify-center rounded-lg bg-[#137fec] text-white">
          <Cloud className="size-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          PhotoCloud
        </h1>
      </div>
      <nav className="flex flex-1 flex-col gap-2 px-4">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#137fec]/10 text-[#137fec] dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              )}
            >
              <Icon className={cn("size-5", isActive && "fill-[#137fec]")} />
              {label}
            </Link>
          );
        })}
        <div className="mt-2 border-t border-slate-200 pt-4 dark:border-slate-800">
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Smart Albums
          </p>
          {smartAlbums.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <Icon className="size-5" />
              {label}
            </Link>
          ))}
          <Link
            href="/app/configuracoes"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
              pathname === "/app/configuracoes"
                ? "bg-[#137fec]/10 text-[#137fec] dark:text-blue-400"
                : "text-slate-600 dark:text-slate-400"
            )}
          >
            <Settings className="size-5" />
            Configurações
          </Link>
        </div>
      </nav>
      <div className="p-4">
        <div className="mb-4 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Storage
            </span>
            <span className="text-xs font-medium text-slate-900 dark:text-white">
              85%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full rounded-full bg-[#137fec]"
              style={{ width: "85%" }}
            />
          </div>
          <p className="mt-2 text-[10px] text-slate-500">
            12.5 GB of 15 GB used
          </p>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#137fec] py-2.5 px-4 font-semibold text-white shadow-sm transition-all hover:bg-blue-600"
        >
          <CloudUpload className="size-5" />
          Upload
        </button>
      </div>
    </aside>
  );
}
