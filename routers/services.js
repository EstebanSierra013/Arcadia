import { Router } from "express"
import { ServiceController } from "../controllers/services.js"
import { serviceSchema } from "../helpers/schemas.js";
import { validateData } from "../middlewares/validateResult.js";
import { imageHandle } from "../middlewares/imageHandle.js";

export const serviceRouter = Router({mergeParams: true});

serviceRouter.get('/',ServiceController.getAll);
serviceRouter.post('/',validateData(serviceSchema),imageHandle(),ServiceController.create);
serviceRouter.delete('/:ids',ServiceController.delete);
serviceRouter.post('/:id',validateData(serviceSchema),imageHandle(),ServiceController.update);
