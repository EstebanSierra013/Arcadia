import { Router } from "express"
import { ContactController } from "../controllers/contact.js"
import { validateData } from "../middlewares/validateResult.js";
import { contactSchema } from "../helpers/schemas.js";

export function contactRouterPrivated(){
  const contactRouter = Router();
  contactRouter.get('/',ContactController.getAll);
  contactRouter.get('/:id',ContactController.replyContact);
  contactRouter.delete('/:id',ContactController.delete);
  return contactRouter;
}

export function contactRouterPublic(){  
  const contactRouter = Router();
  contactRouter.post('/',validateData(contactSchema),ContactController.create);
  return contactRouter;
}