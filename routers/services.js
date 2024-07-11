import { Router } from "express"
import { ServiceController } from "../controllers/services.js"
import { serviceSchema } from "../helpers/schemas.js";
import { validateData } from "../middlewares/validateResult.js";
import { imageHandle } from "../middlewares/imageHandle.js";
import { validateUrl } from "../helpers/validateUrl.js";

export const serviceRouter = Router();


serviceRouter.get('/',ServiceController.getAll);
serviceRouter.post('/',validateUrl('admin'),validateData(serviceSchema),imageHandle(),ServiceController.create);
serviceRouter.delete('/:ids',validateUrl('admin'),ServiceController.delete);
serviceRouter.post('/:id',validateUrl('admin'),validateData(serviceSchema),imageHandle(),ServiceController.update);