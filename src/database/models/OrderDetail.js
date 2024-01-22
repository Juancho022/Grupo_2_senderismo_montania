module.exports = (sequelize, dataTypes) => {
    let alias = 'OrderDetail'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
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

    return OrderDetail
};