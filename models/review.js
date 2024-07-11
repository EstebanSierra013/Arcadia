import dbArcadia from "../database/db.js";

export class ReviewModel {
  static async getAll(reviews_filter = {}){
    try{            
      const sql_filter = Object.keys(reviews_filter).length ? `WHERE isVisible = ${reviews_filter.isVisible}` :  "";
      const reviews = await dbArcadia.query(
        `SELECT review_id, pseudo, comment FROM review ${sql_filter} ORDER BY isVisible, review_id DESC;`);
      return reviews;
    }catch(err){
      throw err;
    }
  }

  static async create({ input }){
    const { pseudo, comment } = input;
    try {
      const result = await dbArcadia.query(
        'INSERT INTO review ( pseudo, comment ) VALUES (?, ?);',
        [ pseudo, comment ]
      )
      return ({review_id: result.insertId})
    } catch (err) {     
      throw err
    }
  }

  static async approveReview( { id } ){
    try {
      const result = await dbArcadia.query(
        `UPDATE review SET isVisible = true WHERE review_id = ?;`,
        [id]
      )
      return result;   
    } catch (err) {     
      throw err
    }
  }

  static async delete({ review_id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM review WHERE review_id = ?;',
        [review_id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (err) {
      err.cause = 'Error deleting review: ' + err.cause 
      throw err
    }
  }
}