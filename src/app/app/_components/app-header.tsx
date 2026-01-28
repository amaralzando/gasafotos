"use client";

import { Search, Bell } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 py-3 backdrop-blur dark:border-slate-800 dark:bg-[#15202b]/90">
      <div className="max-w-2xl flex-1">
        <label className="group relative flex w-full items-center">
          <Search className="absolute left-3 size-5 text-slate-400 transition-colors group-focus-within:text-[#137fec]" />
          <input
            type="text"
            placeholder="Search photos, albums, places..."
            className="h-10 w-full rounded-lg border-none bg-slate-100 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-500 transition-all focus:ring-2 focus:ring-[#137fec]/50 dark:bg-slate-800 dark:text-white"
          />
        </label>
      </div>
      <div className="ml-6 flex items-center gap-4">
        <button
          type="button"
          className="relative rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 rounded-full border-2 border-white bg-red-500 dark:border-[#15202b]" />
        </button>
        <div className="size-9 cursor-pointer rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5">
          <div
            className="size-full rounded-full bg-slate-200 bg-cover bg-center dark:bg-slate-800"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuA0LLqprBeWRFVpGWvt-UkxqGtZqlFh9m2O0YXYLoIZdKm7IMh1wcfUCip3kILAloX7Ox0Dy9HW1-LvLn20e2toqYX1gyZaYem1IRE-XIW_2GG2QxNBKwdmaEV_7TLvBA-V2NG2JcDbH_4CEK4pyTjwoHn0YX9r4HJya-GYtZAhPMxBHK-FWjICs1fKZA2IKcrimANepOVTA5hJqzaagE176ETJSVgd2-SuEQ_PYPS05XcCUxZQ0CJYAobCdiH_2_ViKpBRbH6q_4I)",
            }}
            role="img"
            aria-label="User profile"
          />
        </div>
      </div>
    </header>
  );
}
