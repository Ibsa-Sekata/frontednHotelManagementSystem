import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";

const nav = [
  ["Home", "/", "home-hero"],
  ["About", "/about", "about-preview"],
  ["Rooms & Suites", "/rooms", "rooms-preview"],
  ["Dining", "/dining", "dining-preview"],
  ["Amenities", "/amenities", "amenities-preview"],
  ["Gallery", "/gallery", "gallery-preview"],
  ["Contact", "/contact", "contact-preview"],
];

export default function PublicLayout() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-hero");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return undefined;
    }

    const sections = nav.map(([, , sectionId]) => document.getElementById(sectionId)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavigation = (event, path, sectionId) => {
    setOpen(false);
    if (location.pathname === "/" && sectionId) {
      event.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (location.pathname !== path) {
      event.preventDefault();
      navigate(path);
    }
  };

  return <div className="public-shell">
    <header className="public-nav">
      <Link className="brand" to="/"><span className="brand-mark"><Crown size={24}/></span><span><b>ROYAL PALACE</b><small>HOTEL & RESORT</small></span></Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? "public-links open" : "public-links"} aria-label="Primary navigation">
        {nav.map(([label, path, sectionId]) => {
          const active = location.pathname === "/" ? activeSection === sectionId : location.pathname === path || (path !== "/" && location.pathname.startsWith(`${path}/`));
          return <Link key={path} className={active ? "active" : ""} to={path} aria-current={active ? "page" : undefined} onClick={(event) => handleNavigation(event, path, sectionId)}>{label}</Link>;
        })}
      </nav>
      <Link className="btn btn-gold nav-book" to="/booking">Book Now</Link>
    </header>
    <main><Outlet /></main>
    <footer className="public-footer"><div className="brand"><Crown size={25}/><span><b>ROYAL PALACE</b><small>HOTEL & RESORT</small></span></div><p>Exceptional stays. Timeless hospitality.</p><span>© 2026 Royal Palace Hotel</span><Link to="/admin">Staff portal</Link></footer>
  </div>;
}
