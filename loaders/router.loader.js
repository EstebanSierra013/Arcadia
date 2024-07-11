import { indexRouter } from "../routers/index.js";
import { profileRouter } from "../routers/profile.js";
import { serviceRouter } from "../routers/services.js";
import { contactRouter} from "../routers/contact.js"
import { habitatRouter } from "../routers/habitats.js";

export class RouterLoader {

  static init(app){
    app.use('/',indexRouter);
    app.use('/profile',profileRouter);
    app.use('/habitats',habitatRouter)
    app.use('/services',serviceRouter);
    app.use('/contact',contactRouter)
  }
}