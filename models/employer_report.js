import dbArcadia from "../database/db.js";

export class EmployerReportModel {
  static async getAll(){
    const employer_reports = await dbArcadia.query('SELECT * FROM employer_report;');
    return employer_reports;
  }

  static async create({ input }){
    const { date, food, quantity, created_by, animal_id } = input;
    try {
      await dbArcadia.query(
        'INSERT INTO employer_report ( date, food, quantity, created_by, animal_id ) VALUES (?, ?, ?, ?, ?);',
        [date, food, quantity, created_by, parseInt(animal_id,10)]
      )
    } catch (e) {
      console.log(e)
      throw new Error('Error creating employer report')
    }
  }

  static async delete({ id }){
    try {
      const { affectedRows } = await dbArcadia.query(
        'DELETE FROM employer_report WHERE employer_report_id = ?;',
        [id]
      )
      return affectedRows != 0 ? true : false ;
    } catch (e) {
      console.log(e)
      throw new Error('Error creating employer report')
    }
  }
}