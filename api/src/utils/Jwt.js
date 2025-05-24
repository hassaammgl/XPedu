import jwt from 'jsonwebtoken';
import { ENVS } from '../config/constants';
import { AppError } from './AppError';

export class TokenService {
    static generateToken(id) {
        try {
            return jwt.sign({ id }, ENVS.JWT_SECRET, {
                expiresIn: '30d'
            });
        } catch (error) {
            throw new AppError('Error generating token', 500);
        }
    }

    static verifyToken(token) {
        try {
            return jwt.verify(token, ENVS.JWT_SECRET);
        } catch (error) {
            throw new AppError('Invalid token', 401);
        }
    }

    static setCookie(res, token) {
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: ENVS.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });
    }

    static clearCookie(res) {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        });
    }
}