const db = require('../../database/models');

const countProductController = {
    getProductCount(req, res) {
        db.Product.count()
            .then(count => {
                const response = {
                    count: count
                };
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    },
};

module.exports = countProductController;

