import { Router } from "express";
import { IndexController } from "../controllers/index.js";

export const indexRouter = Router();

indexRouter.get("/", IndexController.getAll);
indexRouter.get("/profile", IndexController.redirectProfile);

