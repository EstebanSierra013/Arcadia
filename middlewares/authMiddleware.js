import jwt from 'jsonwebtoken';

export function authMiddleware(){
  return (req,res,next) => {
    const token = req.cookies.access_token;
    req.session = { user: null }
    if (!token) res.status(403).send("Access not authorized");
    try {
      const data = jwt.verify(token, process.env.SECRET_JWT_KEY)
      req.session.user = data
      next();
    } catch (err) {
      res.status(422).json({...err});
    }
  };
}