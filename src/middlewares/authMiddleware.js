const { getRedirectRouteByRole } = require("../middlewares/users")

function auth(req, res, next) {
    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    next();
}
function authorization(req, res, next) {
    if (!req.session.user) {
        return res.status(403).send("No contas con los permisos para acceder a esta ruta");
    }
    next();
}

function onlyGuestUser(req,res,next){
    if(req.session.user){
      const routeToRedirect = getRedirectRouteByRole(req.session.user.roles_id)
      return res.redirect(routeToRedirect);
    }
    next(); 
  }
// function rememberMiddleware(req, res, next) {
//     // Verifica si existe una sesión de usuario y una cookie userEmail
//     if (req.cookies.userEmail !== undefined && req.session.user !== undefined) {
//         // Si la dirección de correo electrónico en la cookie coincide con la de la sesión, establece la dirección de correo electrónico en la sesión
//         if (req.session.user.email !== req.cookies.userEmail) {
//             req.session.user.email = req.cookies.userEmail;
//         }
//     }
//     next();
// }


module.exports = {
    auth,
    authorization,
    onlyGuestUser
    // rememberMiddleware,
};