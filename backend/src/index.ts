import express from 'express';
import { SetlistRouter } from './routers/SetlistFmApi/setlistfm.router';
import { ExceptionRouter } from './routers/Exceptions/exceptiton.router';
import { ExampleRouter } from './routers/Example/example.router';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use('/api/setlist', SetlistRouter);
app.use(ExampleRouter); // only develop
app.use(ExceptionRouter);

app.listen(process.env.PORT || 4545, () =>
  console.log(`Listing on http://localhost:${process.env.PORT}`),
);
