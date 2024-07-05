import { Router } from "express"
import { VeterinaryReportController } from "../controllers/veterinary_report.js";
import { EmployerReportController } from "../controllers/employer_report.js";

export const reportRouter = Router();

reportRouter.get('/veterinary',VeterinaryReportController.getAll);
reportRouter.get('/employer',EmployerReportController.getAll);
reportRouter.post('/veterinary',VeterinaryReportController.create);
reportRouter.post('/employer',EmployerReportController.create);
reportRouter.delete('/veterinary/:id',VeterinaryReportController.delete);
reportRouter.delete('/employer/:id',EmployerReportController.delete);