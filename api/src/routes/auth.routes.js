import { Router } from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile
} from '../controllers/auth.controllers';
import { protect } from '../middlewares/auth.middleware';
import { validateRequest } from '../middlewares/validation.middleware';
import { registerSchema, loginSchema } from '../validations/auth.validation';

const router = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', validateRequest(registerSchema), registerUser);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user & get token
 * @access  Public
 */
router.post('/login', validateRequest(loginSchema), loginUser);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user and clear cookie
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