"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    pergunta: "Por que o Gasafotos é mais barato?",
    resposta:
      "Focamos em armazenamento e organização de fotos com tecnologia eficiente e infraestrutura otimizada. Sem pacotes de outros serviços (e-mail, drive, etc.), o custo cai e o preço fica mais justo para quem só quer guardar fotos.",
  },
  {
    pergunta: "Meus arquivos ficam seguros?",
    resposta:
      "Sim. Seus arquivos são armazenados com criptografia e seguimos boas práticas de segurança. Os dados ficam em datacenters confiáveis, com backup e controle de acesso.",
  },
  {
    pergunta: "Posso migrar minhas fotos do Google Fotos?",
    resposta:
      "Estamos trabalhando em ferramentas de importação. Em breve você poderá trazer seus álbuns e fotos para o Gasafotos sem perder organização.",
  },
  {
    pergunta: "Tem período de teste?",
    resposta:
      "Sim. Você pode começar grátis e testar os recursos principais. Quando estiver pronto, escolhe o plano que mais faz sentido para você.",
  },
  {
    pergunta: "Posso cancelar quando quiser?",
    resposta:
      "Sim. Não há fidelidade. Cancele quando quiser e seus arquivos continuam acessíveis até o fim do período pago.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mt-4 text-center text-lg text-zinc-600">
          Tire suas dúvidas antes de começar.
        </p>

        <ul className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <li
              key={i}
              className="rounded-xl border border-zinc-200/80 bg-white shadow-sm transition-colors hover:border-zinc-300/80"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-zinc-900">{faq.pergunta}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-zinc-500 transition-transform",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <div className="border-t border-zinc-100 px-5 py-4">
                  <p className="text-zinc-600">{faq.resposta}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
