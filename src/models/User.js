//¿Qué procesos queremos correr acá?
//1.Guardar usuario en la DB // 2. Buscar al usuario si se quiere loguear //3.Traer a un usuario por ID // 4.Editar un usuario //5. Borrar un usuario de la DB

//Se crea un objeto literal que tiene métodos que se encargarán de hacer lo mencionado anteriormente.
const { validationResult } = require('express-validator');
const fs = require('fs');

const User = {
    //referenciar el archivo (base de datos) del que tomará la información:
    fileName: './src/data/users.json',
    //convertimos el archivo users en un array con el que pueda trabajar
    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8')); //si el archivo json está vacío, ponerle corchetes vacíos.
    },
    //Como el ID no lo carga el usuario, se lo asigna el sistema, se hace otro método:
    generateId:function () {
        let allUsers = this.findAll(); 
        let lastUser = allUsers.pop();
            //Si en el JSON no hay un usuario con ID, devuelve NaN y, si no hay ninguno directamente, devuelve un error. Para solucionarlo:
            if (lastUser) {
                return lastUser.id + 1; 
            }
            return 1;
    },

    //Traer todos los usuarios 
    findAll: function () {
        return this.getData();
    },
    //Crear un nuevo usuario y guardarlo. 
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser =  {
            id: this.generateId(),
            //Usamos el spread operator para traer toda la data del usuario
            ...userData
        }
        allUsers.push(newUser); //esto es un array, tengo que transformarlo para que lo lea el archivo JSON
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null, ' ')); //prestar atención que entre comillas va espacio vacio
        return newUser;
    },
    
    //Traer a un usuario por ID. PK es primary key
    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id) //quiero que recorra todos los usuarios y me traiga solo el que tiene el id
        return userFound;
    },

    //Traer a un usuario por cualquier campo. Se puede hacer mejor porque puede que le pongas un campo que sea en todos lo mismo (país por ejemplo) y sólo te traiga uno. Hay que hacer un método para eso
    findByField: function (field,text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text) //quiero que recorra todos los usuarios y me traiga solo el que tiene el id
        return userFound;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        //Quiero que me devuelva todos los usuarios sin el eliminado
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null, ' '));
        return true;
    }

}

module.exports = User; //ahora está listo para usarse en el CONTROLADOR (paso siguiente)

//Para probar que funcione. Si se le pasa un número valor que no está en la base devuelve undefinded
//console.log(User.findByPk(2));