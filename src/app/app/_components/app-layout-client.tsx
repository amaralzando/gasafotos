"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";

export function AppLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isViewer = pathname?.startsWith("/app/foto/");

  if (isViewer) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f7f8] text-slate-900 selection:bg-[#137fec]/30 dark:bg-[#101922] dark:text-slate-100">
      <AppSidebar />
      <main className="relative flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <div className="mx-auto max-w-[1600px] px-4 pb-12 pt-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
