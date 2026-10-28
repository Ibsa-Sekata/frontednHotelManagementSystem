import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";
import { useState } from "react";
export default function PublicLayout() {
  const [open, setOpen] = useState(false);
  const nav = [["Home","/"],["Rooms & Suites","/rooms"],["Dining","/dining"],["Amenities","/amenities"],["Gallery","/gallery"],["About","/about"],["Contact","/contact"]];
  return <div className="public-shell">
    <header className="public-nav">
      <Link className="brand" to="/"><span className="brand-mark"><Crown size={24}/></span><span><b>ROYAL PALACE</b><small>HOTEL & RESORT</small></span></Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? "public-links open" : "public-links"}>{nav.map(([label,path])=><NavLink key={path} to={path} onClick={()=>setOpen(false)}>{label}</NavLink>)}</nav>
      <Link className="btn btn-gold nav-book" to="/booking">Book Now</Link>
    </header>
    <main><Outlet /></main>
    <footer className="public-footer"><div className="brand"><Crown size={25}/><span><b>ROYAL PALACE</b><small>HOTEL & RESORT</small></span></div><p>Exceptional stays. Timeless hospitality.</p><span>© 2026 Royal Palace Hotel</span><Link to="/admin">Staff portal</Link></footer>
  </div>;
}
