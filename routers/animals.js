import { Router } from "express"
import { AnimalController } from "../controllers/animals.js"
import { validateData } from "../middlewares/validateResult.js";
import { animalSchema } from "../helpers/schemas.js";
import { validateUrl } from "../helpers/validateUrl.js";
import { imageHandle } from "../middlewares/imageHandle.js";

export const animalRouter = Router({mergeParams: true});

animalRouter.get('/',AnimalController.getAll);
animalRouter.post('/',validateUrl('admin'),validateData(animalSchema),imageHandle(),validateData(animalSchema),AnimalController.create);
animalRouter.delete('/:ids',AnimalController.delete);
animalRouter.post('/:id',validateUrl('admin'),validateData(animalSchema),imageHandle(),AnimalController.update);