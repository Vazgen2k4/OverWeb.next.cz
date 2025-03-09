import AppHeader from "@/components/header/AppHeader";
import PortfolioSection from "@/components/section/portfolio/PortfolioSection";

const metadata = {
  title: "Portfolio by Vazgen",
  description: "This is a website showcasing my portfolio",
  keywords: ["portfolio", "web development", "software development"]
}

interface ProjectProps {
  params: { project_id: string }
}

export default async function ProjectPage({ params }: ProjectProps) {
  const { project_id } = await params;

  return (
    <>
      <AppHeader />
      <main className="main">
        {project_id}
      </main>
    </>
  );
}

