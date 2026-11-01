import { checkinService } from "../services/checkin.service.js";

export const checkinController = {
    async today(_req, res) {
        res.json({ success: true, data: await checkinService.today() });
    },
};