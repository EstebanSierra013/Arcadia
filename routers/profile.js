import { Router } from "express"
import { ProfileController } from "../controllers/profile.js"
import { ReviewController } from "../controllers/review.js";
import { reviewRouter } from "./reviews.js";
import { serviceRouter } from "./services.js";

export const profileRouter = Router();

profileRouter.use('/:role/services',serviceRouter);
profileRouter.use('/:role/reviews',reviewRouter);