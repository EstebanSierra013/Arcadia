import express, { json} from 'express';
import 'dotenv/config'

import dbArcadia from "./database/db.js";
import { RouterLoader } from './loaders/router.loader.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(json()); 
app.use(express.static('public'));

dbArcadia.connect()

RouterLoader.init(app)


app.listen(PORT, (req,res) => {
  console.log(`server listening on port http://localhost:${PORT}`)
})