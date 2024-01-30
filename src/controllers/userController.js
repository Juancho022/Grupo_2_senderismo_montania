// const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const { create } = require('domain');



const controller = {
    list: async (req, res) => {
        try {
            const users = await db.User.findAll({
                include: ['roles'],
                attributes: {
                    exclude: ['password', 'roles_id']
                }
            });
            res.render('usersList', { users });
        } catch (error) {
            res.send(error);
        }
    },

    profile: (req, res) => {
        db.User.findByPk(req.params.id, {
            include: ['roles']
        }
        )
            .then(product => {
                res.render('profile', { user })
            })
    },

    edit: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);
            const roles = await db.Rol.findAll()
            res.render('productUserEdit', { user, roles });
        } catch (error) {
            res.send(error);
        }
    },

    update: (req, res) => {
        db.User.update(req.body, { where: { id: req.params.id } })
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                res.send(err);
            });
    },

    login: (req, res) => {
        res.render('login');
    },

    loginProcess: async (req, res) => {
        const { emailUsuario, passwordUsuario, recordarUsuario } = req.body;

        try {
            const userToLog = User.findOne({ where: { email: emailUsuario } });

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
                return res.render('login', { error });
            }
        } catch (error) {
            res.send(error);
        }
    },

    register: (req, res) => {
        console.log('Ruta de login');
        res.render('register');
    },

    registerProcess: async (req, res) => {
        const { email } = req.body;
        const errors = validationResult(req);

        try {
            const userExists = User.findOne({ where: { email } });

            if (!errors.isEmpty()) {  //si hay error renderiza la vista del registro con el error de validación
                return res.render('register', { errors: errors.mapped(), oldData: req.body });

            } else if (userExists) {  //si el usuario existe muestra la vista de error y redirige a login
                return res.render('userExists');

            } else { //si el usuario no existe y no hay error de validación permite el registro       
                const user = {
                    ...req.body,
                    image: req.file?.filename || "default-image.jpg"
                };

                const newUser = await User.create(user);
                return res.send('usuario registrado con éxito');
            }
        } catch (error) {
            res.send(err);
        }
    },

    logout: (req, res) => {
        // Elimina la propiedad 'user' de la sesión para cerrarla
        req.session.destroy();

        // Borra la cookie de usuario
        res.clearCookie('userEmail');

        // Redirige al usuario a la página de inicio
        return res.redirect('/');
    },

};

module.exports = controller;