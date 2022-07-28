import SpotifyWebApi from 'spotify-web-api-node';
import { CONFIG } from '../config/env.config';

export class Spotify {
  CONFIG = {
    CLIENT_ID: CONFIG.CLIENT_ID,
    CLIENT_SECRET: CONFIG.CLIENT_SECRET,
    REDIRECT_URI: CONFIG.REDIRECT_DEV_URI,
    ACCESS_TOKEN: '',
    ARTIST: '',
    VENUE: '',
    EVENT_DATE: '',
    PLAYLIST_ID: '',
    SONG: '',
  };
  spotify = new SpotifyWebApi({
    clientId: `${this.CONFIG.CLIENT_ID}`,
    clientSecret: `${this.CONFIG.CLIENT_SECRET}`,
    redirectUri: `${this.CONFIG.REDIRECT_URI}`,
  });

  constructor(options: any) {
    this.CONFIG.ACCESS_TOKEN = options.access_token;
    this.CONFIG.ARTIST = options.data.artist;
    this.CONFIG.VENUE = options.data.venue;
    this.CONFIG.EVENT_DATE = options.data.eventDate;
    this.CONFIG.PLAYLIST_ID = options.id;
    this.CONFIG.SONG = options.song;
  }
  createPlaylist() {
    this.spotify.setAccessToken(this.CONFIG.ACCESS_TOKEN);
    return this.spotify
      .createPlaylist(
        `${this.CONFIG.ARTIST} live @ ${this.CONFIG.VENUE} | ${this.CONFIG.EVENT_DATE}`,
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
    this.spotify.setAccessToken(this.CONFIG.ACCESS_TOKEN);
    const result = await this.spotify.searchTracks(this.CONFIG.SONG);
    const trackUri: any = result.body.tracks?.items[0].uri;
    this.spotify
      .addTracksToPlaylist(this.CONFIG.PLAYLIST_ID, [trackUri])
      .then((data) => {
        console.log('Added tracks to the playlist!');
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }
}
