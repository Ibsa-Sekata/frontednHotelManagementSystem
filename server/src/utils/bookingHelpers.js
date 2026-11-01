import { prisma } from "../app.js";

export async function generateBookingNumber() {
    const count = await prisma.booking.count();
    return `BK-${String(1001 + count).padStart(4, "0")}`;
}

export function calculateTotals(pricePerNight, checkIn, checkOut) {
    const nights = Math.max(
        1,
        Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)),
    );
    const subtotal = Number(pricePerNight) * nights;
    const tax = Math.round(subtotal * 0.15); // 15% VAT (Ethiopia)
    const totalAmount = subtotal + tax;
    return { nights, subtotal, tax, totalAmount };
}