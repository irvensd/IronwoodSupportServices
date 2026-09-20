"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header no-print">
      <div className="utility">
        <div className="container flex items-center justify-between gap-4">
          <span>Facilities. Grounds. IT support.</span>
          <span className="utility-end">U.S. small business</span>
        </div>
      </div>
      <div className="container nav-wrap">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {[
            ["/", "Home"],
            ["/capabilities", "Capabilities"],
            ["/about", "About"],
            ["/contact", "Contact"],
          ].map(([href, title]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button button-green nav-cta"
            onClick={() => setOpen(false)}
          >
            Request a quote <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
