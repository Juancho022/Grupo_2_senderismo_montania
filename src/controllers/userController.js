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


const controller = {
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
            const user = await db.User.findByPk(req.session.user.id, {
                attributes: { exclude: ['password'] },
                include: ['role']
            });
            res.render('profile', { user: user.dataValues });
        } catch (error) {

        }
    },


    edit: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);
            const roles = await db.Rol.findAll()
            res.render('userEditForm', { user, roles });
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
        try {
            const user = await db.User.findOne({
                where: { email: req.body.emailUsuario },
                include: ['roles'],
                limit: 1
            });
            if (!user) {
                return res.render('login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña invalidos' } } });
            }
            if (!bcrypt.compareSync(req.body.passwordUsuario, user.password)) {
                return res.render('login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña invalidos' } } });
            }
            req.session.user = {
                email: user.email,
                id: user.roles.id
            };
            if (req.body.recordarUsuario != undefined) {
                res.cookie('userEmail', req.session.user.email, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // La cookie expirará en 30 días
            }
            return res.redirect('/');
        } catch (error) {
            res.send(error);
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
            const errors = validationResult(req);
            if (!errors.isEmpty()) {  //si hay error renderiza la vista del registro con el error de validación
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