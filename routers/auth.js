import { Router } from "express"
import { ContactController } from "../controllers/contact.js"
import { validateUrl } from "../helpers/validateUrl.js";
import { validateData } from "../middlewares/validateResult.js";
import { authSchema} from "../helpers/schemas.js";
import { AutheticationController } from "../controllers/auth.js";

export const authRouter = Router();

authRouter.post('/login',validateData(authSchema),AutheticationController.login);
authRouter.post('/logout',AutheticationController.logout);