module.exports = (sequelize, DataTypes) => {
    let alias = 'Size'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sizes_type: {
            type: DataTypes.STRING(2),
            allowNull: false,
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    }
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) { 
        Size.belongsToMany(models.Product,{
            through: 'product_sizes',
            foreignKey: 'sizes_id',
            as:'products'
        })
    };

    return Size
};