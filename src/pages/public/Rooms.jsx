import React, { useState } from "react";
import SectionHeading from "../../components/SectionHeading.jsx";
import RoomCard from "../../components/RoomCard.jsx";
import { rooms } from "../../data.js";
export default function Rooms() {
 const [type,setType]=useState("All rooms");
 const filtered=type==="All rooms"?rooms:rooms.filter(r=>r.type===type);
 return <><section className="page-hero small-hero"><SectionHeading title="Rooms & Suites" text="Find your personal sanctuary, designed for rest, renewal and refined comfort."/></section><section className="section public-section"><div className="filter-row"><span>{filtered.length} thoughtfully designed rooms</span><div className="filter-chips">{["All rooms","Deluxe","Suite","Luxury","Family","Twin"].map(t=><button key={t} className={type===t?"chip active":"chip"} onClick={()=>setType(t)}>{t}</button>)}</div></div><div className="room-grid">{filtered.map(room=><RoomCard key={room.id} room={room}/>)}</div></section></>;
}
