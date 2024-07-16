import jwt from 'jsonwebtoken';
import { TokenVerificationException, UnauthorizedException } from '../helpers/customExceptions.js';

export function authMiddleware(roles = []){
  return (req,res,next) => {  
    const token = req.cookies.access_token;
    req.session = { user: null }    
    try {
      if (!token) throw new TokenVerificationException("User not logged in");
      const data = jwt.verify(token, process.env.SECRET_JWT_KEY);
      req.session.user = data;
      const { rol } = req.session.user;
      if (roles.length && !roles.includes(rol)){
        throw new UnauthorizedException("Rol Error");
      }
      next();
    } catch (err) {
      res.status(422).json({...err});
    }
  };
}