import { Router } from "express"
import { AnimalController } from "../controllers/animals.js"
import { validateData } from "../middlewares/validateResult.js";
import { animalSchema } from "../helpers/schemas.js";
import { imageHandle } from "../middlewares/imageHandle.js";

export const animalRouter = Router({mergeParams: true});

animalRouter.get('/',AnimalController.getAll);
animalRouter.get('/:id',AnimalController.getOne);
animalRouter.post('/',validateData(animalSchema),imageHandle(),validateData(animalSchema),AnimalController.create);
animalRouter.delete('/:ids',AnimalController.delete);
animalRouter.post('/:id',validateData(animalSchema),imageHandle(),AnimalController.update);