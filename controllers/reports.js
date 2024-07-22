import { ReportModel } from "../models/reports.js";
import { enumRols, enumFunctionbyRol } from "../helpers/enumRols.js"
import { NotFoundException } from "../helpers/customExceptions.js";

export class ReportController {

  static async getAll(req, res) {
    const { rol } = req.session.user;
    try{      
      const reports = (rol == enumRols.Vétérinaire) ? await ReportModel.getAll() : (rol == enumRols.Administrateur) ? await ReportModel.getAllByRol( { rol: "veterinary"} ) : await ReportModel.getAll( rol ) ;     
      const details= {
        name: "Reports",
        en_name: "reports",
        url: req.originalUrl,
        rol: req.session.user.rol
      }
      const functions = enumFunctionbyRol[req.session.user.rol];
      res.status(201).render("pages/gestion", { objets: reports, details, functions})
    } catch (err){   
      res.status(404).json({err})
    }
  }

  static async create(req, res) {    
    const input = req.body;
    const { rol } = req.session.user;
    try {
      const { report_id } = await ReportModel.create({ ...input, rol });
      res.status(201).json({ message: "Report created, Id: " + report_id });
    } catch (err) {
      res.status(404).json({ ...err });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    const { rol } = req.session.user;
    try {
      const result = await ReportModel.delete({ report_id: id, rol });
      if (result === false) {
        throw new NotFoundException("Report not found");
      }
      res.status(201).json({ message: "Report deleted" });
    } catch (err) {
      res.status(404).json({ ...err });
    }
  }
}
