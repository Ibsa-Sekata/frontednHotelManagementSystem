import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { ApiError } from "../utils/apiError.js";

export function authenticate(req, _res, next) {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return next(ApiError.unauthorized());

    try {
        const payload = jwt.verify(token, env.JWT_ACCESS_SECRET);
        req.user = payload;
        next();
    } catch {
        next(ApiError.unauthorized("Token expired or invalid"));
    }
}