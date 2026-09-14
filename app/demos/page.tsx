import type { Metadata } from "next";
import { PlaceholderPage } from "../components/PlaceholderPage";
import { demos } from "../data/site";

export const metadata: Metadata = {
  title: "Demos",
  description: "Research demos by Bofan Li.",
};

export default function DemosPage() {
  return (
    <PlaceholderPage
      eyebrow="Interactive research"
      title="Demos"
      description="Research in action: system demonstrations, videos, and open research artifacts."
      note="Demonstrations of my research systems will appear here."
      entries={demos}
    />
  );
}
