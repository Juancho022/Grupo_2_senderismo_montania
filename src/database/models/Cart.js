module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        }
    };
    let config = {
        tableName: 'carts',
        timestamps: true
    }
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) { // el carrito pertenece a un usuario
        Cart.belongsTo(models.User, {
            foreignKey: 'users_id',
            as: 'users'
    });
    };

    return Cart
};