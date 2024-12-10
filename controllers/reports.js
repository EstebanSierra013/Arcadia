import { ReportModel } from "../models/reports.js";
import { enumRols, enumFunctionbyRol } from "../helpers/enumRols.js"
import { NotFoundException } from "../helpers/customExceptions.js";
import { AnimalModel } from "../models/animal.js";

export class ReportController {

  static async getAll(req, res) {
    const { rol } = req.session.user;
    
    try{      
      const reports = (rol == enumRols.Vétérinaire) ? await ReportModel.getAll() : (rol == enumRols.Administrateur) ? await ReportModel.getAllByRol( { rol: "veterinary"} ) : await ReportModel.getAll( ) ;     
      const animals = await AnimalModel.getAll();
      if(!animals.length) {
        throw new NotFoundException("Animal not found");
      }
      const details= {
        name: "Reports",
        en_name: "reports",
        url: req.originalUrl,
        rol: req.session.user.rol,
        username: req.session.user.username,
        table: animals
      }
      const functions = enumFunctionbyRol[req.session.user.rol];
      let isLogged = false;
      if(req.session.user){
        isLogged = true;
      }
      res.status(201).render("pages/gestion", { objets: reports, details, functions, isLogged})
    } catch (err){   
      res.status(404).json({err})
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;
    const { rol } = req.session.user;
    try{
      const report = await ReportModel.getOne({report_id: id, rol });
      if(!report.length) {
        throw new NotFoundException("Report not found");
      }
      console.log(report)
      res.status(201).json({ objet: report})
    } catch (err){
      res.status(404).json({... err})
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

  static async update(req, res) {
    const input = req.body;
    const { id } = req.params;
    try{
      const { affectedRows }  = await ReportModel.update({ input, report_id: id });
      if (!affectedRows) throw new UpdateFailedException("Report update failed");
      res.status(201).json({ message: "Report update"});
    }catch(err){
      res.status(404).json({... err})
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
