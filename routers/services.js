import { Router } from "express"
import { ServiceController } from "../controllers/services.js"

export const serviceRouter = Router();

serviceRouter.get('/',ServiceController.getAll);
serviceRouter.post('/',ServiceController.create);
serviceRouter.delete('/:id',ServiceController.delete);
serviceRouter.patch('/:id',ServiceController);
