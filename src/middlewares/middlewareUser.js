const fs = require('fs');
const path = require('path');

function forUsers (req, res, next){
    const userFromCookie = User.findByField('email', req.cookies.userEmail);

    if(!userFromCookie){
        return res.redirect('/user/login');
    }
    next();
}

module.exports = forUsers;