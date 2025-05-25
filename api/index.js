import 'dotenv/config';
import app from './src/app';
import connectDB from './src/config/db';
import { ENVS } from './src/config/constants';
import { validateEnv } from './src/config/validateEnv';
import colors from 'colors';

// Validate environment variables before starting the server
try {
    const warnings = validateEnv();
    
    // Log any warnings about default values being used
    warnings.forEach(warning => {
        console.log(colors.yellow('Environment Warning:'), warning);
    });

    console.log(colors.green('Environment variables validated successfully'));
    
    // Check for essential JWT secrets
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

/**
 * 
 * Error: Error generating refresh token\n    at generateRefreshToken (/media/ratx16/Codes/XPedu/api/src/utils/Jwt.js:22:23)\n    at generateAuthTokens (/media/ratx16/Codes/XPedu/api/src/services/auth.services.js:8:43)\n    at generateAuthTokens (/media/ratx16/Codes/XPedu/api/src/services/auth.services.js:6:37)\n    at login (/media/ratx16/Codes/XPedu/api/src/services/auth.services.js:48:35)\n    at processTicksAndRejections (native:7:39)
 * 
 */