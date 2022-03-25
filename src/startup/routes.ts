import express, { Express } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';

import errorHandler from '@middleware/errorHandler';

import indexRouter from '@/routes/index';
import userRouter from '@/routes/users';

const routes = (app: Express) => {
  process.env.NODE_ENV === 'production' && app.use(helmet());

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../../public')));

  app.use('/', indexRouter);
  app.use('/api/user', userRouter);

  app.use(errorHandler);
};

export default routes;
