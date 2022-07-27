"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetlistFm = void 0;
const axios_1 = __importDefault(require("axios"));
class SetlistFm {
    constructor(apiKey) {
        this.CONFIG = {
            BASE_URL: 'https://api.setlist.fm/rest/1.0/search/setlists?artistName=',
            HEADERS: {
                'Content-Type': 'application/json',
                'x-api-key': '',
            },
        };
        this.CONFIG.HEADERS['x-api-key'] = apiKey;
    }
    searchArtist(artist) {
        return (0, axios_1.default)({
            method: 'GET',
            url: `${this.CONFIG.BASE_URL}${artist}`,
            headers: this.CONFIG.HEADERS,
        }).then(this.searchArtistResult);
    }
    searchArtistResult(response) {
        const { setlist } = response.data;
        return setlist.map((_, index) => {
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
exports.SetlistFm = SetlistFm;
