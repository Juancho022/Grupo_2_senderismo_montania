const User = require ('../models/User.js')


const controller = {
    login(req, res) {
        res.render('login');
    },
    register(req, res) {
        res.render('register');
    },
};
/*let userToCreate = {
    ...req.body,
    avatar: req.file.filename  //es para traer todos los datos del body + el nombre de la imagen que cargo el usuario cuando se crea en el JSON.
}

//Si pasa todas las validaciones va esta línea:
 User.create(userToCreate)
return res.send ('Usuario creado con éxito');
//para encriptar la contraseña se instala bcryptjs */
module.exports = controller;