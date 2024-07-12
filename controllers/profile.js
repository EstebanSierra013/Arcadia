export class ProfileController {
  static async getProfile (req, res){
    const {username} = req.session.user
    res.json(username);    
  }
}