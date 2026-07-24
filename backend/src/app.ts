import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { env } from './config/env.config';
import githubRoutes from './routes/github.routes';
import { errorHandler } from './middleware/error.middleware';
import { apiLimiter } from './middleware/rateLimit.middleware';

const app: Application = express();

app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(apiLimiter);

app.use('/api/github', githubRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

export default app;
