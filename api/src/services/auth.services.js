import User from '../models/user.model';
import { AppError } from '../utils/AppError';
import { TokenService } from '../utils/Jwt';

export class AuthService {
    static async register(userData) {
        const { email } = userData;

        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new AppError('User already exists', 400);
        }

        const user = await User.create(userData);
        if (!user) {
            throw new AppError('Invalid user data', 400);
        }

        const token = TokenService.generateToken(user._id.toString());

        return {
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            },
            token
        };
    }

    static async login(email, password) {
        const user = await User.findOne({ email }).select('+password');
        
        if (!user || !(await user.verifyPassword(password))) {
            throw new AppError('Invalid email or password', 401);
        }

        const token = TokenService.generateToken(user._id.toString());

        return {
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            },
            token
        };
    }

    static async getProfile(userId) {
        const user = await User.findById(userId).select('-password');
        
        if (!user) {
            throw new AppError('User not found', 404);
        }

        return user;
    }
}