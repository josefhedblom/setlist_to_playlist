import express, { Request, Response, NextFunction } from 'express';
import { Exception } from './interface/exception.interface';

const app = express();

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Success!' });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = { status: 404, message: 'Not Found' };
  next(error);
});

app.use((error: Exception, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500).json({
    message: error.message,
  });
});

app.listen(3000, () => console.log(`Listing on http://localhost:3000`));
