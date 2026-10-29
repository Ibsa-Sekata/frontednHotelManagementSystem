export const validate = (schema) => (req, _res, next) => {
    const result = schema.safeParse({
        body: req.body,
        query: req.query,
        params: req.params,
    });
    if (!result.success) {
        const details = result.error.issues.map((i) => ({
            path: i.path.join("."),
            message: i.message,
        }));
        return next(
            Object.assign(new Error("Validation failed"), {
                status: 422,
                code: "VALIDATION_ERROR",
                details,
            }),
        );
    }
    req.validated = result.data;
    next();
};