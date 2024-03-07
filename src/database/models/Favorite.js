module.exports = (sequelize, DataTypes) => {
    let alias = 'Favorite'; 
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
    const Favorite = sequelize.define(alias, cols, config);

    Favorite.associate = function (models) { // Favoritos tiene un usuario asociado
        Favorite.belongsTo(models.User, {
            foreignKey: 'users_id',
            as: 'users'
        });
    };

    return Favorite
};