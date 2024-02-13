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
                    return res.redirect('/user/profile');
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
    loginProcess: async (req, res) => {
        try {
            const userToLogin = await db.User.findOne({
                where: { email: req.body.email }
            });
            const rememberMe = Boolean(req.body.recordarme);

            if (userToLogin) {
                const okPassword = bcrypt.compareSync(req.body.password, userToLogin.password);

                if (okPassword) {
                    const { password, ...nonSensibleUserData } = userToLogin;
                    req.session.user = nonSensibleUserData;
                    if (rememberMe) {
                        res.cookie("recordarme", userToLogin.email, {
                            maxAge: oneMonth,
                            secure: true,
                            httpOnly: true,
                        });
                    }
                    //const redirectRoute = getRedirectRouteByRole(userToLogin.roles_id);
                    //return res.redirect(redirectRoute);
                }
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: "El email y/o la contraseña son incorrectos"
                    }
                }
            });
        } catch (error) {
            console.log(error)
            return res.json(error);
        }
    },
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
    detail: async (req, res) => {
        try {
            const user = await db.User.findByPK(req.params.id);
            return res.render('userDetail', { user });
        } catch (error) {

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