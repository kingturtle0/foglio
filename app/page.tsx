import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { ProjectList } from "@/components/project-list";
import { experiences } from "@/content/experience";
import { getFeaturedProjects } from "@/content/projects";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Intro />
        <ProjectList projects={getFeaturedProjects()} />
        <Experience entries={experiences} />
      </main>
      <Footer />
    </div>
  );
}
