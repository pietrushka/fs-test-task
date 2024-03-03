import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './routers/product.router';
import { MONGO_URL } from './constants';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.registerRouters();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(cors());
    this.setMongoConfig();
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL);
  }

  private registerRouters() {
    this.app.use('/product', productRouter);
  }
}

export default new App().app;
