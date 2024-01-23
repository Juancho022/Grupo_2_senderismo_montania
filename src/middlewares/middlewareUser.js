const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function forUsers(req, res, next) {
    const user = req.session.user;

    if (!user || user.category == 'admin') {
        return res.redirect('/inventory');
    }

    next();
}

module.exports = forUsers;