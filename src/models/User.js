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

    findAll: function () {
        return this.getData;
    },

    create: function (userData) {
    }
}

console.log(User.getData());