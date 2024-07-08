import { Router } from "express"
import { ServiceController } from "../controllers/services.js"
import { serviceSchema } from "../helpers/schemas.js";
import { validateData } from "../middlewares/validateResult.js";

export const serviceRouter = Router({mergeParams: true});

serviceRouter.get('/',ServiceController.getAll);
serviceRouter.post('/',validateData(serviceSchema),ServiceController.create);
serviceRouter.delete('/:id',ServiceController.delete);
serviceRouter.patch('/:id',ServiceController);
