import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import HomePreviews from "../../components/HomePreviews.jsx";
export default function Home() {
 return <><section id="home-hero" className="hero"><div className="hero-image"/><div className="hero-shade"/><div className="hero-content"><span className="eyebrow">WELCOME TO ROYAL PALACE</span><h1>Experience<br/><em>Royal Luxury.</em></h1><p>Discover a world of refined comfort, thoughtful service and unforgettable moments in the heart of the city.</p><div className="hero-actions"><Link className="btn btn-gold" to="/rooms">Explore Rooms <ArrowRight size={16}/></Link><Link className="btn btn-outline-light" to="/about">Discover our story</Link></div><div className="hero-rating"><span>★★★★★</span><small>Exceptional stays, cherished memories</small></div></div><div className="hero-note"><CrownMark/><span><b>Luxury in every detail</b><small>Hospitality with a personal touch</small></span></div></section>
 <section className="booking-strip"><div className="booking-intro"><CalendarDays size={22}/><span><b>Plan your stay</b><small>Find your perfect room</small></span></div><label>CHECK IN<input type="date" defaultValue="2026-11-12"/></label><label>CHECK OUT<input type="date" defaultValue="2026-11-15"/></label><label>GUESTS<select defaultValue="2"><option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option><option value="4">4 Guests</option></select></label><Link className="btn btn-gold" to="/booking">Check Availability</Link></section>
 <HomePreviews/>
 <section className="quote-section"><span className="quote-mark">“</span><p>True luxury is feeling completely at ease, while every detail is taken care of.</p><small>THE ROYAL PALACE EXPERIENCE</small></section></>;
}
function CrownMark(){return <span className="crown-mark">♛</span>}
