import Image from "next/image";
import Link from "next/link";
import type { ExtraEntry } from "../data/site";
import { PageIntro } from "./PageIntro";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  note,
  entries = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  entries?: ExtraEntry[];
}) {
  return (
    <main className="page-shell">
      <PageIntro eyebrow={eyebrow} title={title} description={description} />
      {entries.length ? (
        <div className="extra-list">
          {entries.map((entry) => (
            <article className="extra-item" key={entry.title}>
              {entry.date ? <span className="eyebrow">{entry.date}</span> : null}
              <h2>{entry.title}</h2>
              <p>{entry.description}</p>
              {entry.image ? <Image src={entry.image.src} alt={entry.image.alt} width={1000} height={650} /> : null}
              {entry.links?.length ? (
                <div className="publication-links">
                  {entry.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <section className="placeholder-card">
          <span className="placeholder-index">COMING SOON</span>
          <h2>More to share soon.</h2>
          <p>{note}</p>
          <Link href="/" className="text-link">Back to home <span aria-hidden="true">→</span></Link>
        </section>
      )}
    </main>
  );
}
