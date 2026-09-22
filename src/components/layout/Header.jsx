import { useState } from "react";
import { navLinks, church } from "../../lib/content";
import logoMark from "../../assets/images/logo-mark.png";
import SocialLinks from "../ui/SocialLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="brand">
          <img src={logoMark} alt="" className="brand-mark" />
          {church.shortName}
        </a>

        <ul className="navlinks navlinks-desktop">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <SocialLinks className="social-links-desktop" />
          <a href="#visit" className="nav-cta">
            <span className="long">Plan Your</span> Visit
          </a>
          <button
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 5h14M2 9h14M2 13h14" stroke="#171A24" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="wrap" id="mobile-menu" hidden={!menuOpen}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <SocialLinks className="mobile-socials" />
      </div>
    </header>
  );
}
