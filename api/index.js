import 'dotenv/config';
import app from './src/app';
import connectDB from './src/config/db';
import { ENVS } from './src/config/constants';
import { validateEnv } from './src/config/validateEnv';
import colors from 'colors';

try {
    const warnings = validateEnv();

    warnings.forEach(warning => {
        console.log(colors.yellow('Environment Warning:'), warning);
    });

    console.log(colors.green('Environment variables validated successfully'));

    if (ENVS.JWT_SECRET?.length < 32 || ENVS.JWT_REFRESH_SECRET?.length < 32) {
        console.log(colors.yellow('Security Warning: JWT secrets should be at least 32 characters long'));
    }

    console.log(colors.cyan('Environment Mode:'), ENVS.NODE_ENV);
} catch (error) {
    console.error(colors.red('Environment Error:'), error.message);
    process.exit(1);
}


connectDB();

const server = app.listen(ENVS.PORT, () => {
    console.log(colors.green(`Server running on port ${ENVS.PORT}`));
});

process.on('unhandledRejection', (err) => {
    console.log(colors.red(`Error: ${err.message}`));
    server.close(() => process.exit(1));
});
