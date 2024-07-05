import { validateHabitat } from "../helpers/schemas.js";
import { HabitatModel } from "../models/habitat.js";

export class HabitatController {
  static async getAll(req, res) {
    const habitats = await HabitatModel.getAll();
    res.json(habitats);
  }

  static async create(req, res) {
    const input = validateHabitat(req.body);
    const result = await HabitatModel.create({ input });
    if (result === false) {
      return res.status(404).json({ message: "Habitat not created" });
    }
    return res.status(201).json({ message: "Habitat created" });
  }

  static async delete(req, res) {
    const input = req.body;
    const { id } = req.params;
    const result = await HabitatModel.delete({ id, input });
    console.log(result);
    if (result === false) {
      return res.status(404).json({ message: "Habitat not found" });
    }
    return res.json({ message: "Habitat deleted" });
  }
}
