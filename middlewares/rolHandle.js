export function checkRole (roles) {
  return (req, res, next) => {
  const { rol } = req.session.user;
  console.log(roles,rol)
  !roles.includes(rol)
    ? res.status(401).json("Access not authorized, Rol Error")
    : next();
  }
}