import { AuthService } from '../services/auth.services';
import { TokenService } from '../utils/Jwt';
import { ApiResponse } from '../utils/ApiResponse';

/**
 * @desc    Register new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const registerUser = async (req, res, next) => {
    try {
        const { user, accessToken, refreshToken } = await AuthService.register(req.body);
        TokenService.setTokens(res, { accessToken, refreshToken });

        return ApiResponse.success(res, {
            statusCode: 201,
            message: 'User registered successfully',
            data: { user, accessToken }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Authenticate user & get tokens
 * @route   POST /api/auth/login
 * @access  Public
 */
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, accessToken, refreshToken } = await AuthService.login(email, password);
        
        TokenService.setTokens(res, { accessToken, refreshToken });

        return ApiResponse.success(res, {
            message: 'Logged in successfully',
            data: { user, accessToken }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Refresh access token
 * @route   POST /api/auth/refresh
 * @access  Public
 */
export const refreshToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        const { user, accessToken, refreshToken: newRefreshToken } = await AuthService.refreshToken(refreshToken);
        
        TokenService.setTokens(res, { 
            accessToken, 
            refreshToken: newRefreshToken 
        });

        return ApiResponse.success(res, {
            message: 'Token refreshed successfully',
            data: { user, accessToken }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Logout user / clear cookies
 * @route   POST /api/auth/logout
 * @access  Private
 */
export const logoutUser = async (req, res, next) => {
    try {
        await AuthService.logout(req.user._id);
        TokenService.clearTokens(res);
        
        return ApiResponse.success(res, {
            message: 'Logged out successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get user profile
 * @route   GET /api/auth/profile
 * @access  Private
 */
export const getUserProfile = async (req, res, next) => {
    try {
        const user = await AuthService.getProfile(req.user._id);
        return ApiResponse.success(res, {
            data: { user }
        });
    } catch (error) {
        next(error);
    }
};