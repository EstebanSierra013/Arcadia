import { Router } from "express"
import { AnimalController } from "../controllers/animals.js"

export const animalRouter = Router();

animalRouter.get('/',AnimalController.getAll);
animalRouter.post('/',AnimalController.create);
animalRouter.delete('/:id',AnimalController.delete);
animalRouter.patch('/',AnimalController.update);