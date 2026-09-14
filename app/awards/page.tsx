import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { awards } from "../data/site";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards and honors received by Bofan Li.",
};

export default function AwardsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Awards & honors"
        title="Awards"
        description="Selected recognition for research quality, reproducibility, and academic contribution."
      />
      <div className="recognition-list">
        {awards.map((award) => (
          <article key={`${award.year}-${award.title}`}>
            <span className="recognition-year">{award.year}</span>
            <div>
              <h2>{award.title}</h2>
              <p>{award.organization}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
