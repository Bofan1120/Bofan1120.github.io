import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { education } from "../data/site";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background of Bofan Li.",
};

export default function EducationPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Academic background"
        title="Education"
        description="A path through computer science, information systems, and research in wireless sensing and security."
      />
      <div className="education-timeline">
        {education.map((item) => (
          <article className="education-item" key={item.school}>
            <span className="education-period">{item.period}</span>
            <div>
              <h2>{item.school}</h2>
              <h3>{item.degree}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
