import { Router } from "express"
import { UserController } from "../controllers/users.js"
import { validateData } from "../middlewares/validateResult.js";
import { userSchema } from "../helpers/schemas.js";
import { validateUrl } from "../helpers/validateUrl.js";
import { imageHandle } from "../middlewares/imageHandle.js";

export const userRouter = Router({mergeParams: true});

userRouter.get('/',validateUrl('admin'),UserController.getAll);
userRouter.post('/',validateUrl('admin'),validateData(userSchema),UserController.create);
userRouter.delete('/:username',validateUrl('admin'),UserController.delete);
userRouter.post('/:id',validateUrl('admin'),validateData(userSchema),UserController.update);