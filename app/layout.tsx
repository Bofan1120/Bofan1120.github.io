import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bofan1120.github.io"),
  title: {
    default: "Bofan Li · Wireless Systems Researcher",
    template: "%s · Bofan Li",
  },
  description:
    "Bofan Li is a wireless systems researcher working on wireless sensing, mobile security, and intelligent mobile systems.",
  icons: {
    icon: "/images/profile/bofan-li.jpg",
    shortcut: "/images/profile/bofan-li.jpg",
    apple: "/images/profile/bofan-li.jpg",
  },
  openGraph: {
    title: "Bofan Li · Wireless Systems Researcher",
    description:
      "Research in wireless sensing, mobile security, and intelligent mobile systems.",
    url: "https://bofan1120.github.io/",
    siteName: "Bofan Li",
    type: "profile",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 908,
        alt: "Bofan Li — Wireless Sensing, Security, and Intelligent Mobile Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bofan Li · Wireless Systems Researcher",
    description:
      "Research in wireless sensing, mobile security, and intelligent mobile systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
