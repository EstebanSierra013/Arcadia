import 'dotenv/config'
import { ExpressLoader } from './loaders/express.loader.js';
import { DatabaseLouder } from './loaders/database.loader.js';
import { RouterLoader } from './loaders/router.loader.js';



const PORT = process.env.PORT || 3000;

const app = ExpressLoader.init();
DatabaseLouder.init();
RouterLoader.init(app);


app.listen(PORT, (req,res) => {
  console.log(`server listening on port http://localhost:${PORT}`)
})