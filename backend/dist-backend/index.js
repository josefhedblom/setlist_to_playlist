"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setlistfm_router_1 = require("./routers/SetlistFmApi/setlistfm.router");
const spotify_router_1 = require("./routers/SpotifyApi/spotify.router");
const exceptiton_router_1 = require("./routers/Exceptions/exceptiton.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('./dist-client/'));
app.use('/api/setlist', setlistfm_router_1.SetlistRouter);
app.use('/api/spotify', spotify_router_1.SpotifyRouter);
app.use(exceptiton_router_1.ExceptionRouter);
app.listen(3010, () => console.log(`Listing on 3010`));
