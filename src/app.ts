import 'dotenv/config';
import express from 'express';

import createServer from '@/startup/createServer';
import connectDB from '@/startup/db';
import loggingService from '@/startup/logging';
import routes from '@startup/routes';

const app = express();

createServer(app);
loggingService();
connectDB();
routes(app);
