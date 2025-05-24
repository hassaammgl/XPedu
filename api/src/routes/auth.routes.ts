import { Router } from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile
} from '../controllers/auth.controllers';
import { protect } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getUserProfile);

export default router;