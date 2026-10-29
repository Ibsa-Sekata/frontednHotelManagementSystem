export class ApiError extends Error {
    constructor(status, code, message, details = []) {
        super(message);
        this.status = status;
        this.code = code;
        this.details = details;
    }
    static badRequest(msg, details) { return new ApiError(400, "BAD_REQUEST", msg, details); }
    static unauthorized(msg = "Not authenticated") { return new ApiError(401, "UNAUTHORIZED", msg); }
    static forbidden(msg = "Insufficient permissions") { return new ApiError(403, "FORBIDDEN", msg); }
    static notFound(msg = "Resource not found") { return new ApiError(404, "NOT_FOUND", msg); }
    static conflict(msg, details) { return new ApiError(409, "CONFLICT", msg, details); }
    static validation(msg, details) { return new ApiError(422, "VALIDATION_ERROR", msg, details); }
}