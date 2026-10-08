import { logger } from "../../pkg/logger/logger.js";

export function globalErrorHandler(err, _req, res, _next) {
    logger.error(err.message, err);

    if (err.isOperational === true) {
        return res.status(err.statusCode).json({
            error: err.message,
            success: false,
        });
    }
    return res.status(500).json({
        error: "Something went wrong",
        success: false,
    });
}
