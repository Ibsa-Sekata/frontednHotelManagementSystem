import { prisma } from "../app.js";

export async function generateInvoiceNumber() {
    const count = await prisma.payment.count();
    return `INV-${String(1001 + count).padStart(4, "0")}`;
}