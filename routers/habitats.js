import { Router } from "express"
import { HabitatController } from "../controllers/habitats.js"
import { validateData } from "../middlewares/validateResult.js";
import { habitatSchema } from "../helpers/schemas.js";

export const habitatRouter = Router({mergeParams: true});

habitatRouter.get('/',HabitatController.getAll);
habitatRouter.get('/:id',HabitatController);
habitatRouter.get('/:name/:id',HabitatController);
habitatRouter.post('/',validateData(habitatSchema),HabitatController.create);
habitatRouter.delete('/:id',HabitatController.delete);
habitatRouter.patch('/:name',HabitatController);