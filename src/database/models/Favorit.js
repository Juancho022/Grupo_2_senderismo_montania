module.exports = (sequelize, DataTypes) => {
    let alias = 'Favorit'; 
    let cols = {
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        products_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
    };
    let config = {
        tableName: 'favorites',
        timestamps: true
    }
    const Favorit = sequelize.define(alias, cols, config);

    Favorit.associate = function (models) { // Favoritos tiene un usuario asociado
        Favorit.belongsTo(models.User, {
            foreignKey: 'users_id',
            as: 'users'
        });
    };

    return Favorit
};