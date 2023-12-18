const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function forUsers (req, res, next){
    if(!users.includes(req.query.user)){
        return res.redirect('/user/login');
    }
    next();
}

module.exports = forUsers;