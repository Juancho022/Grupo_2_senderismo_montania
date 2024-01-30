const forUsers = (req, res, next) => {
    console.log('Middleware User ejecutado');
    console.log('Sesión del usuario:', req.session.user);

    if (!req.session.usuario) {
      console.log('Usuario no autenticado. Redirigiendo...');
      res.redirect('/user/login') // No autorizado
    }
    return next();
};

module.exports = forUsers;