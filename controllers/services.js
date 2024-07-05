import { validateService } from "../helpers/schemas.js";
import { ServiceModel } from "../models/service.js";

export class ServiceController {
  static async getAll(req, res) {
    const services = await ServiceModel.getAll();
    res.json(services);
  }

  static async create(req, res) {
    const input = validateService(req.body);
    const result = await ServiceModel.create({ input });
    if (result === false) {
      return res.status(404).json({ message: "Service not created" });
    }
    return res.status(201).json({ message: "Service created" });
  }

  static async delete(req, res) {
    const input = req.body;
    const { id } = req.params;
    const result = await ServiceModel.delete({ id, input });
    console.log(result);
    if (result === false) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.json({ message: "Service deleted" });
  }
}
