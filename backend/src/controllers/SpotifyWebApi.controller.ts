import SpotifyWebApi from 'spotify-web-api-node';

export const authenticat = (code: string) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: '673d271b4c6e43b1835465d0095e2d79',
    clientSecret: '793dd520c4034ffc919ed04f4473c047',
    redirectUri: 'http://localhost:3000',
  });

  return spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      return {
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      };
    })
    .catch((error) => {
      return error;
    });
};
