import { Router } from "express"
import { ProfileController } from "../controllers/profile.js"
import { reviewRouter } from "./reviews.js";
import { serviceRouter } from "./services.js";
import { contactRouter } from "./contact.js";
import { habitatRouter } from "./habitats.js";

export const profileRouter = Router();

profileRouter.use('/:role/services',serviceRouter);
profileRouter.use('/:role/habitats',habitatRouter);
profileRouter.use('/:role/reviews',reviewRouter);
profileRouter.use('/:role/contact',contactRouter);