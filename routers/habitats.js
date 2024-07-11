import { Router } from "express"
import { HabitatController } from "../controllers/habitats.js"
import { validateData } from "../middlewares/validateResult.js";
import { habitatSchema } from "../helpers/schemas.js";
import { validateUrl } from "../helpers/validateUrl.js";
import { imageHandle } from "../middlewares/imageHandle.js";

export const habitatRouter = Router({mergeParams: true});

habitatRouter.get('/',HabitatController.getAll);
habitatRouter.post('/',validateUrl('admin'),validateData(habitatSchema),imageHandle(),HabitatController.create);
habitatRouter.delete('/:ids',validateUrl('admin'),HabitatController.delete);
habitatRouter.post('/:id',validateUrl('admin'),validateData(habitatSchema),imageHandle(),HabitatController.update);