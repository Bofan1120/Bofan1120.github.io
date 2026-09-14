import Image from "next/image";
import { profile, type Publication } from "../data/site";
import { Icon } from "./Icon";

export function PublicationList({ items, headingLevel = 3 }: { items: Publication[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="publication-list">
      {items.map((publication) => (
        <article className="publication-card" key={publication.title}>
          <a
            className="publication-image"
            href={publication.links?.[0]?.href || publication.image}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${publication.shortTitle}`}
          >
            <Image
              src={publication.image}
              alt={publication.imageAlt}
              width={1400}
              height={850}
              sizes="(max-width: 600px) 150px, 174px"
            />
          </a>
          <div className="publication-copy">
            <div className="publication-meta">
              <span>{publication.shortTitle} · {publication.year}</span>
              {publication.status === "Accepted" ? <span className="publication-status">Accepted</span> : null}
            </div>
            <Heading className="publication-title">
              {publication.links?.[0] ? (
                <a href={publication.links[0].href} target="_blank" rel="noreferrer">{publication.title}</a>
              ) : publication.title}
            </Heading>
            <p className="authors">
              {publication.authors.split(", ").map((author, index) => (
                <span key={`${author}-${index}`}>
                  {index > 0 ? ", " : ""}
                  {author === profile.name ? <strong>{author}</strong> : author}
                </span>
              ))}
            </p>
            <p className="venue">{publication.venue}</p>
            {publication.award ? (
              <p className="award-callout">✦ {publication.award}</p>
            ) : null}
            {publication.links?.length ? (
              <div className="publication-links">
                {publication.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                    {link.label} <Icon name="external" size={11} />
                  </a>
                ))}
              </div>
            ) : null}
            {publication.badges?.length ? (
              <div className="artifact-badges">
                {publication.badges.map((badge) => (
                  <Image
                    key={badge.src}
                    src={badge.src}
                    alt={badge.alt}
                    width={160}
                    height={160}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
