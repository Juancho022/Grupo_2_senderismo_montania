const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function forUsers (req, res, next){

    if(!users.email == req.params.email){
        return res.redirect('/user/login');
    }
    return next();
  };
  
  module.exports = estaAutenticado;