import { Router } from "express"
import { ProfileController } from "../controllers/profile.js"
import { reviewRouterPrivated } from "./reviews.js";
import { serviceRouterPrivated } from "./services.js";
import { contactRouterPrivated } from "./contact.js";
import { habitatRouterPrivated } from "./habitats.js";
import { animalRouter } from "./animals.js";
import { reportRouter } from "./reports.js";
import { userRouter } from "./users.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { listRols, enumRols } from "../helpers/enumRols.js";


export const profileRouter = Router();
profileRouter.get('/',authMiddleware(listRols),ProfileController.getProfile)
profileRouter.use('/services',authMiddleware([enumRols.Administrateur,enumRols.Employé]),serviceRouterPrivated());
profileRouter.use('/habitats',habitatRouterPrivated());
profileRouter.use('/reviews',authMiddleware([enumRols.Employé]),reviewRouterPrivated());
profileRouter.use('/contact',authMiddleware([enumRols.Employé]),contactRouterPrivated());
profileRouter.use('/animals',authMiddleware([enumRols.Administrateur]),animalRouter);
profileRouter.use('/reports',authMiddleware(listRols),reportRouter);
profileRouter.use('/users',authMiddleware([enumRols.Administrateur]),userRouter);