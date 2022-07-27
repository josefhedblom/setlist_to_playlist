import { Request, Response, NextFunction, Router } from 'express';
import { Spotify } from '../../controllers/SpotifyWebApi.controller';
import SpotifyWebApi from 'spotify-web-api-node';

const Route = Router();

Route.post('/session/create-playlist', (req: Request, res: Response) => {
  const { data, accessToken } = req.body;
  const spotify = new Spotify({ access_token: accessToken, data: data });
  spotify.createPlaylist().then((reponses: any) => {
    res.json({
      playlistId: reponses,
    });
  });
});

Route.post('/session/add-to-playlist', async (req: Request, res: Response) => {
  const { song, accessToken, id } = req.body;
  const spotifyApi = new SpotifyWebApi({
    clientId: '673d271b4c6e43b1835465d0095e2d79',
    clientSecret: '793dd520c4034ffc919ed04f4473c047',
    redirectUri: 'https://setlist-to-playlist.josefhedblom.se',
  });
  spotifyApi.setAccessToken(accessToken);
  const result = await spotifyApi.searchTracks(song);
  const trackUri: any = result.body.tracks?.items[0].uri;
  spotifyApi
    .addTracksToPlaylist(id, [trackUri])
    .then((data) => {
      console.log('Added tracks to the playlist!');
    })
    .catch((err) => {
      console.log(req.body);
    });
});

export { Route as SpotifyRouter };
