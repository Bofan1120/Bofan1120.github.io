import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PublicationExplorer } from "../components/PublicationExplorer";
import { profile, publications } from "../data/site";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications and preprints by Bofan Li and collaborators.",
};

export default function PublicationsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow={`${publications.length} publications & preprints`}
        title="Publications"
        description="Research in wireless sensing and authentication, motion understanding, and generative models."
      />
      <div className="page-actions">
        <a href={profile.scholar} target="_blank" rel="noreferrer">
          View Google Scholar ↗
        </a>
      </div>
      <PublicationExplorer items={publications} />
    </main>
  );
}
