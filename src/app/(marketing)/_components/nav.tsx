import Link from "next/link";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-zinc-900 transition-opacity hover:opacity-90"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
            <Camera className="size-5" />
          </span>
          <span>Gasafotos</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#preco"
            className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 sm:inline-block"
          >
            Preços
          </Link>
          <Link
            href="#comparar"
            className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 sm:inline-block"
          >
            Comparar
          </Link>
          <Link
            href="/auth"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-105"
            )}
          >
            Começar grátis
          </Link>
        </div>
      </nav>
    </header>
  );
}
