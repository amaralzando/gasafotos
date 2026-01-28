import Link from "next/link";
import { Camera, Sparkles, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 via-white to-white">
      {/* Decorative grid / photo frames vibe */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8 lg:pt-32 lg:pb-40">
        <div className="flex flex-col items-center text-center">
          {/* Badge "Mais barato" */}
          <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-800 shadow-sm">
            <Sparkles className="size-4 text-amber-600" />
            Mais barato que Google Fotos e iCloud
          </span>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Suas fotos na nuvem.
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Preço que cabe no bolso.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl">
            Armazenamento ilimitado, busca inteligente, memórias automáticas e álbuns
            organizados — tudo isso por uma fração do que você paga hoje.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/auth"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105"
            >
              Começar grátis
              <ChevronRight className="size-5" />
            </Link>
            <Link
              href="#comparar"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-zinc-200 px-8 text-base font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              Ver comparação de preços
            </Link>
          </div>

          {/* Mini social proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="flex size-2 rounded-full bg-emerald-500" />
              Sem cartão de crédito
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex size-2 rounded-full bg-emerald-500" />
              Cancele quando quiser
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex size-2 rounded-full bg-emerald-500" />
              Dados no Brasil
            </span>
          </div>
        </div>

        {/* Hero visual: mock "photos" / frames */}
        <div className="mt-20 flex justify-center">
          <div className="relative flex items-end gap-2">
            <div className="size-24 rounded-xl border-2 border-amber-200/60 bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg sm:size-28 md:size-32" />
            <div className="size-28 rounded-xl border-2 border-amber-200/60 bg-gradient-to-br from-orange-100 to-amber-50 shadow-lg sm:size-32 md:size-40" />
            <div className="size-24 rounded-xl border-2 border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-100 shadow-lg sm:size-28 md:size-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
