import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Gasafotos",
    tagline: "Mais barato",
    price: "R$ 9,90",
    period: "/mês",
    storage: "100 GB",
    highlight: true,
    features: [
      "Fotos e vídeos em alta qualidade",
      "Busca inteligente por tags",
      "Álbuns e memórias automáticas",
      "Lixeira recuperável 30 dias",
      "Backup automático",
    ],
  },
  {
    name: "Google Fotos",
    tagline: "Concorrência",
    price: "R$ 34,99",
    period: "/mês",
    storage: "100 GB",
    highlight: false,
    features: [
      "Fotos e vídeos em alta qualidade",
      "Busca por IA",
      "Álbuns e memórias",
      "Lixeira 60 dias",
      "Inclui Google One",
    ],
    strikethrough: true,
  },
  {
    name: "iCloud+",
    tagline: "Concorrência",
    price: "R$ 34,99",
    period: "/mês",
    storage: "200 GB",
    highlight: false,
    features: [
      "Fotos e vídeos",
      "Busca por conteúdo",
      "Álbuns compartilhados",
      "Lixeira 30 dias",
      "Só ecossistema Apple",
    ],
    strikethrough: true,
  },
];

export function PricingSection() {
  return (
    <section id="preco" className="relative bg-zinc-50/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="comparar" className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Compare e economize
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600">
            Mesma experiência, preço até 70% menor que Google Fotos e iCloud.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all",
                plan.highlight
                  ? "border-amber-400/80 ring-2 ring-amber-400/30 shadow-lg"
                  : "border-zinc-200/80 hover:border-zinc-300"
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                  Melhor custo-benefício
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-zinc-900">{plan.name}</h3>
                <span className="text-xs font-medium text-zinc-500">
                  {plan.tagline}
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-0.5">
                <span
                  className={cn(
                    "text-3xl font-bold",
                    plan.highlight ? "text-amber-600" : "text-zinc-900",
                    plan.strikethrough && "text-zinc-400"
                  )}
                >
                  {plan.price}
                </span>
                <span className="text-zinc-500">{plan.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{plan.storage}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-700"
                  >
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.highlight ? "text-amber-600" : "text-zinc-400"
                      )}
                    />
                    <span className={plan.strikethrough ? "text-zinc-400" : ""}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.highlight && (
                <Link
                  href="/auth"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-105"
                >
                  Começar agora
                  <ChevronRight className="size-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Valores de referência. Google One 100 GB e iCloud+ 200 GB podem variar por região.
          <br />
          Gasafotos: plano 100 GB ilustrativo; planos reais podem variar.
        </p>
      </div>
    </section>
  );
}
