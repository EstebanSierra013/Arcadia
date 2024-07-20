import express from 'express';
import cookieParser from 'cookie-parser';

export class ExpressLoader {
  static init(){
    const app = express();
    app.use(express.json()); 
    app.use(express.urlencoded()); 
    app.use(express.static('public'));
    app.use(cookieParser());
    app.set('view engine', 'ejs');
    return app;
  }
}