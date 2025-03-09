import AppHeader from "@/components/header/AppHeader";
import AboutSection from "@/components/section/about/AboutSection";
import PortfolioSection from "@/components/section/portfolio/PortfolioSection";
import SkillsSection from "@/components/section/skills/SkillsSection";

export default function Home() {

  return (
    <>
      <AppHeader />
      <main className="main">
        <PortfolioSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  );
}

