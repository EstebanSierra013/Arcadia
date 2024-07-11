import { Router } from "express"
import { ContactController } from "../controllers/contact.js"
import { validateUrl } from "../helpers/validateUrl.js";
import { validateData } from "../middlewares/validateResult.js";
import { contactSchema } from "../helpers/schemas.js";

export const contactRouter = Router();

contactRouter.get('/',validateUrl('admin'),ContactController.getAll);
contactRouter.post('/',validateData(contactSchema),ContactController.create);
contactRouter.get('/:id',validateUrl('admin'),ContactController.replyContact);
contactRouter.delete('/:id',validateUrl('admin'),ContactController.delete);