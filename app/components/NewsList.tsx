import Image from "next/image";
import type { NewsItem } from "../data/site";

export function NewsList({
  items,
  compact = false,
}: {
  items: NewsItem[];
  compact?: boolean;
}) {
  return (
    <div className="news-list">
      {items.map((item, index) => (
        <details
          className="news-item"
          key={`${item.date}-${item.title}`}
          open={!compact && index === 0}
        >
          <summary>
            <span className="news-date">{item.date}</span>
            <span className="news-summary-copy">
              <span className={`category category-${item.category.toLowerCase()}`}>
                {item.category}
              </span>
              <span className="news-title">{item.title}</span>
            </span>
            <span className="expand-control" aria-hidden="true">
              <span className="expand-symbol">+</span>
            </span>
          </summary>
          <div className="news-detail">
            <p>{item.detail}</p>
            {item.link ? (
              <a href={item.link.href} target="_blank" rel="noreferrer">
                {item.link.label} ↗
              </a>
            ) : null}
            <div className={`news-gallery gallery-${item.images.length}`}>
              {item.images.map((image) => (
                <a
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  key={image.src}
                  aria-label={`Open full-size image: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 700px) calc(100vw - 30px), 620px"
                  />
                </a>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
