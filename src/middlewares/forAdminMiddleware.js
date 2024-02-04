function forAdmin(req, res, next) {
    const user = req.session.user;
    if (user && user.id === 1) { 
        next(); 
    } else {
        return res.redirect('/');
    }
}

module.exports = forAdmin;