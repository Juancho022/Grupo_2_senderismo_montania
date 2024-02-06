function rememberMiddleware(req, res, next) {
    // Verifica si existe una sesión de usuario y una cookie userEmail
    if (req.cookies.userEmail !== undefined && req.session.user !== undefined) {
        // Si la dirección de correo electrónico en la cookie coincide con la de la sesión, establece la dirección de correo electrónico en la sesión
        if (req.session.user.email === req.cookies.userEmail) {
            req.session.user.email = req.cookies.userEmail;
        }
    }
    next();
}

module.exports = rememberMiddleware;