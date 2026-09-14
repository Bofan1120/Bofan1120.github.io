import type { Award } from "../data/site";
import { ImageGallery } from "./ImageGallery";

export function AwardList({ items, compact = false }: { items: Award[]; compact?: boolean }) {
  const Heading = compact ? "h3" : "h2";

  return (
    <div className={`award-list${compact ? " award-list-compact" : ""}`}>
      {items.map((award) => (
        <details className="award-item" key={`${award.year}-${award.title}`}>
          <summary>
            <span className="award-year">{award.year}</span>
            <div className="award-summary-copy">
              <Heading>
                {award.title}
                {award.selectivity ? <span className="award-selectivity"> ({award.selectivity})</span> : null}
              </Heading>
              <p>{award.organization}</p>
            </div>
            <span className="expand-control" aria-hidden="true"><span className="expand-symbol">+</span></span>
          </summary>
          <div className="award-detail">
            <p>{award.detail}</p>
            {award.href ? <a className="award-link" href={award.href} target="_blank" rel="noreferrer">Official award announcement ↗</a> : null}
            <ImageGallery images={award.images} />
          </div>
        </details>
      ))}
    </div>
  );
}
