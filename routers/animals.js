import { Router } from "express"
import { AnimalController } from "../controllers/animals.js"
import { validateData } from "../middlewares/validateResult.js";
import { animalSchema } from "../helpers/schemas.js";

export const animalRouter = Router({mergeParams: true});

animalRouter.get('/',AnimalController.getAll);
animalRouter.post('/',validateData(animalSchema),AnimalController.create);
animalRouter.delete('/:id',AnimalController.delete);
animalRouter.patch('/',AnimalController.update);