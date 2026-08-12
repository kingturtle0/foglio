import type { CodeData } from "@/content/types";

export function CodeBlock({ data }: { data: CodeData }) {
  return <figure className="code-block">{data.caption ? <figcaption>{data.caption}</figcaption> : null}<pre><code>{data.code}</code></pre></figure>;
}
