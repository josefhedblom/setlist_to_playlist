import { Request, Response, NextFunction, Router } from 'express';
import { SetlistFm } from '../../controllers/SetlistFm.controller';
import dotenv from 'dotenv';

dotenv.config();
const Route = Router();

Route.get('/artists/', (req: Request, res: Response) => {
  const setlist = new SetlistFm(`${process.env.SETLIST_FM_API_KEY}`);
  setlist
    .searchArtist('Bob hund')
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});

export { Route as SetlistRouter };
