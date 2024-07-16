import { ReportModel } from "../models/reports.js";
import { enumRols } from "../helpers/enumRols.js"
import { NotFoundException } from "../helpers/customExceptions.js";

export class ReportController {

  static async getAll(req, res) {
    const { rol } = req.session.user;
    try{      
      const reports = (rol == enumRols.Administrateur) ? await ReportModel.getAll() :await ReportModel.getAll() ;
      
      res.status(201).json({ ... reports });
    } catch (err){      
      console.log(err)
      res.status(404).json({err})
    }
  }

  static async create(req, res) {    
    const input = req.body;
    const { rol } = req.session.user;
    console.log({ ...input, rol })
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
