const db = require('../../database/models');

const controller = {
    list(req, res) {
        db.User.findAll({
            include: ['roles'],
            attributes: {
                exclude: ['password']
            }
        })
            .then((users) => {
                const response = {
                    users: users.map(user => {
                        ({
                            id: user.id,
                            firstName: user.first_name,
                            lastName: user.last_name,
                            email: user.last_name,
                            profile: 'users/profile'
                        })
                    })
                }
                res.status(500).json(response);
            })
            .catch((err) => {
                res.status(500).json({error: err.message});
            })
    }

}

module.exports = controller; 