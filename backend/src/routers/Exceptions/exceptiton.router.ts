import { Request, Response, NextFunction, Router } from 'express';
import { Exception } from '../../interface/Exceptions/exception.interface';

const Route = Router();

Route.use((req: Request, res: Response, next: NextFunction) => {
  const error = { status: 404, message: 'Not Found' };
  next(error);
});

Route.use(
  (error: Exception, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      message: error.message,
    });
  },
);

export { Route as ExceptionRouter };
