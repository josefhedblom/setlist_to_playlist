import express from 'express';
import { SetlistRouter } from './routers/SetlistFmApi/setlistfm.router';
import { SpotifyRouter } from './routers/SpotifyApi/spotify.router';
import { ExceptionRouter } from './routers/Exceptions/exceptiton.router';

const app = express();
app.use(express.json());

app.use('/api/setlist', SetlistRouter);
app.use('/api/spotify', SpotifyRouter);
app.use(ExceptionRouter);

app.listen(3010, () => console.log(`Listing on 3010`));
