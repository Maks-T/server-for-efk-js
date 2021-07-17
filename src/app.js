
/*import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors';*/

const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const cors = require('cors');

const PORT = process.env.PORT || 3000;


const userRouter = require('./routers/user-router');
const categoryRouter = require('./routers/category-router');

const dbName = 'EFK';

const URI = `mongodb://maxim:123@cluster0-shard-00-00.lixqw.mongodb.net:27017,cluster0-shard-00-01.lixqw.mongodb.net:27017,cluster0-shard-00-02.lixqw.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-5blx0s-shard-0&authSource=admin&retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('static'));

app.use(fileUpload({}));
app.use('/api', userRouter);
app.use('/api', categoryRouter);

async function startApp() {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
