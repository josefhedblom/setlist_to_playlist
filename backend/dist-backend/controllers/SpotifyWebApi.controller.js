"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spotify = void 0;
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
class Spotify {
    constructor(options) {
        this.CONFIG = {
            CLIENT_ID: '673d271b4c6e43b1835465d0095e2d79',
            CLIENT_SECRET: '793dd520c4034ffc919ed04f4473c047',
            REDIRECT_URI: 'https://setlist-to-playlist.josefhedblom.se',
            ACCESS_TOKEN: '',
            ARTIST: '',
            VENUE: '',
            EVENT_DATE: '',
            PLAYLIST_ID: '',
            SONG: '',
        };
        this.spotify = new spotify_web_api_node_1.default({
            clientId: `${this.CONFIG.CLIENT_ID}`,
            clientSecret: `${this.CONFIG.CLIENT_SECRET}`,
            redirectUri: `${this.CONFIG.REDIRECT_URI}`,
        });
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
            .createPlaylist(`${this.CONFIG.ARTIST} live @ ${this.CONFIG.VENUE} | ${this.CONFIG.EVENT_DATE}`, {
            description: 'My description',
            collaborative: false,
            public: false,
        })
            .then((response) => {
            return {
                playlistId: response.body.id,
            };
        })
            .catch((error) => {
            console.log(error);
        });
    }
    addTrackToPlaylist() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.spotify.setAccessToken(this.CONFIG.ACCESS_TOKEN);
            const result = yield this.spotify.searchTracks(this.CONFIG.SONG);
            const trackUri = (_a = result.body.tracks) === null || _a === void 0 ? void 0 : _a.items[0].uri;
            this.spotify
                .addTracksToPlaylist(this.CONFIG.PLAYLIST_ID, [trackUri])
                .then((data) => {
                console.log('Added tracks to the playlist!');
            })
                .catch((err) => {
                console.log('Something went wrong:', err.message);
            });
        });
    }
}
exports.Spotify = Spotify;
