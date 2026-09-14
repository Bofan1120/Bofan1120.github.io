import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { PublicationExplorer } from "../components/PublicationExplorer";
import { profile, publications } from "../data/site";

export const metadata: Metadata = {
  title: "Publications",
  description: "Selected publications by Bofan Li.",
};

export default function PublicationsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow={`${publications.length} selected publications`}
        title="Publications"
        description="Research spanning identity-aware WiFi sensing, multi-user vital-sign monitoring, and wireless authentication."
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
