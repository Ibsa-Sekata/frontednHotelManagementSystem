import React, { useEffect, useState } from "react";
import { Search, RotateCw } from "lucide-react";
import AdminPageHeader from "../../components/AdminPageHeader.jsx";
import { roomsApi } from "../../api/roomsApi.js";

export default function RoomManagement() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const load = async () => {
    setLoading(true); setError("");
    try {
      const res = await roomsApi.list({ search: query, limit: 50 });
      setRooms(res.data || []);
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleSearch = (e) => { e.preventDefault(); load(); };

  return (
    <>
      <AdminPageHeader
        title="Room management"
        description="Live room inventory from your database."
        action={<button className="btn btn-light" onClick={load}><RotateCw size={15}/> Refresh</button>}
      />
      <section className="panel">
        <div className="toolbar">
          <form className="table-search" onSubmit={handleSearch}>
            <Search size={16}/>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search rooms..."/>
          </form>
          <span className="muted">{rooms.length} room(s)</span>
        </div>
        {error && <p style={{ color: "#c05d5d", padding: "0 18px" }}>{error}</p>}
        {loading ? <p className="empty-state">Loading…</p> : (
          <div className="room-admin-grid">
            {rooms.map(r => (
              <article className="room-admin-card" key={r.id}>
                <img src={`https://images.unsplash.com/${r.image}?auto=format&fit=crop&w=700&q=80`} alt={r.name}/>
                <div>
                  <div className="room-admin-title">
                    <h3>{r.name}</h3>
                    <span className={`status status-${r.status.toLowerCase()}`}>{r.status}</span>
                  </div>
                  <p>{r.maxGuests} guests · {r.beds} · {r.size}</p>
                  <b>ETB {Number(r.pricePerNight).toLocaleString()} <small>/ night</small></b>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
