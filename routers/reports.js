import { Router } from "express"
import { ReportController } from "../controllers/reports.js";

export const reportRouter = Router({mergeParams: true});

reportRouter.post('/',ReportController.create);
reportRouter.delete('/:id',ReportController.delete);