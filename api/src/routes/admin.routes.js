import { Router } from 'express';
import { adminLogin, getDashboardStats } from '../controllers/admin.controller.js';
import { protect } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/admin.middleware';
import { validateRequest } from '../middlewares/validation.middleware';
import {
    adminLoginSchema,
    createUserSchema,
    updateUserSchema,
} from '../validations/admin.validation';

const router = Router();

router.use(protect, isAdmin); 


router.post('/login', validateRequest(adminLoginSchema), adminLogin);
// router.post('/users', validateRequest(createUserSchema), createUser);
// router.patch('/users/:id', validateRequest(updateUserSchema), updateUser);

// router.get('/dashboard/stats', getDashboardStats);
// router.get('/users', getAllUsers);
// router.get('/courses', getAllCourses);

export default router;