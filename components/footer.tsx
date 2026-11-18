import { siteProfile } from "@/content/site";
import { ExternalLink } from "./links";

export function Footer() {
  return (
    <footer className="site-footer">
      <div><p className="site-footer__name">{siteProfile.name}</p><nav className="site-footer__links" aria-label="연락처">
        {siteProfile.emailUrl && <ExternalLink href={siteProfile.emailUrl}>이메일</ExternalLink>}
        {siteProfile.githubUrl && <ExternalLink href={siteProfile.githubUrl}>GitHub</ExternalLink>}
        {siteProfile.linkedinUrl && <ExternalLink href={siteProfile.linkedinUrl}>LinkedIn</ExternalLink>}
        {siteProfile.resumeUrl && <ExternalLink href={siteProfile.resumeUrl}>이력서</ExternalLink>}
      </nav></div>
      <p className="site-footer__copyright">© 2026</p>
    </footer>
  );
}
