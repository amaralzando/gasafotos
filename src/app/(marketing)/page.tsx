import type { Metadata } from "next";
import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { PricingSection } from "./_components/pricing-section";
import { FaqSection } from "./_components/faq-section";
import { CtaSection } from "./_components/cta-section";

export const metadata: Metadata = {
  title: "Gasafotos | Suas fotos na nuvem, mais barato que a concorrência",
  description:
    "Armazenamento de fotos na nuvem com busca inteligente, álbuns automáticos e memórias. Preço até 70% menor que Google Fotos e iCloud. Comece grátis.",
  keywords: [
    "fotos na nuvem",
    "armazenamento fotos",
    "backup fotos",
    "galeria fotos",
    "mais barato que Google Fotos",
    "alternativa iCloud",
  ],
  openGraph: {
    title: "Gasafotos — Suas fotos na nuvem, preço que cabe no bolso",
    description:
      "Armazenamento de fotos na nuvem com busca inteligente e memórias automáticas. Mais barato que Google Fotos e iCloud.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gasafotos — Suas fotos na nuvem, mais barato",
    description:
      "Armazenamento de fotos na nuvem com busca inteligente. Preço que cabe no bolso.",
  },
  robots: { index: true, follow: true },
};

export default function MarketingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
