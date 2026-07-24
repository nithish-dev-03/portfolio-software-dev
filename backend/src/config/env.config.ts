import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const env = {
  PORT: process.env.PORT || 5000,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  NODE_ENV: process.env.NODE_ENV || 'development',
};
