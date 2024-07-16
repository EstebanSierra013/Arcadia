import { Router } from "express";
import { ReviewController } from "../controllers/review.js";
import { reviewSchema } from "../helpers/schemas.js";
import { validateData } from "../middlewares/validateResult.js";

export function reviewRouterPrivated(){
  const reviewRouter = Router();
  reviewRouter.get("/", ReviewController.getAll);
  reviewRouter.get("/:id", ReviewController.approveReview);
  reviewRouter.delete('/:id',ReviewController.delete);
  return reviewRouter;
}

export function reviewRouterPublic(){  
  const reviewRouter = Router();
  reviewRouter.post("/", validateData(reviewSchema),ReviewController.create);
  return reviewRouter;
}
