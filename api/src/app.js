import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";
import morgan from "morgan";
import { ENVS } from "./config/constants";
import adminRoutes from './routes/admin.routes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ENVS.FRONTEND_URL,
    credentials: true,
  })
);
app.use(
  morgan(
    ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
  )
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
