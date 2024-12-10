import { ContactModel } from "../models/contact.js";
import { UpdateFailedException, NotFoundException } from "../helpers/customExceptions.js";
import { enumFunctionbyRol } from "../helpers/enumRols.js";

export class ContactController {

  static async renderContact(req, res) {
    try{
      let isLogged = false;

      if(req.session.user){
        isLogged = true;
      }
      res.render("pages/contact",{ isLogged });
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
      const details= {
        name: "Contact",
        en_name: "contact",
        url: req.originalUrl,
        rol: req.session.user.rol,  
      }

      const functions = enumFunctionbyRol[req.session.user.rol];
      let isLogged = false;

      if(req.session.user){

        isLogged = true;
      }

      res.status(201).render("pages/gestion", { objets: contacts, details, functions, isLogged})
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
