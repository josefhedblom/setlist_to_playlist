import express from 'express';
import { SetlistRouter } from './routers/SetlistFmApi/setlistfm.router';
import { SpotifyRouter } from './routers/SpotifyApi/spotify.router';
import { ExceptionRouter } from './routers/Exceptions/exceptiton.router';
import { ExampleRouter } from './routers/Example/example.router';
import { PORT } from './config/dotenv.config';

const app = express();
app.use(express.json());

app.use('/api/setlist', SetlistRouter);
app.use('/api/spotify', SpotifyRouter);
app.use(ExampleRouter); // only develop
app.use(ExceptionRouter);

app.listen(PORT || 4545, () =>
  console.log(`Listing on http://localhost:${PORT}`),
);
