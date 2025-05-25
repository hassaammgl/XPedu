import { AuthService } from '../services/auth.services';
import { ApiResponse } from '../utils/ApiResponse';

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, accessToken, refreshToken } = await AuthService.adminLogin(email, password);
        
        TokenService.setTokens(res, { accessToken, refreshToken });

        return ApiResponse.success(res, {
            message: 'Admin logged in successfully',
            data: { user, accessToken }
        });
    } catch (error) {
        next(error);
    }
};

export const getDashboardStats = async (req, res, next) => {
    try {
        // Implement dashboard statistics logic
        return ApiResponse.success(res, {
            data: {
                // Your dashboard stats
            }
        });
    } catch (error) {
        next(error);
    }
};