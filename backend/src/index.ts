import express from 'express';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { SetlistRouter } from './routers/SetlistFmApi/setlistfm.router';
import { SpotifyRouter } from './routers/SpotifyApi/spotify.router';
import { ExceptionRouter } from './routers/Exceptions/exceptiton.router';
import CONFIG from './config/index';

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5, // Limit each IP to 5 requests per `window` (here, per 10 minutes)
  message: 'You have reach your request limit. Only 5 requsets per 10 min',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
app.use(express.json());

if (path.join(__dirname, 'dist-client')) {
  app.use(express.static('./dist-client/'));
}

app.use('/api/setlist', limiter, SetlistRouter);
app.use('/api/spotify', SpotifyRouter);

if (path.join(__dirname, 'dist-client')) {
  app.get(['/about', '/release-notes'], function (req, res) {
    res.sendFile(path.join(__dirname, 'dist-client', 'index.html'));
  });
}

app.use(ExceptionRouter);
app.listen(CONFIG.PORT, () => console.log(`Listing on ${CONFIG.PORT}`));
