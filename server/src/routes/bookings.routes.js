import { Router } from "express";
import { bookingsController } from "../controllers/bookings.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";

const router = Router();

// Public: create booking (guests don't need to log in to book)
router.post("/", asyncHandler(bookingsController.create));

// Admin only
router.use(authenticate, requireRole("ADMIN", "MANAGER", "RECEPTIONIST"));
router.get("/", asyncHandler(bookingsController.list));
router.get("/:id", asyncHandler(bookingsController.getById));
router.post("/:id/confirm", asyncHandler(bookingsController.confirm));
router.post("/:id/cancel", asyncHandler(bookingsController.cancel));
router.post("/:id/check-in", asyncHandler(bookingsController.checkIn));
router.post("/:id/check-out", asyncHandler(bookingsController.checkOut));
router.delete("/:id", requireRole("ADMIN"), asyncHandler(bookingsController.remove));

export default router;