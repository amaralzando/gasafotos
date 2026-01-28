"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Info,
  Share2,
  Sliders,
  Heart,
  Trash2,
  MapPin,
} from "lucide-react";

const SAMPLE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVz26bDoaGT3PlTjNMVeRWU469mfA2jp51hFEc1EpODQ3WldNgbWB9Q1PKRh_mk5ZZIfZnUX2lRfzY6NLlxc5fYLXgfZHMCbhDpHjav1SOdVlZdjgrfEcdylpjjNm22i41TQA1k1EgIz_aYqVr1t_uIob3AxbEq6Lf475BqrPARO66VKjWfZ5zgCHH0AqV7_ICQwygVwb6prl1kuH4QpRr95NDtCIOM310RjxlTW9wMKSfgsI4Dw08FdujRhpCaj4rmWt-5jKhxXQ";

export function ViewerScreen({ id }: { id: string }) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-[#101922] text-slate-200">
      <header className="absolute left-0 top-0 z-30 w-full transition-all duration-300">
        <div className="pointer-events-none absolute inset-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="relative flex items-center justify-between px-6 py-6 md:px-8">
          <Link
            href="/app/fotos"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <div className="flex flex-col items-center text-center drop-shadow-md">
            <h2 className="text-base font-medium tracking-wide text-white md:text-lg">
              July 14, 2023 • 4:21 PM
            </h2>
            <span className="mt-0.5 flex items-center gap-1 text-xs font-light text-white/80 md:text-sm">
              <MapPin className="size-4" />
              San Francisco, CA
            </span>
          </div>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Info className="size-5" />
          </button>
        </div>
      </header>

      <main className="group/viewer relative flex flex-1 items-center justify-center bg-[#0d141b]">
        <Link
          href={`/app/foto/${Number(id) - 1 || 1}`}
          className="absolute left-4 z-20 rounded-full border border-white/10 bg-black/40 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-[#137fec] hover:text-white opacity-0 group-hover/viewer:opacity-100 md:left-8"
        >
          <ChevronLeft className="size-6" />
        </Link>

        <div className="relative flex size-full select-none items-center justify-center p-4 md:p-10">
          <div
            className="max-h-full max-w-full rounded-lg bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: `url(${SAMPLE_IMAGE})`,
              aspectRatio: "16/10",
              minHeight: 300,
            }}
            role="img"
            aria-label="Scenic mountain landscape with a lake"
          />
        </div>

        <Link
          href={`/app/foto/${Number(id) + 1}`}
          className="absolute right-4 z-20 rounded-full border border-white/10 bg-black/40 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-[#137fec] hover:text-white opacity-0 group-hover/viewer:opacity-100 md:right-8"
        >
          <ChevronRight className="size-6" />
        </Link>
      </main>

      <div className="absolute bottom-8 left-0 z-30 flex w-full justify-center pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-[#1e293b]/80 px-4 py-2 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:scale-105">
          <button
            type="button"
            className="flex size-12 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Share2 className="size-6" />
          </button>
          <button
            type="button"
            className="flex size-12 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Sliders className="size-6" />
          </button>
          <button
            type="button"
            className="flex size-12 items-center justify-center rounded-full text-red-500 transition-colors hover:bg-white/10"
          >
            <Heart className="size-6 fill-current" />
          </button>
          <div className="mx-1 h-6 w-px bg-white/10" />
          <button
            type="button"
            className="flex size-12 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <Trash2 className="size-6" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 h-1 w-full bg-gradient-to-r from-transparent via-[#137fec]/50 to-transparent opacity-50" />
    </div>
  );
}
