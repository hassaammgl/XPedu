import User from '../models/user.model';
import { TokenService } from '../utils/Jwt';
import { AppError } from '../utils/AppError';

export const protect = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            throw new AppError('Access token is required', 401);
        }

        // Verify access token
        const decoded = TokenService.verifyAccessToken(accessToken);
        
        // Get user
        const user = await User.findById(decoded.id).select('-password -refreshToken');
        if (!user) {
            throw new AppError('User not found', 404);
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.message.includes('expired')) {
            return res.status(401).json({
                success: false,
                message: 'Access token expired',
                code: 'TOKEN_EXPIRED'
            });
        }
        next(error);
    }
};