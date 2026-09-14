import Link from "next/link";
import { Icon } from "./Icon";

export function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel = "View all",
}: {
  eyebrow?: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      {href ? (
        <Link className="text-link" href={href} aria-label={`${linkLabel} ${title.toLowerCase()}`}>
          {linkLabel} <Icon name="arrow" size={14} />
        </Link>
      ) : null}
    </div>
  );
}
