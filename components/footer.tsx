import { siteProfile } from "@/content/site";
import { ExternalLink } from "./links";

export function Footer() {
  return (
    <footer className="site-footer">
      <div><p className="site-footer__name">{siteProfile.name}</p><nav className="site-footer__links" aria-label="연락처">
        <ExternalLink href={siteProfile.emailUrl}>Email</ExternalLink><ExternalLink href={siteProfile.githubUrl}>GitHub</ExternalLink><ExternalLink href={siteProfile.linkedinUrl}>LinkedIn</ExternalLink><ExternalLink href={siteProfile.resumeUrl}>Resume</ExternalLink>
      </nav></div>
      <p className="site-footer__copyright">© 2026</p>
    </footer>
  );
}
