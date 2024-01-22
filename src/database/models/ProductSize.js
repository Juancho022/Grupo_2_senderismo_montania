module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductSize'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sizes_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'products_sizes',
        timestamps: false
    }
    const ProductSize = sequelize.define(alias, cols, config);

    return ProductSize
};