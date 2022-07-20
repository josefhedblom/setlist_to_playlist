import axios from 'axios';

export class SetlistFm {
  CONFIG = {
    BASE_URL: 'https://api.setlist.fm/rest/1.0/search/setlists?artistName=',
    HEADERS: {
      'Content-Type': 'application/json',
      'x-api-key': '',
    },
  };
  constructor(apiKey: string) {
    this.CONFIG.HEADERS['x-api-key'] = apiKey;
  }
  searchArtist(artist: string) {
    return axios({
      method: 'GET',
      url: `${this.CONFIG.BASE_URL}${artist}`,
      headers: this.CONFIG.HEADERS,
    }).then(this.searchArtistResult);
  }

  searchArtistResult(response: any) {
    const { setlist } = response.data;
    return setlist.map((_: any, index: number): any => {
      return {
        id: setlist[index].id,
        eventDate: setlist[index].eventDate,
        artist: setlist[index].artist.name,
        venue: setlist[index].venue.name,
        set: setlist[index].sets.set,
      };
    });
  }
}
