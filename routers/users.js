import { Router } from "express"
import { UserController } from "../controllers/users.js"
import { validateData } from "../middlewares/validateResult.js";
import { userSchema } from "../helpers/schemas.js";

export const userRouter = Router({mergeParams: true});

userRouter.get('/',UserController.getAll);
userRouter.post('/',validateData(userSchema),UserController.create);
userRouter.delete('/:username',UserController.delete);
userRouter.post('/:id',validateData(userSchema),UserController.update);
userRouter.get('/:id',UserController.getOne);