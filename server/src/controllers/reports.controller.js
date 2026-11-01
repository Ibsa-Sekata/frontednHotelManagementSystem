import { reportsService } from "../services/reports.service.js";
export const reportsController = {
  async dashboard(_req, res) { res.json({ success: true, data: await reportsService.dashboard() }); },
};
