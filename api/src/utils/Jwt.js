import jwt from 'jsonwebtoken';
import { ENVS } from '../config/constants';
import { AppError } from './AppError';

export class TokenService {
    static generateAccessToken(id) {
        try {
            return jwt.sign({ id }, ENVS.JWT_SECRET, {
                expiresIn: '2h'
            });
        } catch (error) {
            throw new AppError('Error generating access token', 500);
        }
    }

    static generateRefreshToken(id) {
        try {
            if (!ENVS.JWT_REFRESH_SECRET) {
                throw new Error('JWT_REFRESH_SECRET is not defined in environment variables');
            }

            return jwt.sign({ id }, ENVS.JWT_REFRESH_SECRET, {
                expiresIn: '7d'
            });
        } catch (error) {
            console.error('Refresh Token Error:', {
                message: error.message,
                env: {
                    hasRefreshSecret: !!ENVS.JWT_REFRESH_SECRET,
                    nodeEnv: ENVS.NODE_ENV
                }
            });
            throw new AppError(`Error generating refresh token: ${error.message}`, 500);
        }
    }

    static verifyAccessToken(token) {
        try {
            return jwt.verify(token, ENVS.JWT_SECRET);
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw new AppError('Access token has expired', 401);
            } else if (error instanceof jwt.JsonWebTokenError) {
                throw new AppError('Invalid access token', 401);
            }
            throw new AppError('Token verification failed', 401);
        }
    }

    static verifyRefreshToken(token) {
        try {
            return jwt.verify(token, ENVS.JWT_REFRESH_SECRET);
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw new AppError('Refresh token has expired, please login again', 401);
            } else if (error instanceof jwt.JsonWebTokenError) {
                throw new AppError('Invalid refresh token', 401);
            }
            throw new AppError('Token verification failed', 401);
        }
    }

    static setTokens(res, { accessToken, refreshToken }) {
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: ENVS.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: ENVS.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
    }

    static clearTokens(res) {
        res.cookie('accessToken', '', {
            httpOnly: true,
            expires: new Date(0)
        });
        res.cookie('refreshToken', '', {
            httpOnly: true,
            expires: new Date(0)
        });
    }
}