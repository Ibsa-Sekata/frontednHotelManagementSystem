import React, { useEffect, useState } from "react";
import AdminPageHeader from "../../components/AdminPageHeader.jsx";
import { guestsApi } from "../../api/guestsApi.js";

export default function Guests() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    guestsApi.list()
      .then(res => setGuests(res.data || []))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const initials = (n) => n.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase();

  return (
    <>
      <AdminPageHeader title="Guest directory" description="All guests stored in your database."/>
      <section className="panel">
        {error && <p style={{ color: "#c05d5d", padding: "0 18px" }}>{error}</p>}
        <div className="table-wrap">
          <table>
            <thead><tr><th>Guest</th><th>Email</th><th>Phone</th><th>Type</th><th>Joined</th></tr></thead>
            <tbody>
              {loading ? <tr><td colSpan="5" className="empty-state">Loading…</td></tr>
                : guests.length === 0 ? <tr><td colSpan="5" className="empty-state">No guests yet. They appear automatically when bookings are made.</td></tr>
                : guests.map(g => (
                  <tr key={g.id}>
                    <td><span className="guest-cell"><i>{initials(g.fullName)}</i><b>{g.fullName}</b></span></td>
                    <td>{g.email || "—"}</td>
                    <td>{g.phone || "—"}</td>
                    <td><span className="status status-confirmed">{g.guestType}</span></td>
                    <td>{new Date(g.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
