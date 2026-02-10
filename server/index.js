// import express from 'express';
// import pkg from 'express';
// const { Request, Response } = pkg;
// import { ParseServer } from 'parse-server';
// import dotenv from 'dotenv';
// import Parse from 'parse';
// import cors from 'cors';

const dotenv = require('dotenv')
dotenv.config({path: "../client/.env"});

const express = require('express');
const { ParseServer } = require('parse-server');
const cors = require('cors');
const { initializeClasses } = require('./parse');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//parse server
const parseServer = new ParseServer({
  databaseURI: process.env.DATABASE_URI,
  appId: process.env.NEXT_PUBLIC_PARSE_APP_ID,
  masterKey: process.env.NEXT_PUBLIC_PARSE_MASTER_KEY,
  serverURL: `http://localhost:${process.env.PORT}/parse`,

  databaseOptions: {
    maxPoolSize: 10,
    connectTimeoutMS: 30000,
  }
});
parseServer.start();

initializeClasses()

app.use('/parse', parseServer.app);

app.get('/', (req, res) => {
  res.status(200).send('Parse Server is running with Express and TypeScript.');
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}/parse`);
});
