import { AppError } from '../utils/AppError';

export const isAdmin = async (req, res, next) => {
    try {
        if (!req.user || req.user.role !== 'admin') {
            throw new AppError('Not authorized as admin', 403);
        }
        next();
    } catch (error) {
        next(error);
    }
};