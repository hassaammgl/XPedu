import { Router } from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    refreshToken
} from '../controllers/auth.controllers';
import { protect } from '../middlewares/auth.middleware';
import { validateRequest } from '../middlewares/validation.middleware';
import { registerSchema, loginSchema } from '../validations/auth.validation';
import { authLimiter, refreshTokenLimiter } from '../middlewares/rateLimiter.middleware';

const router = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', 
    authLimiter,
    validateRequest(registerSchema), 
    registerUser
);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user & get tokens
 * @access  Public
 */
router.post('/login', 
    authLimiter,
    validateRequest(loginSchema), 
    loginUser
);

/**
 * @route   POST /api/auth/refresh
 * @desc    Refresh access token using refresh token
 * @access  Public
 */
router.post('/refresh', 
    refreshTokenLimiter,
    refreshToken
);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user and clear cookies
 * @access  Private
 */
router.post('/logout', protect, logoutUser);

/**
 * @route   GET /api/auth/profile
 * @desc    Get user profile
 * @access  Private
 */
router.get('/profile', protect, getUserProfile);

export default router;