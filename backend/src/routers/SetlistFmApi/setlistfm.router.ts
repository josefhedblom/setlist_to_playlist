import { Request, Response, NextFunction, Router } from 'express';
import { SetlistFm } from '../../controllers/SetlistFm.controller';


const Route = Router();

Route.get('/artists/:search', (req: Request, res: Response) => {
  const { search } = req.params;
  const setlist = new SetlistFm('8VGro68tXZyjgN8EYhDFynA1enBxiJgEBRC2');
  setlist
    .searchArtist(`${search}`)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});

export { Route as SetlistRouter };
