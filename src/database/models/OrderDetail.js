module.exports = (sequelize, DataTypes) => {
    let alias = 'OrderDetail'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        orders_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        products_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'orders_details',
        timestamps: true
    }
    const OrderDetail = sequelize.define(alias, cols, config);

    OrderDetail.associate = function (models) { 
        OrderDetail.hasMany(models.Product, {  //un producto asociado a muchos detalles de la orden
            foreignKey: 'products_id',
            as: 'products'
        });
        OrderDetail.hasMany(models.Order, {   
            foreignKey: 'orders_id',
            as: 'orders'
        });
    };


    return OrderDetail
};