import { service, reviewingAssistance, type ServiceItem } from "../data/site";

function Records({ items, headingLevel }: { items: ServiceItem[]; headingLevel: 2 | 3 | 4 }) {
  const Heading = headingLevel === 2 ? "h2" : headingLevel === 3 ? "h3" : "h4";
  return (
    <div className="simple-list service-list">
      {items.map((item) => (
        <article key={`${item.period}-${item.role}-${item.organization}`}>
          <span>{item.period}</span>
          <div>
            <Heading>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">{item.organization} <span aria-hidden="true">↗</span></a>
              ) : item.organization}
            </Heading>
            <p>{item.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServiceList({
  headingLevel = 3,
  showReviewingAssistance = false,
  homeOnly = false,
}: {
  headingLevel?: 2 | 3;
  showReviewingAssistance?: boolean;
  homeOnly?: boolean;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <>
      <Records items={homeOnly ? service.filter((item) => item.showOnHome !== false) : service} headingLevel={headingLevel} />
      {showReviewingAssistance && reviewingAssistance.length ? (
        <section className="reviewing-assistance">
          <Heading className="service-subheading">Help in Reviewing</Heading>
          <Records items={reviewingAssistance} headingLevel={headingLevel === 2 ? 3 : 4} />
        </section>
      ) : null}
    </>
  );
}
