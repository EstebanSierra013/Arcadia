import { ContactModel } from "../models/contact.js";
import { UpdateFailedException, NotFoundException } from "../helpers/customExceptions.js";

export class ContactController {

  static async renderContact(req, res) {
    try{
      res.render("pages/contact");
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async getAll(req, res) {
    try{
      const contacts = await ContactModel.getAll();
      if(!contacts.length) {
        throw new NotFoundException("Contact not found");
      }
      res.status(201).json({ contacts });
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async create(req, res) {
    const input = req.body;
    try{
      const {contact_id} = await ContactModel.create({ input });
      res.status(201).json({ message: "Contact created, Id: " + contact_id});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async replyContact(req, res) {
    const { id } = req.params;
    try{
      const { affectedRows }  = await ContactModel.replyContact({ contact_id: id });
      if (!affectedRows) throw new UpdateFailedException("Contact replied failed");
      res.status(201).json({ message: "Contact replied "});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async delete(req, res) {
    const { id } = req.params
    try{
      const result = await ContactModel.delete({ contact_id : id });       
      if (result === false) {
        throw new NotFoundException("Contact not found");
      }
      res.status(201).json({ message: "Contact deleted" });
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}
