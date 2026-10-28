import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./components/PublicLayout.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Home from "./pages/public/Home.jsx";
import Rooms from "./pages/public/Rooms.jsx";
import RoomDetails from "./pages/public/RoomDetails.jsx";
import Dining from "./pages/public/Dining.jsx";
import About from "./pages/public/About.jsx";
import Amenities from "./pages/public/Amenities.jsx";
import Gallery from "./pages/public/Gallery.jsx";
import Contact from "./pages/public/Contact.jsx";
import Booking from "./pages/public/Booking.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Bookings from "./pages/admin/Bookings.jsx";
import RoomManagement from "./pages/admin/RoomManagement.jsx";
import Guests from "./pages/admin/Guests.jsx";
import CheckInOut from "./pages/admin/CheckInOut.jsx";
import Housekeeping from "./pages/admin/Housekeeping.jsx";
import Payments from "./pages/admin/Payments.jsx";
import Reports from "./pages/admin/Reports.jsx";
import Settings from "./pages/admin/Settings.jsx";
import Users from "./pages/admin/Users.jsx";
import Profile from "./pages/admin/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/about" element={<About />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="rooms" element={<RoomManagement />} />
      <Route path="guests" element={<Guests />} />
      <Route path="check-in-out" element={<CheckInOut />} />
      <Route path="housekeeping" element={<Housekeeping />} />
      <Route path="payments" element={<Payments />} />
      <Route path="reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />
      <Route path="users" element={<Users />} />
      <Route path="profile" element={<Profile />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>;
}
