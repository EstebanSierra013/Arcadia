import { Router } from "express"
import { ProfileController } from "../controllers/profile.js"
import { reviewRouter } from "./reviews.js";
import { serviceRouter } from "./services.js";
import { contactRouter } from "./contact.js";
import { habitatRouter } from "./habitats.js";
import { animalRouter } from "./animals.js";
import { reportRouter } from "./reports.js";
import { userRouter } from "./users.js";

export const profileRouter = Router();

profileRouter.get('/:role',ProfileController.getProfile)
profileRouter.use('/:role/services',serviceRouter);
profileRouter.use('/:role/habitats',habitatRouter);
profileRouter.use('/:role/reviews',reviewRouter);
profileRouter.use('/:role/contact',contactRouter);
profileRouter.use('/:role/animals',animalRouter);
profileRouter.use('/:role/reports',reportRouter);
profileRouter.use('/:role/users',userRouter);