import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import axios from 'axios';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error Details:', err.response?.data || err.message || err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: err.errors
    });
  }

  if (axios.isAxiosError(err)) {
    return res.status(err.response?.status || 500).json({
      success: false,
      message: 'Unable to retrieve GitHub data.',
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
