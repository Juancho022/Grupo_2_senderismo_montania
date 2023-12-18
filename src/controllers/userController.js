const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const { create } = require('domain');



const controller = {
    login(req, res) {
        res.render('login');
    },

    loginProcess(req, res) {
        const { emailUsuario, passwordUsuario, recordarUsuario } = req.body;

        let userToLog = User.findByField('email', emailUsuario);

        if (userToLog && userToLog.password === passwordUsuario) {
            req.session.user = {
                id: userToLog.id,
                firstName: userToLog.firstName,
            };
            
            // Si el usuario decidió ser recordado, establece una cookie
            if (recordarUsuario) {
                res.cookie('userEmail', emailUsuario, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // La cookie expirará en 30 días
            }

            return res.redirect('/');
            
        } else {
            const error = 'Correo electrónico o contraseña incorrectos'
            return res.render('login', { error: error });
        }
    },

    register(req, res) {
        res.render('register');
    },

    registerProcess(req, res){

        const { email } = req.body;
        const errors = validationResult(req);
        const userExists = User.findByField('email', email);
    
        if (!errors.isEmpty()) {  //si hay error renderiza la vista del registro con el error de validación
            return res.render('register', { errors: errors.mapped(), oldData: req.body });

        } else if (userExists) {  //si el usuario existe muestra la vista de error y redirige a login
            return res.render('userExists');

        } else { //si el usuario no existe y no hay error de validación permite el registro       
             let user = {
                 ...req.body,
                 image: req.file?.filename || "default-image.jpg"    
             }
             userId = User.create(user);
           

        return res.send('usuario registrado con éxito');
        }
    },

    logout(req, res) {
        // Elimina la propiedad 'user' de la sesión para cerrarla
        req.session.destroy();
                
        // Borra la cookie de usuario
        res.clearCookie('userEmail');

        // Redirige al usuario a la página de inicio
        return res.redirect('/');
    },
  
};

module.exports = controller;