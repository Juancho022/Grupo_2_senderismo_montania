module.exports = (sequelize, DataTypes) => {
    let alias = 'Order'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    }
    const Order = sequelize.define(alias, cols, config);

    
    Order.associate = function (models) { // un usuario pertenece o tiene un rol
        Order.belongsTo(models.User, {
            foreignKey: 'users_id',
            as: 'orders'
        });
    };

    return Order
};