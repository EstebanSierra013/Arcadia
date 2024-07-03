import { Router } from "express"
import { HabitatController } from "../controllers/habitats.js"

export const habitatRouter = Router();

habitatRouter.get('/',HabitatController.getAll);
habitatRouter.get('/:name',HabitatController);
habitatRouter.get('/:name/:id',HabitatController);
habitatRouter.post('/',HabitatController);
habitatRouter.delete('/:name',HabitatController);
habitatRouter.patch('/:name',HabitatController);