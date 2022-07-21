import { Request, Response, NextFunction, Router } from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';

dotenv.config();
const Route = Router();

Route.get('/session/account', (req: Request, res: Response) => {
  const { token } = req.body;
  console.log(token);
  // const spotifyApi = new SpotifyWebApi({
  //   clientId: '673d271b4c6e43b1835465d0095e2d79',
  //   clientSecret: '793dd520c4034ffc919ed04f4473c047',
  //   redirectUri: 'http://localhost:3000',
  // });
  // spotifyApi.setAccessToken(token);
  // spotifyApi
  //   .getMe()
  //   .then((data) => {
  //     res.json({ username: data.body.display_name });
  //   })
  //   .catch((error) => {
  //     res.json({
  //       error: error.message,
  //     });
  //   });
});

export { Route as SpotifyRouter };
