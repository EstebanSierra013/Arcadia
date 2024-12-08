import { indexRouter } from "../routers/index.js";
import { profileRouter } from "../routers/profile.js";
import { serviceRouterPublic } from "../routers/services.js";
import { habitatRouterPublic } from "../routers/habitats.js";
import { authRouter } from "../routers/auth.js";
import { listRols } from "../helpers/enumRols.js";
import { contactRouterPublic } from "../routers/contact.js";
import { reviewRouterPublic } from "../routers/reviews.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { countRouter } from "../routers/count.js"
  
export class RouterLoader {
  
  static init(app){
    let regexRoles = listRols.join("|");
    app.use('/',authMiddleware(),indexRouter);
    app.use(`/profile/:type(${regexRoles})`,profileRouter);
    app.use('/habitats',habitatRouterPublic());
    app.use('/services',serviceRouterPublic());
    app.use('/contact',contactRouterPublic());
    app.use('/reviews',reviewRouterPublic());
    app.use('/auth',authMiddleware(),authRouter); 
    app.use('/click',countRouter);
  }
}