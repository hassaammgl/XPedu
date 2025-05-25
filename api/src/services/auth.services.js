import User from '../models/user.model';
import { AppError } from '../utils/AppError';
import { TokenService } from '../utils/Jwt';
import { UserDto } from "../utils/UserDTO.js"

export class AuthService {
    static async generateAuthTokens(userId) {
        const accessToken = TokenService.generateAccessToken(userId);
        const refreshToken = TokenService.generateRefreshToken(userId);

        // Save refresh token to user
        await User.findByIdAndUpdate(userId, { refreshToken });

        return { accessToken, refreshToken };
    }

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

        const tokens = await this.generateAuthTokens(user._id.toString());

        return {
            user: new UserDto(user),
            ...tokens
        };
    }

    static async login(email, password) {
        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await user.verifyPassword(password))) {
            throw new AppError('Invalid email or password', 401);
        }

        const tokens = await this.generateAuthTokens(user._id.toString());

        return {
            user: new UserDto(user),
            ...tokens
        };
    }

    static async refreshToken(refreshToken) {
        if (!refreshToken) {
            throw new AppError('Refresh token is required', 401);
        }

        // Verify refresh token
        const decoded = TokenService.verifyRefreshToken(refreshToken);

        // Find user with this refresh token
        const user = await User.findById(decoded.id).select('+refreshToken');
        if (!user || user.refreshToken !== refreshToken) {
            throw new AppError('Invalid refresh token', 401);
        }

        // Generate new tokens
        const tokens = await this.generateAuthTokens(user._id.toString());

        return {
            user: new UserDto(user),
            ...tokens
        };
    }

    static async logout(userId) {
        await User.findByIdAndUpdate({_id:userId}, { refreshToken: null });
    }

    static async getProfile(userId) {
        const user = await User.findById({ _id: userId }).select('-password -refreshToken');

        if (!user) {
            throw new AppError('User not found', 404);
        }

        return user;
    }
}