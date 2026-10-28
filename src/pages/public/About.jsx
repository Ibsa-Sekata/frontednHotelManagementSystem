// import React from "react";
// import SectionHeading from "../../components/SectionHeading.jsx";
// export default function About() {
//   return (
//     <>
//       <section className="page-hero small-hero">
//         <SectionHeading
//           title="A tradition of thoughtful luxury"
//           text="Rooted in warm hospitality, inspired by timeless design."
//         />
//       </section>
//       <section className="section split-section">
//         <img
//           src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
//           alt="Luxury hotel exterior"
//         />
//         <div>
//           <span className="eyebrow">OUR STORY</span>
//           <h2>
//             Hospitality that feels like <em>coming home.</em>
//           </h2>
//           <p>
//             Royal Palace was imagined as a place where graceful design and
//             genuine care meet. From the welcome at the door to the smallest room
//             detail, our team is here to make each stay feel personal.
//           </p>
//           <p>
//             We celebrate local culture, thoughtful service and the quiet luxury
//             of having everything considered.
//           </p>
//           <div className="mini-stats">
//             <span>
//               <b>12+</b>
//               <small>Years of hospitality</small>
//             </span>
//             <span>
//               <b>48k</b>
//               <small>Happy guests</small>
//             </span>
//             <span>
//               <b>24/7</b>
//               <small>Guest care</small>
//             </span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Exceptional Hospitality",
  "Elegant Accommodation",
  "Comfort & Guest Satisfaction",
];

export default function AboutSection() {
  return (
    <section className="about-home-section" aria-labelledby="about-home-title">
      <div className="about-home-image">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85"
          alt="Grand Royal Palace Hotel lobby with elegant furniture and warm lighting"
          loading="lazy"
        />
      </div>
      <div className="about-home-content">
        <span className="eyebrow">ABOUT ROYAL PALACE</span>
        <h2 id="about-home-title">
          Where Luxury Meets <em>Exceptional Hospitality</em>
        </h2>
        <p>
          Welcome to Royal Palace Hotel, where elegance, comfort, and
          exceptional hospitality come together. Our hotel is designed to offer
          a relaxing and welcoming environment, combining sophisticated
          surroundings with thoughtful service to make every guest&apos;s stay
          special.
        </p>
        <p>
          From our beautifully designed interiors to our comfortable
          accommodation and dining experiences, we aim to create memorable
          moments for every visitor. Whether you are travelling for business,
          enjoying a holiday, or celebrating a special occasion, our team is
          committed to making your experience comfortable and enjoyable.
        </p>
        <div className="about-home-values">
          <div>
            <span className="about-home-value-label">OUR MISSION</span>
            <p>To make every stay feel personal through thoughtful service.</p>
          </div>
          <div>
            <span className="about-home-value-label">OUR VISION</span>
            <p>To set the standard for timeless luxury and warm hospitality.</p>
          </div>
        </div>
        <ul
          className="about-home-highlights"
          aria-label="Royal Palace benefits"
        >
          {highlights.map((highlight) => (
            <li key={highlight}>
              <span className="about-home-check">
                <Check size={13} strokeWidth={2.5} />
              </span>
              {highlight}
            </li>
          ))}
        </ul>
        <div className="about-home-actions">
          <Link className="btn btn-gold" to="/rooms">
            Explore Our Rooms <ArrowRight size={16} />
          </Link>
          <Link className="btn btn-light" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
