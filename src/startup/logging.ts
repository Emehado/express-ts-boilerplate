import winston from 'winston';
import 'express-async-errors'; //Catch async errors in express-routes
import { MongoDBTransportInstance } from 'winston-mongodb';
import 'winston-mongodb'; //add mongoDb transport layer to winston

const loggingService = async () => {
  const customTransports: (
    | winston.transports.ConsoleTransportInstance
    | winston.transports.FileTransportInstance
    | MongoDBTransportInstance
  )[] = [];

  const combinedFileTransport = new winston.transports.File({
    filename: 'combined.log',
  });
  const errorFileTransport = new winston.transports.File({
    filename: 'error.log',
    level: 'error',
  });

  customTransports.push(errorFileTransport);
  customTransports.push(combinedFileTransport);

  if (process.env.NODE_ENV === 'development') {
    const consoleTransport = new winston.transports.Console({
      format: winston.format.simple(),
    });
    customTransports.push(consoleTransport);
  }

  if (process.env.NODE_ENV === 'production') {
    const options = {
      db: process.env.DB_URI,
      options: { useUnifiedTopology: true, useNewUrlParser: true },
      collections: 'logs',
      storeHost: true,
      meta: 'meta',
    };
    //@ts-ignore
    const dbTransport = new winston.transports.MongoDB(options);
    customTransports.push(dbTransport);
  }
  winston.createLogger({
    level: 'error',
    format: winston.format.combine(
      winston.format.errors({ stack: true }), // log the full stack
      winston.format.timestamp(), // get the time stamp part of the full log message
      winston.format.printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${message} - ${stack}`;
      }),
      winston.format.metadata()
    ),
    defaultMeta: { service: 'user-service' },
    transports: customTransports,
    exceptionHandlers: customTransports,
    rejectionHandlers: customTransports,
  });
};

// process.on('unhandledRejection', (err) => {
//   throw err;
// });

// throw new Error('something failed');  //For testing uncaught exception
// const p = Promise.reject(new Error('Promise Rejected')); // for testing unhandled rejections
// p.then(() => console.log('Done'));

export default loggingService;
