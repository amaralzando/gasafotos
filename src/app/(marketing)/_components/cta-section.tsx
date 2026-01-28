import Link from "next/link";
import { Camera, ChevronRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg sm:size-16">
          <Camera className="size-8 sm:size-9" />
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Suas fotos na nuvem.
          <br />
          Preço que cabe no bolso.
        </h2>
        <p className="mt-4 text-lg text-white/90 sm:text-xl">
          Comece grátis. Sem cartão. Cancele quando quiser.
        </p>
        <Link
          href="/auth"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-amber-600 shadow-lg transition-all hover:bg-white/95 hover:shadow-xl"
        >
          Começar grátis
          <ChevronRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}
