// const db = require('../database/models');
// const sequelize = db.sequelize;

// const usersFilePath = path.join(__dirname, '../data/users.json');
// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



// function forUsers(req, res, next) {
//     const user = req.session.user;

//     if (!user || user.roles_id == 'admin') {
//         return res.redirect('/inventory');
//     }

//     next();
// }

// module.exports = forUsers;