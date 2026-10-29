import React from "react";
import SectionHeading from "../../components/SectionHeading.jsx";
import { amenities } from "../../data.js";
import Reveal from "../../components/Reveal.jsx";
const fallbackImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85";
export default function Amenities(){return <><section className="page-hero small-hero"><div className="internal-page-container"><SectionHeading title="Consider every detail taken care of" text="From restorative moments to effortless convenience, enjoy amenities designed around you."/></div></section><section className="section internal-section"><div className="amenity-grid">{amenities.map(({ title, description, image }, index)=><Reveal as="article" className="amenity-card" key={title} delay={index * 70}><img src={image} alt="" aria-hidden="true" loading="lazy" onError={(event)=>{if(event.currentTarget.src !== fallbackImage) event.currentTarget.src = fallbackImage;}}/><div className="amenity-card-content"><h3>{title}</h3><p>{description}</p></div></Reveal>)}</div></section></>}
