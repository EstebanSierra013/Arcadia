import { Router } from "express"
import { CountController } from "../controllers/count.js"

export const countRouter = Router({mergeParams: true});

countRouter.get('/',CountController.sortAll);
countRouter.post('/:animal',CountController.save);