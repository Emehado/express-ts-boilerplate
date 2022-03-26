import 'dotenv/config';
import express from 'express';

import createServer from '@/startup/createServer';
import loggingService from '@/startup/logging';
import connectDB from '@/startup/db';
import routes from '@startup/routes';

const app = express();

createServer(app, () => {
  loggingService();
  connectDB();
  routes(app);
});
