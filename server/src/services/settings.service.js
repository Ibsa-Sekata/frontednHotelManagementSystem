import { prisma } from "../app.js";
export const settingsService = {
  async list() { return prisma.hotelSetting.findMany({ orderBy: { key: "asc" } }); },
  async update(key, value) { return prisma.hotelSetting.upsert({ where: { key }, update: { value }, create: { key, value } }); },
};
