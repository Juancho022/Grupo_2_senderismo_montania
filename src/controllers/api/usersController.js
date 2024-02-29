const db = require('../../database/models');

const usersController = {
    list(req, res) {
        db.User.findAll({
            include: ['roles'],
            attributes: {
                exclude: ['password']
            }
        })
            .then((users) => {
                const response = {
                    count: users.length, // Contar la cantidad de usuarios
                    users: users.map(user => ({
                            id: user.id,
                            name: user.first_name + ' ' + user.last_name, // Nombre completo
                            email: user.email, // Correo electrónico
                            detail: '/api/users/' + user.id // URL para obtener el detalle
                        }))
                };
                res.status(200).json(response);
            })            
            .catch((err) => {
                res.status(500).json({error: err.message});
                })
        },

    // Endpoint para obtener el detalle de un usuario por su ID
    getById(req, res) {
            const userId = req.params.id;
    
            db.User.findByPk(userId, {
                include: ['roles'],
                attributes: {
                    exclude: ['password']
                }
            })
                .then((user) => {
                    if (!user) {
                        return res.status(404).json({ error: 'Usuario no encontrado' });
                    }
    
                    // Construir el objeto de respuesta
                    const response = {
                        id: user.id,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        email: user.email,
                        profileImageUrl: user.profile_image_url, 
                    };
    
                    res.status(200).json(response);
                })
                .catch((err) => {
                    res.status(500).json({ error: err.message });
                });
        }
    };


module.exports = usersController; 

