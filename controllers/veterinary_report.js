import { VeterinaryReportModel } from "../models/veterinary_report.js";

export class VeterinaryReportController {
  static async getAll (req, res){
    const veterinary_reports = await VeterinaryReportModel.getAll();
    res.json(veterinary_reports);    
  }

  static async create (req, res){
    const input = req.body;
    const result = await VeterinaryReportModel.create({ input });
    if (result === false) {
      return res.status(404).json({ message: 'Veterinary report not created' });
    }
    return res.status(201).json({ message: 'Veterinary report created' });
  }

  static async delete (req, res){
    const input = req.body;
    const { id } = req.params;
    const result = await VeterinaryReportModel.delete({ id, input });
    console.log(result);
    if (result === false) {
      return res.status(404).json({ message: 'Veterinary report not found' });
    }
    return res.json({ message: 'Veterinary report deleted' });
  }
}