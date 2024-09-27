import { Router } from "express"
import { HabitatController } from "../controllers/habitats.js"
import { validateData } from "../middlewares/validateResult.js";
import { habitatSchema } from "../helpers/schemas.js";
import { imageHandle } from "../middlewares/imageHandle.js";
import { AnimalController } from "../controllers/animals.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { enumRols } from "../helpers/enumRols.js";

export function habitatRouterPrivated(){
  const habitatRouter = Router();
  habitatRouter.get('/',authMiddleware([enumRols.Administrateur,enumRols.Vétérinaire]),HabitatController.getAll);
  habitatRouter.get('/:id',authMiddleware([enumRols.Administrateur,enumRols.Vétérinaire]),HabitatController.getOne);
  habitatRouter.post('/',authMiddleware([enumRols.Administrateur]),validateData(habitatSchema),imageHandle(),HabitatController.create);
  habitatRouter.delete('/:ids',authMiddleware([enumRols.Administrateur]),HabitatController.delete);
  habitatRouter.post('/:id',authMiddleware([enumRols.Administrateur,enumRols.Vétérinaire]),validateData(habitatSchema),imageHandle(),HabitatController.update);
  return habitatRouter;
}

export function habitatRouterPublic(){  
  const habitatRouter = Router();
  habitatRouter.get('/',authMiddleware(),HabitatController.renderHabitat);
  habitatRouter.get('/:id',authMiddleware(),AnimalController.getAllByHabitat, HabitatController.renderOneHabitat);
  return habitatRouter;
}


