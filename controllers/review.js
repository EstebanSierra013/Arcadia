import { ReviewModel } from "../models/review.js";
import { UpdateFailedException, NotFoundException } from "../helpers/customExceptions.js";

export class ReviewController {
  static async getAll(req, res) {
    try{
      const reviews = await ReviewModel.getAll();
      if(!reviews.length) {
        throw new NotFoundException("Review not found");
      }
      res.status(201).json({ reviews });
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
