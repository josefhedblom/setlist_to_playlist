import SpotifyWebApi from 'spotify-web-api-node';
import { CONFIG } from '../config/env.config';
import { Setlist } from '../interface/SpotifyApi/spotify.interface';

export class Spotify {
  spotify = new SpotifyWebApi({
    clientId: `${CONFIG.CLIENT_ID}`,
    clientSecret: `${CONFIG.CLIENT_SECRET}`,
    redirectUri: `${CONFIG.REDIRECT_DEV_URI}`,
  });

  DATA: Setlist[] = [];

  constructor(data: Setlist) {
    this.DATA.push(data);
  }

  createPlaylist() {
    this.spotify.setAccessToken(this.DATA[0].accessToken);
    return this.spotify
      .createPlaylist(
        `${this.DATA[0].artist} live @ ${this.DATA[0].venue} | ${this.DATA[0].eventDate}`,
        {
          description: 'My description',
          collaborative: false,
          public: false,
        },
      )
      .then((response) => {
        return {
          playlistId: response.body.id,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async addTrackToPlaylist() {
    this.spotify.setAccessToken(this.DATA[0].accessToken);

    const result = await this.spotify.searchTracks(this.DATA[0].song);
    const trackUri: any = result.body.tracks?.items[0].uri;
    this.spotify
      .addTracksToPlaylist(this.DATA[0].id, [trackUri])
      .then((data) => {
        return {
          success: 'Added tracks to the playlist!',
        };
      })
      .catch((error) => {
        return {
          error: error,
        };
      });
  }
}
