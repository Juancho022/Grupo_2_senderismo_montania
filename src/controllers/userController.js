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
            return res.send(`Inicio de sesión exitoso para ${userToLog.firstName} ${userToLog.lastName}`);
        } else {
            console.log('Usuario no encontrado o contraseña incorrecta');
            return res.send('Usuario no encontrado o contraseña incorrecta');
        }
    },

    register(req, res) {
        res.render('register');
    },   
}


module.exports = controller;

