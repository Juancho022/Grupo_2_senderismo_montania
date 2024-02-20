const db = require('../../database/models');

const countCategorieController = {
    countCategories(req, res) {
        db.Category.count()
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

module.exports = countCategorieController;
