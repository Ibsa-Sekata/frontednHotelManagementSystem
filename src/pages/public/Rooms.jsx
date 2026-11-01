import React, { useEffect, useState } from "react";
import SectionHeading from "../../components/SectionHeading.jsx";
import RoomCard from "../../components/RoomCard.jsx";
import { roomsApi } from "../../api/roomsApi.js";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [type, setType] = useState("All rooms");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    roomsApi.list({ limit: 50 })
      .then(r => setRooms(r.data || []))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = type === "All rooms" ? rooms : rooms.filter(r => r.type === type);

  return (
    <>
      <section className="page-hero small-hero">
        <div className="internal-page-container">
          <SectionHeading title="Rooms & Suites" text="Find your personal sanctuary, designed for rest, renewal and refined comfort."/>
        </div>
      </section>
      <section className="section internal-section">
        <div className="filter-row">
          <span>{filtered.length} thoughtfully designed rooms</span>
          <div className="filter-chips">
            {["All rooms","Deluxe","Suite","Luxury","Family","Twin"].map(t =>
              <button key={t} className={type===t?"chip active":"chip"} onClick={()=>setType(t)}>{t}</button>
            )}
          </div>
        </div>
        {error && <p style={{ color: "#c05d5d" }}>{error}</p>}
        {loading ? <p className="empty-state">Loading rooms…</p> : (
          <div className="room-grid">
            {filtered.map(r => <RoomCard key={r.id} room={r}/>)}
          </div>
        )}
      </section>
    </>
  );
}
