import type { Metadata } from "next";
import { PlaceholderPage } from "../components/PlaceholderPage";
import { personal } from "../data/site";

export const metadata: Metadata = {
  title: "Personal",
  description: "Personal notes and interests from Bofan Li.",
};

export default function PersonalPage() {
  return (
    <PlaceholderPage
      eyebrow="Beyond the lab"
      title="Personal"
      description="Notes, interests, and moments outside research."
      note="A few things from life beyond the lab, coming soon."
      entries={personal}
    />
  );
}
