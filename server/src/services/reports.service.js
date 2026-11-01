import { prisma } from "../app.js";
export const reportsService = {
  async dashboard() {
    const [rooms, bookings, payments] = await Promise.all([
      prisma.room.findMany(),
      prisma.booking.findMany({ include: { guest: true, room: true } }),
      prisma.payment.findMany(),
    ]);
    const occupied = rooms.filter(r => r.status === "BOOKED").length;
    const available = rooms.filter(r => r.status === "AVAILABLE").length;
    const maintenance = rooms.filter(r => ["MAINTENANCE","OUT_OF_SERVICE"].includes(r.status)).length;
    const revenue = bookings.filter(b => ["CONFIRMED","CHECKED_IN","CHECKED_OUT"].includes(b.status)).reduce((s,b) => s + Number(b.totalAmount), 0);
    const occupancyRate = rooms.length ? Math.round((occupied / rooms.length) * 100) : 0;
    const monthlyMap = {};
    bookings.forEach(b => { const k = new Date(b.createdAt).toLocaleString("default",{month:"short"}); monthlyMap[k] = (monthlyMap[k]||0) + Number(b.totalAmount)/1000; });
    const revenueData = Object.entries(monthlyMap).map(([month,revenue]) => ({ month, revenue: Math.round(revenue) }));
    const occupancyData = [{name:"Occupied",value:occupied},{name:"Available",value:available},{name:"Maintenance",value:maintenance}];
    const recentBookings = [...bookings].sort((a,b) => new Date(b.createdAt)-new Date(a.createdAt)).slice(0,5);
    return { totalRevenue: revenue, totalBookings: bookings.length, occupiedRooms: occupied, totalRooms: rooms.length, occupancyRate, revenueData, occupancyData, recentBookings, payments: { total: payments.length, paid: payments.filter(p => p.status === "PAID").length } };
  },
};
