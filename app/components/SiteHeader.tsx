"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { navItems } from "../data/site";

function NavLinks({ mobile = false, closeMenu }: { mobile?: boolean; closeMenu?: () => void }) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  return (
    <div className={mobile ? "mobile-nav-links" : "desktop-nav-links"}>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenu}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function dismiss(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" href="/" aria-label="Bofan Li home">
          Bofan Li
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLinks />
        </nav>
        <div className="mobile-menu" ref={menuRef}>
          <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            Menu <Icon name={menuOpen ? "close" : "menu"} size={16} />
          </button>
          <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
            <NavLinks mobile closeMenu={() => setMenuOpen(false)} />
          </nav>
        </div>
      </div>
    </header>
  );
}
