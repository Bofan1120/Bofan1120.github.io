import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { awards } from "../data/site";
import { AwardList } from "../components/AwardList";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards and honors received by Bofan Li.",
};

export default function AwardsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Awards & honors"
        title="Awards"
        description="Recognition for research quality, reproducibility, and academic contribution. Expand an award for details and available photos."
      />
      <AwardList items={awards} />
    </main>
  );
}
