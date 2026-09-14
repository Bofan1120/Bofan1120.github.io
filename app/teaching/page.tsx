import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { teaching } from "../data/site";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching experience of Bofan Li.",
};

export default function TeachingPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Florida State University"
        title="Teaching"
        description="Teaching assistant experience across programming, systems, data structures, networks, and security."
      />
      <div className="course-list">
        {teaching.map((item) => (
          <article className="course-row" key={`${item.term}-${item.code}`}>
            <span className="course-term">{item.term}</span>
            <div>
              <h2>
                {item.code} · {item.course}
              </h2>
              <p>{item.role} · Florida State University</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
