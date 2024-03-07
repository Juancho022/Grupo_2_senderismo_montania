module.exports = (sequelize, DataTypes) => {
    let alias = 'CartDetail'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        carts_id: {
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
        }
    };
    let config = {
        tableName: 'carts_details',
        timestamps: true
    }
    const CartDetail = sequelize.define(alias, cols, config);

    return CartDetail
};