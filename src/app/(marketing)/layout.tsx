import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
