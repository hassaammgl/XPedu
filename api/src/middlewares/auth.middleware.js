import User from '../models/user.model';
import { TokenService } from '../utils/Jwt';
import { AppError } from '../utils/AppError';

export const protect = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            throw new AppError('Not authorized, no token', 401);
        }

        const decoded = TokenService.verifyToken(token);
        const user = await User.findById(decoded.id).select('-password');
        
        if (!user) {
            throw new AppError('User not found', 404);
        }

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};