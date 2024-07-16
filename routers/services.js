import { Router } from "express"
import { ServiceController } from "../controllers/services.js"
import { serviceSchema } from "../helpers/schemas.js";
import { validateData } from "../middlewares/validateResult.js";
import { imageHandle } from "../middlewares/imageHandle.js";


export function serviceRouterPrivated(){
  const serviceRouter = Router();
  serviceRouter.get('/',ServiceController.getAll);
  serviceRouter.post('/',validateData(serviceSchema),imageHandle(),ServiceController.create);
  serviceRouter.delete('/:ids',ServiceController.delete);
  serviceRouter.post('/:id',validateData(serviceSchema),imageHandle(),ServiceController.update);
  return serviceRouter;
}

export function serviceRouterPublic(){  
  const serviceRouter = Router();
  serviceRouter.get('/',ServiceController.getAll);
  return serviceRouter;
}
