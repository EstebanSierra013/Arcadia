import dbArcadia from "../database/db.js";

export class ContactModel {
  static async create({ input }){
    const { mail, title, description } = input;
    try {
      await dbArcadia.query(
        'INSERT INTO contact (mail, title, description) VALUES (?, ?, ?);',
        [mail, title, description]
      )
    } catch (e) {
      console.log(e)
      throw new Error('Error creating contact')
    }
  }
}