
export function dateMiddleware(req, res, next) {
    req.dateReq = new Date();
    next();
}
export function