const db = require('../database/models');

async function authenticationMiddleware(req, res, next) {
    if (req.cookies.userEmail && !req.session.user) {
        try {
            const userFromCookie = await db.User.findOne({ where: { email: req.cookies.userEmail } });
            if (userFromCookie) {
                req.session.user = {
                    id: userFromCookie.id,
                    email: userFromCookie.email,
                    // Otros campos necesarios
                };
            }
        } catch (error) {
            console.error('Error al buscar al usuario:', error);
            next(error);
            return;
        }
    }
    next();
}

module.exports = authenticationMiddleware;