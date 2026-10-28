import React from "react";
import { Link } from "react-router-dom";
import { Users, BedDouble, ArrowUpRight } from "lucide-react";
export default function RoomCard({room}) {
 return <article className="room-card"><Link to={`/rooms/${room.id}`} className="room-image"><img src={`https://images.unsplash.com/${room.image}?auto=format&fit=crop&w=900&q=85`} alt={room.name}/><span className="image-tag">{room.type}</span></Link><div className="room-card-body"><div className="room-title-line"><h3>{room.name}</h3><span className="rating">★ 4.9</span></div><div className="room-meta"><span><Users size={14}/> {room.guests} Guests</span><span><BedDouble size={14}/> {room.beds}</span></div><div className="room-price"><span>From <b>ETB {room.price.toLocaleString()}</b> <small>/ night</small></span><Link to={`/rooms/${room.id}`} aria-label={`View ${room.name}`}><ArrowUpRight size={18}/></Link></div></div></article>;
}
