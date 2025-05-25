import Joi from 'joi';

export const adminLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const createUserSchema = Joi.object({
    name: Joi.string().required().min(2).max(50),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    role: Joi.string().valid('user', 'admin').default('user')
});

export const updateUserSchema = Joi.object({
    name: Joi.string().min(2).max(50),
    email: Joi.string().email(),
    role: Joi.string().valid('user', 'admin'),
    level: Joi.number().min(1).max(100),
    rank: Joi.string().valid('E', 'D', 'C', 'B', 'A', 'S', 'SS', 'SSS', 'Monarch', 'Ruler')
}).min(1);
