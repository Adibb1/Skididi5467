import express from 'express';
import { ParseServer } from 'parse-server';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// 1. Initialize Parse Server
const api = new ParseServer({
  databaseURI: process.env.DATABASE_URI,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY, // Keep this secret!
  serverURL: `http://localhost:${process.env.PORT}/parse`,
  
  // Advanced options for MongoDB Atlas
  databaseOptions: {
    maxPoolSize: 10,
    connectTimeoutMS: 30000,
  }
});

// 2. Mount Parse API to Express
// This is the bridge between your frontend and backend
app.use('/parse', api.app);

// 3. Health Check or Custom Routes
app.get('/', (req, res) => {
  res.status(200).send('Parse Server is running with Express and TypeScript.');
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}/parse`);
});