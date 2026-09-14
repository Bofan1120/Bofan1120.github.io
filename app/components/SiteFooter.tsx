import Link from "next/link";
import { profile } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-name">Bofan Li</p>
        <p>Wireless sensing · Security · Intelligent mobile systems</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.scholar} target="_blank" rel="noreferrer">
          Google Scholar
        </a>
        <Link href="/personal">Personal</Link>
        <a href="#main-content">Back to top ↑</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Bofan Li</p>
    </footer>
  );
}
