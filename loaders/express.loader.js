import express, { json } from 'express';
import cookieParser from 'cookie-parser';

export class ExpressLoader {
  static init(){
    const app = express();
    app.use(json()); 
    app.use(express.static('public'));
    app.use(cookieParser());
    return app;
  }
}