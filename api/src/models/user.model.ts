import mongoose, { Document } from 'mongoose';
import argon2 from 'argon2';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash password before saving
userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    try {
        this.password = await argon2.hash(this.password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            timeCost: 3,
            parallelism: 1
        });
        next();
    } catch (err: any) {
        next(err);
    }
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
    try {
        return await argon2.verify(this.password, enteredPassword);
    } catch (err) {
        console.error('Error verifying password:', err);
        return false;
    }
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;