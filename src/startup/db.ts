import mongoose from 'mongoose';
import Debug from 'debug';

const debug = Debug('server:db');

const connectDB = () => {
  const dbUri = process.env.DB_URI;

  if (!dbUri) {
    throw new Error('DB_URI not defined');
  }

  const dbConnection = mongoose.connect(dbUri);
  debug(`connected to database ${dbUri}`);

  return dbConnection;
};
export default connectDB;
