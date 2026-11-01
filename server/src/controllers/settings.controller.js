import { settingsService } from "../services/settings.service.js";
export const settingsController = {
  async list(_req, res) { res.json({ success: true, data: await settingsService.list() }); },
  async update(req, res) { const { key } = req.params; const { value } = req.body; res.json({ success: true, data: await settingsService.update(key, value) }); },
};
