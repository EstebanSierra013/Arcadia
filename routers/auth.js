import { Router } from "express"
import { validateData } from "../middlewares/validateResult.js";
import { authSchema} from "../helpers/schemas.js";
import { AutheticationController } from "../controllers/auth.js";

export const authRouter = Router();

authRouter.get('/login',AutheticationController.renderLogin);
authRouter.post('/login',validateData(authSchema),AutheticationController.login);
authRouter.get('/logout',AutheticationController.logout);