import React from "react";
import {
  ArrowRight,
  ConciergeBell,
  Mail,
  MapPin,
  Phone,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import RoomCard from "./RoomCard.jsx";
import AboutSection from "./AboutSection.jsx";
import { rooms } from "../data.js";

const galleryImages = [
  ["Grand arrival", "photo-1519167758481-83f550bb49b3"],
  ["A restful room", "photo-1611892440504-42a792e24d32"],
  ["Dining moments", "photo-1414235077428-338989a2e8c0"],
  ["Golden evenings", "photo-1517248135467-4c7edcad34c4"],
  ["Designed to unwind", "photo-1566665797739-1674de7a421a"],
];

const amenities = [
  [Waves, "Wellness & pool", "Restorative treatments and refreshing swims."],
  [Utensils, "Signature dining", "Seasonal ingredients and memorable meals."],
  [Wifi, "High-speed Wi-Fi", "Stay connected throughout your visit."],
  [ConciergeBell, "24-hour concierge", "Thoughtful assistance whenever you need it."],
];

export default function HomePreviews() {
  return (
    <>
      <AboutSection id="about-preview" compact />
      <section id="rooms-preview" className="section public-section home-preview-section">
        <div className="preview-heading">
          <div>
            <span className="eyebrow">ROOMS & SUITES</span>
            <h2>Stay somewhere <em>extraordinary.</em></h2>
          </div>
          <p>Thoughtfully designed spaces where refined comfort meets warm Ethiopian hospitality.</p>
        </div>
        <div className="room-grid">{rooms.slice(0, 3).map((room) => <RoomCard key={room.id} room={room} />)}</div>
        <div className="center-action"><Link className="btn btn-dark" to="/rooms">View All Rooms <ArrowRight size={16} /></Link></div>
      </section>

      <section id="dining-preview" className="home-preview-band">
        <div className="home-preview-band-image">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85" alt="Elegant Royal Palace restaurant dining room" loading="lazy" />
        </div>
        <div className="home-preview-band-copy">
          <span className="eyebrow">DINING AT ROYAL PALACE</span>
          <h2>Gather around <em>something exceptional.</em></h2>
          <p>From contemporary Ethiopian flavours to signature drinks, every table is set for memorable moments.</p>
          <Link className="btn btn-gold" to="/dining">Explore Dining <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section id="amenities-preview" className="section public-section home-preview-section">
        <div className="preview-heading">
          <div><span className="eyebrow">AMENITIES</span><h2>Every detail, <em>considered.</em></h2></div>
          <p>Everything you need for restorative days, productive stays, and effortless comfort.</p>
        </div>
        <div className="home-amenity-grid">
          {amenities.map(([Icon, title, description]) => (
            <article className="home-amenity-card" key={title}>
              <span className="home-amenity-icon"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="center-action"><Link className="text-link" to="/amenities">Explore all amenities <ArrowRight size={16} /></Link></div>
      </section>

      <section id="gallery-preview" className="section public-section home-preview-section gallery-preview">
        <div className="preview-heading">
          <div><span className="eyebrow">GALLERY</span><h2>A glimpse of the <em>experience.</em></h2></div>
          <Link className="text-link" to="/gallery">View full gallery <ArrowRight size={16} /></Link>
        </div>
        <div className="home-gallery-grid">
          {galleryImages.map(([title, image]) => (
            <Link className="home-gallery-item" to="/gallery" key={title}>
              <img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1000&q=85`} alt={title} loading="lazy" />
              <span>{title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="offers-preview" className="home-offers-section">
        <div className="home-offers-inner">
          <div>
            <span className="eyebrow">SPECIAL OFFERS</span>
            <h2>Make your stay <em>even more memorable.</em></h2>
            <p>Enjoy considered extras and exclusive value when you plan your next Royal Palace escape.</p>
          </div>
          <div className="home-offer-list">
            <article><span>01</span><div><h3>Stay longer, enjoy more</h3><p>Receive a complimentary night on selected extended stays.</p></div></article>
            <article><span>02</span><div><h3>Royal dining escape</h3><p>Pair your stay with a signature dinner for two.</p></div></article>
          </div>
          <Link className="btn btn-gold" to="/booking">Plan Your Stay <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section id="contact-preview" className="section public-section home-contact-preview">
        <div className="home-contact-card">
          <div>
            <span className="eyebrow">CONTACT ROYAL PALACE</span>
            <h2>We would love to <em>hear from you.</em></h2>
            <p>Questions, special requests, or planning a visit? Our guest services team is here to help.</p>
            <Link className="btn btn-dark" to="/contact">Contact Us <ArrowRight size={16} /></Link>
          </div>
          <div className="home-contact-details">
            <span><MapPin size={17} /> Royal Palace Hotel, Addis Ababa</span>
            <span><Phone size={17} /> +251 900 123 456</span>
            <span><Mail size={17} /> hello@royalpalace.example</span>
          </div>
        </div>
      </section>
    </>
  );
}
