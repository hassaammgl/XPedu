import app from './src/app';
import connectDB from './src/config/db';
import { ENVS } from './src/config/constants';
import colors from 'colors';


connectDB();

const server = app.listen(ENVS.PORT, () => {
    console.log(colors.green(`Server running on port ${ENVS.PORT}`));
});

process.on('unhandledRejection', (err) => {
    console.log(colors.red(`Error: ${err.message}`));
    server.close(() => process.exit(1));
});