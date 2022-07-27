import { Request, Response, NextFunction, Router } from 'express';
import { SetlistFm } from '../../controllers/SetlistFm.controller';
import { CONFIG } from '../../config/env.config';
const Route = Router();

Route.get('/artists/:search', (req: Request, res: Response) => {
  const { search } = req.params;
  const setlist = new SetlistFm(`${CONFIG.SETLIST_FM_API_KEY}`);
  setlist
    .searchArtist(`${search}`)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});

export { Route as SetlistRouter };
