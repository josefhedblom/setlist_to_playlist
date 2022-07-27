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
exports.SpotifyRouter = void 0;
const express_1 = require("express");
const SpotifyWebApi_controller_1 = require("../../controllers/SpotifyWebApi.controller");
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
const Route = (0, express_1.Router)();
exports.SpotifyRouter = Route;
Route.post('/session/create-playlist', (req, res) => {
    const { data, accessToken } = req.body;
    const spotify = new SpotifyWebApi_controller_1.Spotify({ access_token: accessToken, data: data });
    spotify.createPlaylist().then((reponses) => {
        res.json({
            playlistId: reponses,
        });
    });
});
Route.post('/session/add-to-playlist', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { song, accessToken, id } = req.body;
    const spotifyApi = new spotify_web_api_node_1.default({
        clientId: '673d271b4c6e43b1835465d0095e2d79',
        clientSecret: '793dd520c4034ffc919ed04f4473c047',
        redirectUri: 'https://setlist-to-playlist.josefhedblom.se',
    });
    spotifyApi.setAccessToken(accessToken);
    const result = yield spotifyApi.searchTracks(song);
    const trackUri = (_a = result.body.tracks) === null || _a === void 0 ? void 0 : _a.items[0].uri;
    spotifyApi
        .addTracksToPlaylist(id, [trackUri])
        .then((data) => {
        console.log('Added tracks to the playlist!');
    })
        .catch((err) => {
        console.log(req.body);
    });
}));
