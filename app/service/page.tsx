import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { ServiceList } from "../components/ServiceList";

export const metadata: Metadata = {
  title: "Service",
  description: "Professional and academic service by Bofan Li.",
};

export default function ServicePage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Academic community"
        title="Service"
        description="Professional service, reviewing, and academic community contributions."
      />
      <ServiceList headingLevel={2} showReviewingAssistance />
    </main>
  );
}
