import { ENVS } from '../config/constants';
import { AppError } from '../utils/AppError';

export const errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'Internal Server Error';
    let stack = ENVS.NODE_ENV === 'production' ? undefined : err.stack;

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
    }
    else if (err instanceof Error) {
        message = err.message;
    }

    if (res.headersSent) {
        return next(err);
    }

    if (ENVS.NODE_ENV !== 'test') {
        console.error(`[${new Date().toISOString()}] Error:`, {
            message: err.message,
            stack: err.stack,
            path: req.path,
            method: req.method
        });
    }

    res.status(statusCode).json({
        success: false,
        error: {
            message,
            ...(stack && { stack })
        }
    });
};