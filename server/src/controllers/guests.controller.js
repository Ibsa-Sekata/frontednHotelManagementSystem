import { guestsService } from "../services/guests.service.js";

export const guestsController = {
    async list(req, res) {
        const d = await guestsService.list(req.query);
        res.json({ success: true, data: d.items, meta: d.meta });
    },
    async getById(req, res) {
        res.json({ success: true, data: await guestsService.getById(req.params.id) });
    },
    async create(req, res) {
        res.status(201).json({ success: true, data: await guestsService.create(req.body) });
    },
    async update(req, res) {
        res.json({ success: true, data: await guestsService.update(req.params.id, req.body) });
    },
    async remove(req, res) {
        await guestsService.remove(req.params.id);
        res.status(204).send();
    },
};