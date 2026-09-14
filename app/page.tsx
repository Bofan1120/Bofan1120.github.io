import Image from "next/image";
import { Icon } from "./components/Icon";
import { LinkedText } from "./components/LinkedText";
import { ServiceList } from "./components/ServiceList";
import { AwardList } from "./components/AwardList";
import { NewsList } from "./components/NewsList";
import { PublicationList } from "./components/PublicationList";
import { SectionHeading } from "./components/SectionHeading";
import {
  awards,
  education,
  homeNews,
  profile,
  publications,
  teaching,
} from "./data/site";

export default function Home() {
  return (
    <main className="home-shell">
      <section className="profile-card" aria-label="About Bofan Li">
        <div className="profile-copy">
          <div className="profile-heading">
            <span className="eyebrow">Wireless sensing &amp; security</span>
            <h1>{profile.name}</h1>
            <p className="profile-role">
              {profile.role}<span className="role-separator"> · </span>
              <a href={profile.affiliationUrl} target="_blank" rel="noreferrer">{profile.affiliation}</a>
            </p>
          </div>
          <div className="bio-copy">
            {profile.bio.map((paragraph, index) => (
              <p key={paragraph}>
                <LinkedText text={paragraph} />
                {index === profile.bio.length - 1 ? (
                  <>
                    {" "}My broader interests include{" "}
                    {profile.interests.map((interest) => interest.toLowerCase().replace("ai/llm", "AI/LLM")).join(", ")}.
                  </>
                ) : null}
              </p>
            ))}
          </div>
          <div className="profile-links">
            <a href={`mailto:${profile.email}`}><Icon name="mail" />{profile.email}</a>
            <a href={profile.scholar} target="_blank" rel="noreferrer">
              <Icon name="scholar" />Google Scholar
            </a>
          </div>
        </div>
        <div className="profile-portrait">
          <div className="profile-photo">
            <Image
              src={profile.photo}
              alt="Portrait of Bofan Li"
              width={162}
              height={208}
              sizes="(max-width: 600px) 98px, (max-width: 800px) 136px, 162px"
              priority
            />
          </div>
          <p className="profile-caption">{profile.affiliation}</p>
        </div>
      </section>

      <section className="academic-card home-section" id="news">
        <SectionHeading title="News" href="/news" linkLabel="View all" />
        <p className="section-note">Recent updates · Select an update for details and photos.</p>
        <NewsList items={homeNews} compact />
      </section>

      <section className="academic-card home-section" id="publications">
        <SectionHeading
          title="Selected Publications"
          href="/publications"
          linkLabel="View all"
        />
        <PublicationList items={publications.filter((publication) => publication.authors.split(",")[0].trim() === profile.name)} />
      </section>

      <section className="academic-card home-section" id="teaching">
        <SectionHeading title="Teaching" href="/teaching" linkLabel="View all" />
        <div className="simple-list">
          {teaching.filter((item) => item.featured).slice(0, 3).map((item) => (
            <article key={`${item.term}-${item.code}`}>
              <span>{item.term}</span>
              <div>
                <h3>
                  {item.code}: {item.course}
                </h3>
                <p>{item.role} · Florida State University</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academic-card home-section" id="service">
        <SectionHeading title="Service" href="/service" linkLabel="View page" />
        <ServiceList homeOnly />
      </section>

      <section className="academic-card home-section" id="awards">
        <SectionHeading title="Awards" href="/awards" linkLabel="View all" />
        <AwardList items={awards.filter((award) => award.showOnHome !== false)} compact />
      </section>

      <section className="academic-card home-section" id="education">
        <SectionHeading title="Education" href="/education" linkLabel="View all" />
        <div className="simple-list education-list">
          {education.map((item) => (
            <article key={item.school}>
              <span>{item.period}</span>
              <div>
                <h3>{item.school}</h3>
                <p>
                  {item.degree} · {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
