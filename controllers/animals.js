import { AnimalModel } from "../models/animal.js";
import { validateAnimal } from "../helpers/schemas.js";

export class AnimalController {
  static async getAll (req, res){
    const animals = await AnimalModel.getAll();
    res.json(animals);    
  }

  static async create (req, res){
    console.log(req.body)
    const input = validateAnimal(req.body);
    console.log(input)
    const result = await AnimalModel.create({ input });
    if (result === false) {
      return res.status(404).json({ message: 'Animal not created' });
    }
    return res.status(201).json({ message: 'Animal created' });
  }

  static async update (req, res){
    const input = req.body;
    const result = await AnimalModel.update({ input });
    if (result === false) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    return res.status(201).json({ message: 'Animal created' });
  }

  static async delete (req, res){
    const input = req.body;
    const { id } = req.params;
    const result = await AnimalModel.delete({ id, input });
    console.log(result);
    if (result === false) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    return res.json({ message: 'Animal deleted' });
  }
}