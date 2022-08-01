import express from 'express';
import path from 'path';
import { SetlistRouter } from './routers/SetlistFmApi/setlistfm.router';
import { SpotifyRouter } from './routers/SpotifyApi/spotify.router';
import { ExceptionRouter } from './routers/Exceptions/exceptiton.router';
import CONFIG from './config/index';

const app = express();
app.use(express.json());

if (path.join(__dirname, 'dist-client')) {
  app.use(express.static('./dist-client/'));
}

app.use('/api/setlist', SetlistRouter);
app.use('/api/spotify', SpotifyRouter);

if (path.join(__dirname, 'dist-client')) {
  app.get(['/about', '/release-notes'], function (req, res) {
    res.sendFile(path.join(__dirname, 'dist-client', 'index.html'));
  });
}

app.use(ExceptionRouter);
app.listen(CONFIG.PORT, () => console.log(`Listing on ${CONFIG.PORT}`));
