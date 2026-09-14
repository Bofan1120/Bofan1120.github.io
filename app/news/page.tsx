import type { Metadata } from "next";
import { NewsList } from "../components/NewsList";
import { PageIntro } from "../components/PageIntro";
import { news } from "../data/site";

export const metadata: Metadata = {
  title: "News",
  description: "Research, publication, award, and career updates from Bofan Li.",
};

export default function NewsPage() {
  const years = [...new Set(news.map((item) => item.year))].sort((a, b) => b - a);
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow={`Archive · ${Math.min(...years)}–${Math.max(...years)}`}
        title="News"
        description="Research milestones, paper announcements, and awards. Open any update to see the story and related photos."
      />
      {years.map((year) => (
        <section className="archive-group" key={year} aria-labelledby={`news-${year}`}>
          <h2 className="archive-year" id={`news-${year}`}>{year}</h2>
          <NewsList items={news.filter((item) => item.year === year)} compact />
        </section>
      ))}
    </main>
  );
}
