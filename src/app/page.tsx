import AppHeader from "@/components/header/AppHeader";
import PortfolioSection from "@/components/portfolio/PortfolioSection";

export default function Home() {
  return (
    <>
      <AppHeader/>
      <main className="main">
        <PortfolioSection />
      </main>
    </>
  );
}
