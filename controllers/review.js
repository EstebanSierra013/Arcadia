import { validateReview } from "../helpers/schemas.js";
import { ReviewModel } from "../models/review.js";

export class ReviewController {
  static async getAll(req, res) {
    const reviews = await ReviewModel.getAll();
    res.json(reviews);
  }

  static async create(req, res) {
    const input = validateReview(req.body);
    const result = await ReviewModel.create({ input });
    if (result === false) {
      return res.status(404).json({ message: "Review not created" });
    }
    return res.status(201).json({ message: "Review created" });
  }

  static async delete(req, res) {
    const input = req.body;
    const { id } = req.params;
    const result = await ReviewModel.delete({ id, input });
    console.log(result);
    if (result === false) {
      return res.status(404).json({ message: "Review not found" });
    }
    return res.json({ message: "Review deleted" });
  }
}
