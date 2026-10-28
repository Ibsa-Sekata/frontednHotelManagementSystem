import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { LayoutDashboard, CalendarDays, BedDouble, Users, ArrowLeftRight, Sparkles, CreditCard, ChartNoAxesCombined, Settings, UserRound, Crown, Search, Bell, Menu, CircleUserRound } from "lucide-react";
const nav = [
 ["Dashboard","/admin",LayoutDashboard],["Bookings","/admin/bookings",CalendarDays],["Rooms","/admin/rooms",BedDouble],
 ["Guests","/admin/guests",Users],["Check-in / Check-out","/admin/check-in-out",ArrowLeftRight],["Housekeeping","/admin/housekeeping",Sparkles],
 ["Payments","/admin/payments",CreditCard],["Reports","/admin/reports",ChartNoAxesCombined],["Users","/admin/users",UserRound],["Settings","/admin/settings",Settings]
];
export default function AdminLayout() {
 return <div className="admin-shell">
  <aside className="admin-sidebar"><Link to="/" className="admin-brand"><Crown size={27}/><span><b>ROYAL PALACE</b><small>HOTEL MANAGEMENT</small></span></Link>
   <div className="side-label">WORKSPACE</div><nav>{nav.map(([label,path,Icon])=><NavLink end={path==="/admin"} key={path} to={path} className={({isActive})=>isActive?"side-link active":"side-link"}><Icon size={17}/><span>{label}</span></NavLink>)}</nav>
   <div className="sidebar-help"><span className="help-icon">✦</span><b>Need assistance?</b><small>Contact hotel support</small><Link to="/contact">Get help →</Link></div>
   <Link className="back-site" to="/">← View hotel website</Link>
  </aside>
  <section className="admin-main"><header className="admin-topbar"><div className="admin-search"><Search size={17}/><input placeholder="Search anything..." /></div><div className="topbar-right"><button className="icon-button" aria-label="Notifications"><Bell size={18}/><i/></button><div className="admin-user"><span className="avatar"><CircleUserRound size={23}/></span><span><b>Admin User</b><small>Administrator</small></span></div></div></header><div className="admin-content"><Outlet/></div></section>
 </div>;
}
