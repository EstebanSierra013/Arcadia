import { Router } from "express"
import { ProfileController } from "../controllers/profile.js"
import { animalRouter } from "./animals.js";
import { habitatRouter } from "./habitats.js";
import { serviceRouter } from "./services.js"

export const profileRouter = Router();

profileRouter.use('/:role/animals',animalRouter);
profileRouter.use('/:role/habitats',habitatRouter);
profileRouter.use('/:role/services',serviceRouter);
profileRouter.use('/:role',ProfileController);