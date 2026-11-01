import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading.jsx";
import { roomsApi } from "../../api/roomsApi.js";
import { bookingsApi } from "../../api/bookingsApi.js";

export default function Booking() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    checkIn: "", checkOut: "", roomId: "", guests: "2",
    fullName: "", email: "", phone: "", specialRequests: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    roomsApi.list({ limit: 50 }).then(r => setRooms(r.data || [])).catch(e => setError(e.message));
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess(null); setLoading(true);
    try {
      const res = await bookingsApi.create({
        ...form,
        roomId: Number(form.roomId),
        guests: Number(form.guests),
      });
      setSuccess(res.data);
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  if (success) {
    return (
      <>
        <section className="page-hero small-hero">
          <div className="internal-page-container">
            <SectionHeading title="Booking confirmed!" text="Your reservation has been saved."/>
          </div>
        </section>
        <section className="section internal-section" style={{ maxWidth: 600, margin: "0 auto" }}>
          <div className="form-card">
            <h2>✅ {success.bookingNumber}</h2>
            <p>Thank you, {success.guest?.fullName}. Here are your details:</p>
            <ul style={{ lineHeight: 2 }}>
              <li><b>Room:</b> {success.room?.name}</li>
              <li><b>Check-in:</b> {new Date(success.checkIn).toLocaleDateString()}</li>
              <li><b>Check-out:</b> {new Date(success.checkOut).toLocaleDateString()}</li>
              <li><b>Guests:</b> {success.guests}</li>
              <li><b>Subtotal:</b> ETB {Number(success.subtotal).toLocaleString()}</li>
              <li><b>VAT (15%):</b> ETB {Number(success.tax).toLocaleString()}</li>
              <li><b>Total:</b> ETB {Number(success.totalAmount).toLocaleString()}</li>
            </ul>
            <Link to="/rooms" className="btn btn-gold">Browse more rooms</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-hero small-hero">
        <div className="internal-page-container">
          <SectionHeading title="Make your stay yours" text="Share your dates and preferences to begin your Royal Palace experience."/>
        </div>
      </section>
      <section className="section internal-section booking-page">
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Reservation details</h2>
          {error && <p style={{ color: "#c05d5d" }}>{error}</p>}
          <div className="form-two">
            <label>Check-in<input type="date" required value={form.checkIn} onChange={update("checkIn")}/></label>
            <label>Check-out<input type="date" required value={form.checkOut} onChange={update("checkOut")}/></label>
            <label>Room
              <select required value={form.roomId} onChange={update("roomId")}>
                <option value="">Choose a room…</option>
                {rooms.map(r => (
                  <option key={r.id} value={r.id}>{r.name} — ETB {Number(r.pricePerNight).toLocaleString()}/night</option>
                ))}
              </select>
            </label>
            <label>Guests
              <select value={form.guests} onChange={update("guests")}>
                <option value="1">1 adult</option><option value="2">2 adults</option>
                <option value="3">3 adults</option><option value="4">4 adults</option><option value="5">5 adults</option>
              </select>
            </label>
            <label>Full name<input required value={form.fullName} onChange={update("fullName")} placeholder="Your full name"/></label>
            <label>Email<input type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com"/></label>
            <label>Phone<input value={form.phone} onChange={update("phone")} placeholder="+251..."/></label>
          </div>
          <label>Special requests
            <textarea rows="3" value={form.specialRequests} onChange={update("specialRequests")} placeholder="Anything we should know?"/>
          </label>
          <button className="btn btn-gold full-width" disabled={loading}>
            {loading ? "Submitting…" : "Request reservation"}
          </button>
        </form>
        <aside className="booking-side">
          <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85" alt="Luxury room"/>
          <h3>A stay worth looking forward to.</h3>
          <p>Need help choosing? Contact our guest services team.</p>
          <Link to="/contact" className="text-link">Contact guest services →</Link>
        </aside>
      </section>
    </>
  );
}
