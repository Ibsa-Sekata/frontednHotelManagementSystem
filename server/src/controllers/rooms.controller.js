import { roomsService } from "../services/rooms.service.js";

export const roomsController = {
    async list(req, res) {
        const data = await roomsService.list(req.query);
        res.json({ success: true, data: data.items, meta: data.meta });
    },
    async getById(req, res) {
        const data = await roomsService.getById(req.params.id);
        res.json({ success: true, data });
    },
    async create(req, res) {
        const data = await roomsService.create(req.body);
        res.status(201).json({ success: true, data });
    },
    async update(req, res) {
        const data = await roomsService.update(req.params.id, req.body);
        res.json({ success: true, data });
    },
    async remove(req, res) {
        await roomsService.remove(req.params.id);
        res.status(204).send();
    },
    async availability(req, res) {
        const data = await roomsService.availability(req.query);
        res.json({ success: true, data });
    },
};