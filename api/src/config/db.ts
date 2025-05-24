import mongoose from 'mongoose';
import colors from 'colors';
import { ENVS } from './constants';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENVS.MONGO_URI as string);
        console.log(colors.cyan(`MongoDB Connected: ${conn?.connection?.db?.databaseName}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB; 