const fs = require('fs');
const path = require('path');

const users = require('../models/User');

function forUsers (req, res, next){
    const { email } = req.body

    if(!users.findByField('email', email)){
        return res.redirect('/user/login');
    }
    next();
}

module.exports = forUsers;