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
        const { user, token } = await AuthService.register(req.body);
        TokenService.setCookie(res, token);

        return ApiResponse.success(res, {
            statusCode: 201,
            message: 'User registered successfully',
            data: { user, token }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await AuthService.login(email, password);
        
        TokenService.setCookie(res, token);

        return ApiResponse.success(res, {
            message: 'Logged in successfully',
            data: { user, token }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Logout user / clear cookie
 * @route   POST /api/auth/logout
 * @access  Private
 */
export const logoutUser = (req, res) => {
    TokenService.clearCookie(res);
    return ApiResponse.success(res, {
        message: 'Logged out successfully'
    });
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