import { Router } from "express";
import { ReviewController } from "../controllers/review.js";

export const reviewRouter = Router({ mergeParams: true });

reviewRouter.get("/", ReviewController.getAll);
reviewRouter.post("/", ReviewController.create);
reviewRouter.get("/:id", ReviewController.approveReview);
reviewRouter.delete('/:id',ReviewController.delete);
