import { siteProfile } from "@/content/site";
import { ExternalLink } from "./links";

export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <p className="intro__name">{siteProfile.name}</p>
      <h1 id="intro-title">{siteProfile.positioning}</h1>
      <p className="intro__description">{siteProfile.description}</p>
      <p className="intro__areas" aria-label="주요 전문 영역">{siteProfile.coreAreas.join(" · ")}</p>
      <div className="intro__links">
        <ExternalLink className="text-link" href={siteProfile.resumeUrl}>Resume</ExternalLink>
        <ExternalLink className="text-link" href={siteProfile.emailUrl}>Email</ExternalLink>
      </div>
    </section>
  );
}
