import { ContactModel } from "../models/contact.js";

export class ContactController {
  static async create (req, res){
    const result = req.body;
    const newContact = await ContactModel.create({ input: result });
    res.status(201).json(newContact);
  }
}