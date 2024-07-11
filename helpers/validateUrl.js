
export function validateUrl(role){
  return (req, res, next) => {
    if (req.originalUrl.split('/')[1] != 'profile') { 
      res.status(302).redirect('/profile/' + role + req.originalUrl)
     }else{
      next(); 
    } 
  }
}