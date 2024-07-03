import { Router } from "express"
import { ServiceController } from "../controllers/services.js"

export const serviceRouter = Router();

serviceRouter.get('/',ServiceController.getAll);
serviceRouter.post('/',ServiceController);
serviceRouter.delete('/:id',ServiceController);
serviceRouter.patch('/:id',ServiceController);
