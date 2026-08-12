import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

export function ExternalLink({ href, children, className, ...props }: ExternalLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" {...props}>
      {children} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (새 탭에서 열림)</span>
    </a>
  );
}
