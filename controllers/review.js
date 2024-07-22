import { ReviewModel } from "../models/review.js";
import { UpdateFailedException, NotFoundException } from "../helpers/customExceptions.js";
import { enumFunctionbyRol } from "../helpers/enumRols.js";
export class ReviewController {

  static async renderNew(req, res) {
    try{
      res.render("/pages/");
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async getAll(req, res) {
    try{
      const reviews = await ReviewModel.getAll();
      if(!reviews.length) {
        throw new NotFoundException("Review not found");
      }
      const details= {
        name: "Opinions",
        en_name: "reviews",
        url: req.originalUrl,
        rol: req.session.user.rol,  
      }

      const functions = enumFunctionbyRol[req.session.user.rol];
      let isLogged = false;

      if(req.session.user){

        isLogged = true;
      }
      res.status(201).render("pages/gestion", { objets: reviews, details, functions, isLogged})
    } catch (err){
      res.status(404).json({... err})
    }
  }

  static async create(req, res) {
    const input = req.body;    
    try{
      const {review_id} = await ReviewModel.create({ input });
      res.status(201).json({ message: "Review created, Id: " + review_id});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async approveReview(req, res) {
    const { id } = req.params;
    
    try{
      const { affectedRows }  = await ReviewModel.approveReview({ review_id: id });
      if (!affectedRows) throw new UpdateFailedException("Review approve failed");
      res.status(201).json({ message: "Review approved"});
    }catch(err){
      res.status(404).json({... err})
    }    
  }

  static async delete(req, res) {
    const { id } = req.params
    try{
      const result = await ReviewModel.delete({ review_id : id });       
      if (result === false) {
        throw new NotFoundException("Review not found");
      }
      res.status(201).json({ message: "Review deleted" });
    }catch(err){
      res.status(404).json({... err})
    }    
  }
}
