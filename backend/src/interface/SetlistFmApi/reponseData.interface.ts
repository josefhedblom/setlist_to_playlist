export interface SetlistResult {
  data: {
    id: string;
    versionId: string;
    eventDate: string;
    lastUpdated: string;
    artist: {
      mbid: string;
      name: string;
      sortName: string;
      disambiguation: string;
      url: string;
    };
    venue: {
      id: string;
      name: string;
      city: {
        id: string;
        name: string;
        state: string;
        stateCode: string;
        coords: [Object];
        country: [Object];
      };
      url: string;
    };
    sets: { set: [] };
  };
}

export interface SetlistModel {
  id: string;
  eventDate: string;
  artist: string;
  venue: string;
  set: [];
}
