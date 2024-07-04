import { Router } from "express"
import { HabitatController } from "../controllers/habitats.js"

export const habitatRouter = Router();

habitatRouter.get('/',HabitatController.getAll);
habitatRouter.get('/:id',HabitatController);
habitatRouter.get('/:name/:id',HabitatController);
habitatRouter.post('/',HabitatController.create);
habitatRouter.delete('/:id',HabitatController.delete);
habitatRouter.patch('/:name',HabitatController);