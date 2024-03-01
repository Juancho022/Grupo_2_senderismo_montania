// const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const db = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
const { create } = require('domain');
const cookies = require('cookie-parser');
const oneMonth = 1000 * 60 * 60 * 24 * 30;


const controller = {
    admin: (req, res) => {
        res.render('adminView');
    },

    list: async (req, res) => {
        try {
            const users = await db.User.findAll({
                include: ['roles'],
                attributes: {
                    exclude: ['password']
                }
            });
            res.render('usersList', { users });
        } catch (error) {
            res.send(error);
        }
    },
    profile: async (req, res) => {
        try {
            if (!req.session.user) {
                return res.send('Usuario no autenticado');
            }
            const user = await db.User.findByPk(req.session.user.id, {
                attributes: ['id', 'first_name', 'last_name', 'email', 'birthdate', 'document_number', 'phone', 'address', 'img'],
                include: ['roles']
            });
            if (!user) {
                return res.send('Usuario no encontrado');
            }
            res.render('profile', { user: user.dataValues });
        } catch (error) {
            console.error('Error al buscar el usuario:', error);
            res.status(500).send('Error interno del servidor');
        }
    },

    edit: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);
            const roles = await db.Rol.findAll()
            res.render('userEditForm', { user, roles });
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {
            console.log('Llegó una solicitud de actualización de usuario');
            const userId = req.params.id;
            const userDataToUpdate = req.body;
            console.log('Actualizando usuario con ID:', userId);
            console.log('Datos a actualizar:', userDataToUpdate);

            const result = await db.User.update(userDataToUpdate, { where: { id: userId } });
            console.log('Resultado de la actualización:', result); // Agrega esta línea

            console.log('Usuario actualizado exitosamente.');
            res.redirect('/profile');
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    login: (req, res) => {
        res.render('login');
    },
    loginProcess: async (req, res) => {
        try {
            const userToLogin = await db.User.findOne({
                where: { email: req.body.email }
            });
            if (userToLogin) {
                const okPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (okPassword) {
                    const { password, ...nonSensibleUserData } = userToLogin.dataValues;
                    req.session.user = nonSensibleUserData;
                    const rememberMe = Boolean(req.body.recordarme);
                    if (rememberMe) {
                        res.cookie("recordarme", userToLogin.email, {
                            maxAge: oneMonth,
                            secure: true,
                            httpOnly: true,
                        });
                    }
                    if (userToLogin.roles_id == 1) {
                        return res.redirect('http://localhost:3001/')
                    } else {
                        return res.redirect('/user/profile');
                    }
                } else {
                    return res.render('login', {
                        errors: {
                            email: {
                                msg: "El email y/o la contraseña son incorrectos"
                            }
                        }
                    });
                }
            } else {
                return res.render('userDoesNotExist', {
                    message: "El usuario no está registrado"
                });
            }
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    
    register: (req, res) => {
        res.render('register');
    },
    registerProcess: async (req, res) => {
        try {
            const userExists = await db.User.findOne({ where: { email: req.body.email } });
            if (userExists) {
                return res.render('userExists');
            }
    
            // Validar que las contraseñas coincidan
            if (req.body.password !== req.body.confirmPassword) {
                return res.render('register', { errors: { confirmPassword: { msg: 'Las contraseñas no coinciden' } }, oldData: req.body });
            }
    
            const errors = validationResult(req);
            if (!errors.isEmpty()) {  
                return res.render('register', { errors: errors.mapped(), oldData: req.body });
            }
            
            const newUser = {
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password.toString(), 10),
                img: req.file?.filename || "default-image.jpg",
                roles_id: 2
            };
            await db.User.create(newUser);
            console.log(newUser)
            return res.redirect('/user/login');
        } catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    login: async (req, res) => {
        const userEmailFromCookie = req.cookies.recordarme;
        if (userEmailFromCookie) {
            try {
                const userToLogin = await db.User.findOne({
                    where: req.body.email
                });
                if (userToLogin) {
                    const { password, ...nonSensibleUserData } = userToLogin;
                    req.session.user = nonSensibleUserData;
                    return res.redirect('profile');
                }
            } catch (error) {
                return res.json(error);
            }
        }
        return res.render('login');
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("recordarme");
        return res.redirect('/');
    },
    delete: async (req, res) => {
        try {
            await db.User.destroy({
                where: req.params.id
            });
            return res.redirect('/users');
        } catch (error) {
            res.json(error)
        }
    },
};
module.exports = controller;