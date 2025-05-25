import rateLimit from 'express-rate-limit';
import { AppError } from '../utils/AppError';

export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login/register requests per windowMs
    message: 'Too many attempts, please try again after 15 minutes',
    handler: (req, res) => {
        throw new AppError('Too many attempts, please try again after 15 minutes', 429);
    }
});

export const refreshTokenLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // Limit each IP to 100 refresh token requests per hour
    message: 'Too many token refresh attempts',
    handler: (req, res) => {
        throw new AppError('Too many token refresh attempts, please try again later', 429);
    }
});
