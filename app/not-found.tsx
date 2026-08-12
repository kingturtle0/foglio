import Link from "next/link";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <div className="site-shell">
      <Header />
      <main className="not-found">
        <p className="section-label">404</p>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p>요청한 프로젝트가 없거나 주소가 변경되었습니다.</p>
        <Link className="text-link" href="/">
          홈으로 돌아가기 <span aria-hidden="true">→</span>
        </Link>
      </main>
    </div>
  );
}
