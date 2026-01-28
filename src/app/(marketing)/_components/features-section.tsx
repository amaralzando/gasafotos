import {
  Search,
  Layers,
  Sparkles,
  Shield,
  Trash2,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Busca inteligente",
    description:
      "Encontre fotos por pessoa, lugar ou assunto. Tags automáticas organizam tudo por você.",
  },
  {
    icon: Layers,
    title: "Álbuns automáticos",
    description:
      "Álbuns criados na hora com base em datas, locais e temas. Menos trabalho, mais memórias.",
  },
  {
    icon: Sparkles,
    title: "Memórias",
    description:
      "Reviva momentos de 1, 2 ou 3 anos atrás. Lembretes afetivos sem você precisar fazer nada.",
  },
  {
    icon: Cloud,
    title: "Armazenamento generoso",
    description:
      "Muito espaço para fotos e vídeos em alta qualidade. Sem surpresas na fatura.",
  },
  {
    icon: Shield,
    title: "Seguro e privado",
    description:
      "Seus arquivos criptografados. Dados armazenados com responsabilidade e transparência.",
  },
  {
    icon: Trash2,
    title: "Lixeira recuperável",
    description:
      "Apagou por engano? Recupere em até 30 dias. Exclusão definitiva só quando você quiser.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Tudo que você espera de um Google Fotos.
            <br />
            <span className="text-amber-600">Só que mais barato.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600">
            Busca por tags, álbuns automáticos, memórias e muito mais — com preço que
            não dói no bolso.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:border-amber-200/80 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-700 transition-colors group-hover:from-amber-200 group-hover:to-orange-200">
                <f.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-zinc-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
