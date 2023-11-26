const fs = require ('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const User = require('../models/User');


const controller = {
    login(req, res) {
        res.render('login');
    },

    loginProcess(req, res) {
        const { emailUsuario, passwordUsuario } = req.body;

        let userToLog = User.findByField('email', emailUsuario);

        if (userToLog && userToLog.password === passwordUsuario) {
            req.session.user = {
                id: userToLog.id,
                firstName: userToLog.firstName,
            };
            return res.render('index', { user: req.session.user });
        } else {
            const error = 'Correo electrónico o contraseña incorrectos'
            return res.render('login',{ error: error });
        }
    },

    register(req, res) {
        res.render('register');
    },   
}


module.exports = controller;

