import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';

export class ExpressLoader {
  static init(){
    const app = express();
    app.use(json()); 
    app.use(express.static('public'));
    console.log((path.dirname(new URL(import.meta.url).pathname) + '/public'))
    app.use(express.static('../public'));
    app.use(cookieParser());
    app.set('view engine', 'ejs');
    return app;
  }
}