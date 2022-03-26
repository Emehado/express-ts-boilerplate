import mongoose from 'mongoose';
import Debug from 'debug';

const debug = Debug('server:db');

const connectDB = () => {
  const dbConnection = mongoose.connect(process.env.DB_URI as string);
  debug(`connected to database: ${process.env.DB_URI}`);
  return dbConnection;
};
export default connectDB;
