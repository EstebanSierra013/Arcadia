import { Router } from "express";
import { IndexController } from "../controllers/index.js";
import { ReviewController } from "../controllers/review.js";
import { ServiceController } from "../controllers/services.js";

export const indexRouter = Router();

indexRouter.get("/", IndexController.getAll);
indexRouter.post("/review", ReviewController.create);
;
