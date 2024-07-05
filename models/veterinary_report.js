import dbArcadia from "../database/db.js";

export class VeterinaryReportModel {
  static async getAll(){
    const veterinary_reports = await dbArcadia.query('SELECT * FROM veterinary_report;');
    return veterinary_reports;
  }

  static async create({ input }){
    const { date, food, quantity, created_by, status, animal_id } = input;
    try {
      await dbArcadia.query(
        'INSERT INTO veterinary_report ( date, food, quantity, created_by, status, animal_id ) VALUES (?, ?, ?, ?, ?, ?);',
        [date, food, quantity, created_by, status, parseInt(animal_id,10)]
      );
    } catch (e) {
      console.log(e)
      throw new Error('Error creating veterinary report')
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM veterinary_report WHERE veterinary_report_id = ?;',
        [id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating veterinary report')
    }
  }
}