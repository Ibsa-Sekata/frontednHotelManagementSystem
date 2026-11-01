import { prisma } from "../app.js";

export const checkinService = {
    async today() {
        const start = new Date(); start.setHours(0, 0, 0, 0);
        const end = new Date(); end.setHours(23, 59, 59, 999);
        const [arrivals, departures] = await Promise.all([
            prisma.booking.findMany({
                where: { checkIn: { gte: start, lte: end }, status: "CONFIRMED" },
                include: { guest: true, room: true },
            }),
            prisma.booking.findMany({
                where: { checkOut: { gte: start, lte: end }, status: "CHECKED_IN" },
                include: { guest: true, room: true },
            }),
        ]);
        return { arrivals, departures };
    },
};