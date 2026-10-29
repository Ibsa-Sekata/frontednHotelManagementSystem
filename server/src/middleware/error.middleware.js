export function errorHandler(err, _req, res, _next) {
    const status = err.status || 500;
    const code = err.code || "INTERNAL_ERROR";
    const message = status === 500 ? "Something went wrong" : err.message;

    if (status === 500) console.error(err);

    res.status(status).json({
        success: false,
        error: { code, message, details: err.details || [] },
    });
}