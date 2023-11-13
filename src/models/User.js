//¿Qué procesos queremos correr acá?
//1.Guardar usuario en la DB // 2. Buscar al usuario si se quiere loguear //3.Traer a un usuario por ID // 4.Editar un usuario //5. Borrar un usuario de la DB

//Se crea un objeto literal que tiene métodos que se encargarán de hacer lo mencionado anteriormente.
const fs = require('fs');

const User = {
    //referenciar el archivo (base de datos) del que tomará la información:
    fileName: './src/data/users.json',
    //convertimos el archivo users en un array con el que pueda trabajar
    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    //Como el ID no lo carga el usuario, se lo asigna el sistema, se hace otro método:
    generateId:function () {
        let allUsers = this.findAll(); 
        let lastUser = allUsers.pop();
        return lastUser.id + 1; 
    },


    //Traer todos los usuarios 
    findAll: function () {
        return this.getData();
    },
    //Crear un nuevo usuario y guardarlo. 
    create: function (userData) {
        let allUsers = this.findAll();
        allUsers.push(userData); //esto es un array, tengo que transformarlo para que lo lea el archivo JSON
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null, ' ')); //prestar atención que entre comillas va espacio vacio
        return true;

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

}

//Para probar que funcione. Si se le pasa un número valor que no está en la base devuelve undefinded
console.log(User.generateId());