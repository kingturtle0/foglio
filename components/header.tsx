import Link from "next/link";
import { siteProfile } from "@/content/site";
import { ExternalLink } from "./links";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="site-header">
      <Link className="site-name" href="/" aria-label={`${siteProfile.name} 홈`}>
        {siteProfile.name}
      </Link>
      <nav className="site-nav" aria-label="주요 탐색">
        <Link href="/#work">프로젝트</Link>
        {siteProfile.resumeUrl && <ExternalLink href={siteProfile.resumeUrl}>이력서</ExternalLink>}
        {siteProfile.githubUrl && <ExternalLink href={siteProfile.githubUrl}>GitHub</ExternalLink>}
        <ThemeToggle />
      </nav>
    </header>
  );
}
