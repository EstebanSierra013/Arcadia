import { Router } from "express"
import { CountController } from "../controllers/count.js"

export const counterRouter = Router({mergeParams: true});

counterRouter.get('/',CountController.getAll);
counterRouter.post('/',CountController.save);