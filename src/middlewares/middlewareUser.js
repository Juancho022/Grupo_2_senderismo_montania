function forUsers(req, res, next) {
	if(!req.session.usuario){  
		return res.redirect('/user/login');
	}
	next();
}

module.exports = forUsers;