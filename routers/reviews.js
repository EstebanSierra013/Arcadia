import { Router } from "express"
import { ReviewController } from "../controllers/review.js"

export const reviewRouter = Router();

reviewRouter.get('/',ReviewController);
reviewRouter.post('/',ReviewController);