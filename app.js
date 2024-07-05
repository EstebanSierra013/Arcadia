import express, { json, urlencoded} from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config'

import { habitatRouter } from './routers/habitats.js';
import { serviceRouter } from './routers/services.js';
import { animalRouter } from './routers/animals.js';
import { contactRouter } from './routers/contact.js';
import dbArcadia from "./database/db.js";
import { reportRouter } from './routers/reports.js';
import { reviewRouter } from './routers/reviews.js';


const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(json());
app.use(bodyParser.urlencoded({extended: true}));

dbArcadia.connect()

app.use('/habitats',habitatRouter);
app.use('/services',serviceRouter);
app.use('/animals',animalRouter);
app.use('/contact',contactRouter);
app.use('/reports',reportRouter);
app.use('/reviews',reviewRouter);

app.listen(PORT, (req,res) => {
  console.log(`server listening on port http://localhost:${PORT}`)
})



//server.listen(0,() => {
// console.log(server.address().port)})