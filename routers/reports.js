import { Router } from "express"
import { ReportController } from "../controllers/reports.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateData } from "../middlewares/validateResult.js";
import { enumRols } from "../helpers/enumRols.js";
import { reportSchema } from "../helpers/schemas.js";

export const reportRouter = Router({mergeParams: true});

reportRouter.get('/',authMiddleware(),ReportController.getAll)
reportRouter.get('/:id',authMiddleware(),ReportController.getOne)
reportRouter.post('/',authMiddleware([enumRols.Vétérinaire, enumRols.Employé]),ReportController.create);
reportRouter.delete('/:id',authMiddleware([enumRols.Vétérinaire, enumRols.Employé]),ReportController.delete);
reportRouter.post('/:id',validateData(reportSchema),ReportController.update);