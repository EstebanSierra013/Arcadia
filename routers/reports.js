import { Router } from "express"
import { ReportController } from "../controllers/reports.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { enumRols } from "../helpers/enumRols.js";

export const reportRouter = Router({mergeParams: true});

reportRouter.get('/',authMiddleware(),ReportController.getAll)
reportRouter.post('/',authMiddleware([enumRols.Vétérinaire, enumRols.Employé]),ReportController.create);
reportRouter.delete('/:id',authMiddleware([enumRols.Vétérinaire, enumRols.Employé]),ReportController.delete);