import { AppError } from '../utils/AppError';

export const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            throw new AppError(error.details[0].message, 400);
        }
        next();
    };
};
