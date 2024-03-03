import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './routers/product.router';
import { MONGO_URL } from './constants';
import { globalErrorHandler, notFoundHandler } from './middlewares/errorHandlers';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setMongoConfig();
    this.registerRouters();
    this.setErrorHandling();
  }

  private setMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL);
  }

  private registerRouters() {
    this.app.use('/product', productRouter);
  }

  private setErrorHandling() {
    this.app.all('*', notFoundHandler);
    this.app.use(globalErrorHandler);
  }
}

export default new App().app;
