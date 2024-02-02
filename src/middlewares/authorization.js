function authorization(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/user/login');
    }
    next();
}

module.exports = authorization;