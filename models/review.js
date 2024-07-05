import dbArcadia from "../database/db.js";

export class ReviewModel {
  static async getAll(){
    const reviews = await dbArcadia.query('SELECT * FROM review;');
    return reviews;
  }

  static async create({ input }){
    const { pseudo, comment } = input;
    try {
      await dbArcadia.query(
        'INSERT INTO review ( pseudo, comment ) VALUES (?, ?);',
        [ pseudo, comment ]
      )
    } catch (e) {
      console.log(e)
      throw new Error('Error creating review')
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM review WHERE review_id = ?;',
        [id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating review')
    }
  }
}