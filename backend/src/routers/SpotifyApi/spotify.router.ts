import { Request, Response, Router } from 'express';
import { Spotify } from '../../controllers/SpotifyWebApi.controller';
import { Setlist } from '../../interface/SpotifyApi/spotify.interface';

const Route = Router();

Route.post('/session/create-playlist', (req: Request, res: Response) => {
  const data: Setlist = req.body.data;
  const spotify = new Spotify(data);
  spotify.createPlaylist().then((reponses: any) => {
    res.json({
      playlistId: reponses,
    });
  });
});

Route.post('/session/add-to-playlist', async (req: Request, res: Response) => {
  const data: Setlist = req.body.data;
  const spotify = new Spotify(data);
  spotify.addTrackToPlaylist().then((response) => {
    res.json({
      message: response,
    });
  });
});

export { Route as SpotifyRouter };
