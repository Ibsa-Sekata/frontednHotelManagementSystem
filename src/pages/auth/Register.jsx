// import React from "react";
// import { Link } from "react-router-dom";
// import { Crown } from "lucide-react";
// export default function Register(){return <section className="auth-page"><div className="auth-photo"><div className="brand"><Crown/><span><b>ROYAL PALACE</b><small>HOTEL & RESORT</small></span></div><div><h2>Your journey<br/><em>starts here.</em></h2><p>Create an account for a more personal stay.</p></div></div><form className="auth-form" onSubmit={e=>{e.preventDefault();alert("Demo registration only. Connect to your backend to create accounts.");}}><Crown className="auth-crown"/><h1>Create account</h1><p>Join us for a more personal experience.</p><label>Full name<input required placeholder="Your full name"/></label><label>Email address<input type="email" required placeholder="you@example.com"/></label><label>Password<input type="password" required minLength="8" placeholder="At least 8 characters"/></label><button className="btn btn-gold full-width">Create account</button><p className="form-note">Already have an account? <Link to="/login">Sign in</Link></p></form></section>}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Crown } from "lucide-react";
import { authApi } from "../../api/authApi.js";

export default function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await authApi.register(fullName, email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-photo">
        <div className="brand">
          <Crown />
          <span>
            <b>ROYAL PALACE</b>
            <small>HOTEL & RESORT</small>
          </span>
        </div>
        <div>
          <h2>
            Your journey
            <br />
            <em>starts here.</em>
          </h2>
          <p>Create an account for a more personal stay.</p>
        </div>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Crown className="auth-crown" />
        <h1>Create account</h1>
        <p>Join us for a more personal experience.</p>
        <label>
          Full name
          <input
            required
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            required
            minLength="8"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <small style={{ color: "#c05d5d" }}>{error}</small>}
        <button className="btn btn-gold full-width" disabled={loading}>
          {loading ? "Creating…" : "Create account"}
        </button>
        <p className="form-note">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </section>
  );
}
