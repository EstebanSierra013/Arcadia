import { validateContact } from "../helpers/schemas.js";
import { ContactModel } from "../models/contact.js";

export class ContactController {
  static async create(req, res) {
    const input = validateContact(req.body);
    const newContact = await ContactModel.create({ input });
    res.status(201).json(newContact);
  }
}
