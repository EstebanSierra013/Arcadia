import express, { json } from 'express';
import 'dotenv/config'

import { habitatRouter } from './routers/habitats.js';
import { serviceRouter } from './routers/services.js';
import { animalRouter } from './routers/animals.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(json());

app.use('/habitats',habitatRouter)
app.use('/services',serviceRouter)
app.use('/animals',animalRouter)

app.listen(PORT, (req,res) => {
  console.log(`server listening on port http://localhost:${PORT}`)
})



//server.listen(0,() => {
// console.log(server.address().port)})