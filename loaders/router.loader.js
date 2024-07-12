import { indexRouter } from "../routers/index.js";
import { profileRouter } from "../routers/profile.js";
import { serviceRouter } from "../routers/services.js";
import { contactRouter} from "../routers/contact.js"
import { habitatRouter } from "../routers/habitats.js";
import { authRouter } from "../routers/auth.js";
import { enumRols } from "../helpers/enumRols.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { checkRole } from "../middlewares/rolHandle.js";

export class RouterLoader {

  static init(app){
    app.use('/',indexRouter);
    app.use('/profile',authMiddleware(),checkRole(Object.values(enumRols)),profileRouter);
    app.use('/habitats',habitatRouter)
    app.use('/services',serviceRouter);
    app.use('/contact',contactRouter)
    app.use('/auth',authRouter)
  }
}