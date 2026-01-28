import Link from "next/link";
import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-zinc-700"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
              <Camera className="size-4" />
            </span>
            Gasafotos
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <Link href="#preco" className="transition-colors hover:text-zinc-900">
              Preços
            </Link>
            <Link href="#comparar" className="transition-colors hover:text-zinc-900">
              Comparar
            </Link>
            <Link href="/termos" className="transition-colors hover:text-zinc-900">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="transition-colors hover:text-zinc-900">
              Privacidade
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Gasafotos. Suas fotos na nuvem, com o melhor preço.
        </p>
      </div>
    </footer>
  );
}
