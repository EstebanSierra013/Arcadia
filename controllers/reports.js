import { ReportModel } from "../models/reports.js";

export class ReportController {
  static async create(req, res) {
    const input = req.body;
    const { role } = req.params;
    try {
      const { report_id } = await ReportModel.create({ ...input, role });
      res.status(201).json({ message: "Report created, Id: " + report_id });
    } catch (err) {
      res.status(404).json({ ...err });
    }
  }

  static async delete(req, res) {
    const { report_id } = req.params;
    try {
      const result = await ReportModel.delete({ report_id });
      if (result === false) {
        throw new NotFoundException("Report not found");
      }
      res.status(201).json({ message: "Report deleted" });
    } catch (err) {
      res.status(404).json({ ...err });
    }
  }
}
