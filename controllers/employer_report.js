import { EmployerReportModel } from "../models/employer_report.js";

export class EmployerReportController {
  static async getAll (req, res){
    const employer_reports = await EmployerReportModel.getAll();
    res.json(employer_reports);    
  }

  static async create (req, res){
    const input = req.body;
    const result = await EmployerReportModel.create({ input });
    if (result === false) {
      return res.status(404).json({ message: 'Employer report not created' });
    }
    return res.status(201).json({ message: 'Employer report created' });
  }

  static async delete (req, res){
    const input = req.body;
    const { id } = req.params;
    const result = await EmployerReportModel.delete({ id, input });
    console.log(result);
    if (result === false) {
      return res.status(404).json({ message: 'Employer report not found' });
    }
    return res.json({ message: 'Employer report deleted' });
  }
}