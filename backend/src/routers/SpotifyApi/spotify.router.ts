import { Request, Response, NextFunction, Router } from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';

dotenv.config();
const Route = Router();

Route.get('/session/account', (req: Request, res: Response) => {
  const { token } = req.body;
  console.log(token);
});

export { Route as SpotifyRouter };
